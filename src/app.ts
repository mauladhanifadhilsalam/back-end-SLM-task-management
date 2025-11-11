// Core framework and type imports
import express, { Request, Response } from "express";
import { RoleType } from "./generated/prisma";

// Route handlers for different parts of the application
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import projectOwnerRouter from "./routes/project-owner.route";
import projectRouter from "./routes/project.route";
import projectPhaseRouter from "./routes/project-phase.route";
import ticketRouter from "./routes/ticket.route";
import commentRouter from "./routes/comment.route";

// Middleware for authentication and role-based access control
import requireAuth from "./middleware/requireAuth";
import requireRole from "./middleware/requireRole";

// Third-party middleware utilities
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
app.use(
  "/projects",
  requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]),
  projectRouter,
);
app.use("/project-phases", requireRole(RoleType.ADMIN), projectPhaseRouter);
app.use("/tickets", ticketRouter);
app.use("/comments", commentRouter);

// endpoint without requireRole can be accessed by any authenticated user
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to SLM Project Management API" });
});

export default app;
