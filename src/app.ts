// Core framework and type imports
import express, { Request, Response } from "express";
import { RoleType } from "./generated/prisma";

// Route handlers for different parts of the application
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import projectOwnerRouter from "./routes/project-owner.route";

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
app.use("/project-owners", projectOwnerRouter);

// endpoint without requireRole can be accessed by any authenticated user
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to SLM Project Management API" });
});

export default app;
