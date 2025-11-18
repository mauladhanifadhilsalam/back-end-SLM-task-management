import { Request } from "express";
import { RoleType, TicketType } from "@prisma/client";
import type { findTicket } from "../services/ticket.service";

type Viewer = { id: number; role: RoleType };
type TicketWithRelations = NonNullable<
  Awaited<ReturnType<typeof findTicket>>
>;

type TicketState = {
  type: TicketType | null;
  requesterId: number | null;
  assigneeIds: number[];
};

type TicketStateOverrides = {
  type?: TicketType;
  requesterId?: number;
  assigneeIds?: number[];
};

type TicketRuleContext = {
  viewer: Viewer;
  state: TicketState;
};

type TicketRule = (ctx: TicketRuleContext) => boolean;

function getViewer(req: Request): Viewer | null {
  if (!req.user) {
    return null;
  }

  const id = Number(req.user.sub);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return { id, role: req.user.role };
}

function isAdmin(viewer: Viewer) {
  return viewer.role === RoleType.ADMIN;
}

function isDeveloper(viewer: Viewer) {
  return viewer.role === RoleType.DEVELOPER;
}

function isProjectManager(viewer: Viewer) {
  return viewer.role === RoleType.PROJECT_MANAGER;
}

function dedupeIds(ids: number[] = []) {
  return Array.from(new Set(ids)).filter(
    (id) => Number.isInteger(id) && id > 0,
  );
}

function buildState(
  ticket?: TicketWithRelations,
  overrides?: TicketStateOverrides,
): TicketState {
  const base: TicketState = ticket
    ? {
        type: ticket.type,
        requesterId: ticket.requesterId,
        assigneeIds: ticket.assignees.map((assignee) => assignee.user.id),
      }
    : {
        type: null,
        requesterId: null,
        assigneeIds: [],
      };

  const overrideAssigneeIds =
    overrides && overrides.assigneeIds !== undefined
      ? dedupeIds(overrides.assigneeIds)
      : undefined;

  return {
    type: overrides?.type ?? base.type,
    requesterId: overrides?.requesterId ?? base.requesterId,
    assigneeIds: overrideAssigneeIds ?? base.assigneeIds,
  };
}

const viewerIsAdmin: TicketRule = ({ viewer }) => isAdmin(viewer);

const viewerIsRequester: TicketRule = ({ viewer, state }) =>
  state.requesterId === viewer.id;

const viewerIsAssignee: TicketRule = ({ viewer, state }) =>
  state.assigneeIds.includes(viewer.id);

const viewerIsProjectManagerRule: TicketRule = ({ viewer }) =>
  isProjectManager(viewer);

const viewerIsParticipant: TicketRule = (ctx) =>
  viewerIsRequester(ctx) || viewerIsAssignee(ctx);

const developerSeesTasks: TicketRule = ({ viewer, state }) =>
  isDeveloper(viewer) && state.type === TicketType.TASK;

const developerEditsTasks: TicketRule = developerSeesTasks;

const developerEditsIssuesWhenInvolved: TicketRule = (ctx) =>
  isDeveloper(ctx.viewer) &&
  ctx.state.type === TicketType.ISSUE &&
  viewerIsParticipant(ctx);

const viewRules: TicketRule[] = [() => true];

const modifyRules: TicketRule[] = [
  viewerIsAdmin,
  viewerIsProjectManagerRule,
  viewerIsRequester,
  viewerIsAssignee,
  developerEditsTasks,
  developerEditsIssuesWhenInvolved,
];

function runRules(
  rules: TicketRule[],
  viewer: Viewer,
  ticket?: TicketWithRelations,
  overrides?: TicketStateOverrides,
) {
  if (!rules.length) {
    return false;
  }

  const state = buildState(ticket, overrides);
  return rules.some((rule) => rule({ viewer, state }));
}

function canViewTicket(ticket: TicketWithRelations, viewer: Viewer) {
  return runRules(viewRules, viewer, ticket);
}

function canModifyTicket(ticket: TicketWithRelations, viewer: Viewer) {
  return runRules(modifyRules, viewer, ticket);
}

function canModifyTicketState(
  type: TicketType,
  requesterId: number,
  assigneeIds: number[],
  viewer: Viewer,
) {
  return runRules(modifyRules, viewer, undefined, {
    type,
    requesterId,
    assigneeIds,
  });
}

export {
  Viewer,
  TicketWithRelations,
  getViewer,
  isAdmin,
  isDeveloper,
  canViewTicket,
  canModifyTicket,
  canModifyTicketState,
};
