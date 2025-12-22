// Core framework and type imports
import express, { Request, Response } from "express";
import { RoleType } from "@prisma/client";

// Route handlers for different parts of the application
import docsRouter from "./routes/docs.route";

import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import projectOwnerRouter from "./routes/project-owner.route";
import projectRouter from "./routes/project.route";
import projectPhaseRouter from "./routes/project-phase.route";
import ticketRouter from "./routes/ticket.route";
import commentRouter from "./routes/comment.route";
import teamUpdateRouter from "./routes/team-update.route";
import ticketAssigneeRouter from "./routes/ticket-assignee.route";
import projectAssignmentRouter from "./routes/project-assignment.route";
import attachmentRouter from "./routes/attachment.route";
import notificationRouter from "./routes/notification.route";
import activityLogRouter from "./routes/activity-log.route";
import dashboardRouter from "./routes/dashboard.route";

// Middleware for authentication and role-based access control
import requireAuth from "./middleware/requireAuth";
import requireRole from "./middleware/requireRole";

// Third-party middleware utilities
import env from "./config/env";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: env.allowedOrigins,
    credentials: true,
  }),
);

// Documentation route
if (env.nodeEnv !== "production") {
  app.use("/docs", express.static("docs"), docsRouter);
}

// Public routes
app.use("/auth", authRouter);
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Protected routes
app.use(requireAuth);

app.use("/users", userRouter);
app.use(
  "/project-owners",
  requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]),
  projectOwnerRouter,
);
app.use("/projects", projectRouter);
app.use(
  "/project-phases",
  requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]),
  projectPhaseRouter,
);
app.use(
  "/project-assignments",
  requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]),
  projectAssignmentRouter,
);
app.use("/tickets", ticketRouter);
app.use("/comments", commentRouter);
app.use("/team-updates", teamUpdateRouter);
app.use("/ticket-assignees", ticketAssigneeRouter);
app.use("/attachments", attachmentRouter);
app.use("/notifications", notificationRouter);
app.use("/activity-logs", requireRole([RoleType.ADMIN]), activityLogRouter);

app.use("/dashboard", dashboardRouter);

// endpoint without requireRole can be accessed by any authenticated user
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to SLM Project Management API" });
});

export default app;
