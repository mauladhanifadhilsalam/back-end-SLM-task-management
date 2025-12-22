import { Request } from "express";
import { RoleType, TicketType } from "@prisma/client";
import type { findTicket } from "../../services/ticket.service";
import { Viewer, PermissionRule, isAdmin, isDeveloper, isProjectManager, runRules } from "./core";

type TicketWithRelations = NonNullable<Awaited<ReturnType<typeof findTicket>>>;

type TicketState = {
  type: TicketType | null;
  requesterId: number | null;
  assigneeIds: number[];
  projectMemberIds: number[];
};

type TicketStateOverrides = {
  type?: TicketType;
  requesterId?: number;
  assigneeIds?: number[];
  projectMemberIds?: number[];
};

function dedupeIds(ids: number[] = []) {
  return Array.from(new Set(ids)).filter((id) => Number.isInteger(id) && id > 0);
}

function buildState(ticket?: TicketWithRelations, overrides?: TicketStateOverrides): TicketState {
  const base: TicketState = ticket
    ? {
        type: ticket.type,
        requesterId: ticket.requesterId,
        assigneeIds: ticket.assignees.map((assignee) => assignee.user.id),
        projectMemberIds: dedupeIds(
          ticket.project?.assignments?.map((assignment) => assignment.userId) ?? [],
        ),
      }
    : {
        type: null,
        requesterId: null,
        assigneeIds: [],
        projectMemberIds: [],
      };

  const overrideAssigneeIds =
    overrides && overrides.assigneeIds !== undefined ? dedupeIds(overrides.assigneeIds) : undefined;
  const overrideProjectMemberIds =
    overrides && overrides.projectMemberIds !== undefined
      ? dedupeIds(overrides.projectMemberIds)
      : undefined;

  return {
    type: overrides?.type ?? base.type,
    requesterId: overrides?.requesterId ?? base.requesterId,
    assigneeIds: overrideAssigneeIds ?? base.assigneeIds,
    projectMemberIds: overrideProjectMemberIds ?? base.projectMemberIds,
  };
}

const viewerIsAdmin: PermissionRule<TicketState> = ({ viewer }) => isAdmin(viewer);

const viewerIsRequester: PermissionRule<TicketState> = ({ viewer, state }) =>
  state.requesterId === viewer.id;

const viewerIsAssignee: PermissionRule<TicketState> = ({ viewer, state }) =>
  state.assigneeIds.includes(viewer.id);

const viewerIsProjectManagerRule: PermissionRule<TicketState> = ({ viewer }) =>
  isProjectManager(viewer);

const viewerIsProjectMember: PermissionRule<TicketState> = ({ viewer, state }) =>
  state.projectMemberIds.includes(viewer.id);

const viewerIsParticipant: PermissionRule<TicketState> = (ctx) =>
  viewerIsRequester(ctx) || viewerIsAssignee(ctx);

const developerSeesTasks: PermissionRule<TicketState> = ({ viewer, state }) =>
  isDeveloper(viewer) &&
  state.type === TicketType.TASK &&
  state.projectMemberIds.includes(viewer.id);

const developerEditsTasks = developerSeesTasks;

const developerEditsIssuesWhenInvolved: PermissionRule<TicketState> = (ctx) =>
  isDeveloper(ctx.viewer) &&
  ctx.state.projectMemberIds.includes(ctx.viewer.id) &&
  ctx.state.type === TicketType.ISSUE &&
  viewerIsParticipant(ctx);

const viewRules: PermissionRule<TicketState>[] = [
  viewerIsAdmin,
  viewerIsProjectManagerRule,
  viewerIsRequester,
  viewerIsAssignee,
  viewerIsProjectMember,
];

const modifyRules: PermissionRule<TicketState>[] = [
  viewerIsAdmin,
  viewerIsProjectManagerRule,
  viewerIsRequester,
  viewerIsAssignee,
  developerEditsTasks,
  developerEditsIssuesWhenInvolved,
];

function evaluateTicketRules(
  rules: PermissionRule<TicketState>[],
  viewer: Viewer,
  ticket?: TicketWithRelations,
  overrides?: TicketStateOverrides,
) {
  const state = buildState(ticket, overrides);
  return runRules(rules, viewer, state);
}

function canViewTicket(ticket: TicketWithRelations, viewer: Viewer) {
  return evaluateTicketRules(viewRules, viewer, ticket);
}

function canModifyTicket(ticket: TicketWithRelations, viewer: Viewer) {
  return evaluateTicketRules(modifyRules, viewer, ticket);
}

function canModifyTicketState(
  type: TicketType,
  requesterId: number,
  assigneeIds: number[],
  projectMemberIds: number[],
  viewer: Viewer,
) {
  return evaluateTicketRules(modifyRules, viewer, undefined, {
    type,
    requesterId,
    assigneeIds,
    projectMemberIds,
  });
}

export { TicketWithRelations, canViewTicket, canModifyTicket, canModifyTicketState };
