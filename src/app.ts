import express, { Request, Response } from "express";
import cors from "cors";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import { requireAuth } from "./middleware/requireAuth";
import requireRole from "./middleware/requireRole";
import { RoleType } from "./generated/prisma";

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

app.use("/users", requireRole(RoleType.ADMIN), userRouter);

// Endpoint without requireRole can be accessed by any authenticated user
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to SLM Project Management API" });
});

// Admin role authorization example
app.get(
  "/admin-dashboard",
  requireRole(RoleType.ADMIN),
  (_req: Request, res: Response) => {
    res.json({ message: "Welcome to Admin Dashboard" });
  },
);

// Project Manager role authorization example
app.get(
  "/pm-dashboard",
  requireRole(RoleType.PROJECT_MANAGER),
  (_req: Request, res: Response) => {
    res.json({ message: "Welcome to PM Dashboard" });
  },
);

// Developer role authorization example
app.get(
  "/developer-dashboard",
  requireRole(RoleType.DEVELOPER),
  (_req: Request, res: Response) => {
    res.json({ message: "Welcome to Developer Dashboard" });
  },
);

// multiple role authorization example
app.get(
  "/projects",
  requireRole([RoleType.ADMIN, RoleType.PROJECT_MANAGER]),
  (_req: Request, res: Response) => {
    res.json({ projects: ["Project 1", "Project 2", "Project 3"] });
  },
);

export default app;
