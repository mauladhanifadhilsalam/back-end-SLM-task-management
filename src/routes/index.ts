import express, { Request, Response, RequestHandler } from "express";
import { RoleType } from "@prisma/client";

import authRouter from "./auth.route";
import userRouter from "./user.route";
import projectOwnerRouter from "./project-owner.route";
import projectRouter from "./project.route";
import projectPhaseRouter from "./project-phase.route";
import projectUpdateRouter from "./project-update.route";
import ticketRouter from "./ticket.route";
import commentRouter from "./comment.route";
import teamUpdateRouter from "./team-update.route";
import ticketAssigneeRouter from "./ticket-assignee.route";
import projectAssignmentRouter from "./project-assignment.route";
import projectRoleRouter from "./project-role.route";
import attachmentRouter from "./attachment.route";
import notificationRouter from "./notification.route";
import activityLogRouter from "./activity-log.route";
import dashboardRouter from "./dashboard.route";

import requireAuth from "../middleware/requireAuth";
import requireRole from "../middleware/requireRole";
import { authenticatedRateLimiter, publicRateLimiter } from "../middleware/rateLimit";

const router = express.Router();

type RouteConfig = {
  path: string;
  route: express.Router;
  middlewares?: RequestHandler[];
};

const publicRoutes: RouteConfig[] = [
  {
    path: "/auth",
    route: authRouter,
    middlewares: [publicRateLimiter],
  },
];

const protectedRoutes: RouteConfig[] = [
  { path: "/users", route: userRouter },
  {
    path: "/project-owners",
    route: projectOwnerRouter,
    middlewares: [requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER])],
  },
  { path: "/projects", route: projectRouter },
  {
    path: "/project-updates",
    route: projectUpdateRouter,
    middlewares: [requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER])],
  },
  {
    path: "/project-phases",
    route: projectPhaseRouter,
    middlewares: [requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER])],
  },
  {
    path: "/project-assignments",
    route: projectAssignmentRouter,
    middlewares: [requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER])],
  },
  {
    path: "/project-roles",
    route: projectRoleRouter,
    middlewares: [requireRole([RoleType.ADMIN])],
  },
  { path: "/tickets", route: ticketRouter },
  { path: "/comments", route: commentRouter },
  { path: "/team-updates", route: teamUpdateRouter },
  { path: "/ticket-assignees", route: ticketAssigneeRouter },
  { path: "/attachments", route: attachmentRouter },
  { path: "/notifications", route: notificationRouter },
  {
    path: "/activity-logs",
    route: activityLogRouter,
    middlewares: [requireRole([RoleType.ADMIN])],
  },
  { path: "/dashboard", route: dashboardRouter },
];

// Public API routes
publicRoutes.forEach(({ path, route, middlewares = [] }) => {
  router.use(path, ...middlewares, route);
});
router.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Protected API routes
router.use(requireAuth);
router.use(authenticatedRateLimiter);

protectedRoutes.forEach(({ path, route, middlewares = [] }) => {
  router.use(path, ...middlewares, route);
});

// endpoint without requireRole can be accessed by any authenticated user
router.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to SLM Project Management API" });
});

export default router;
