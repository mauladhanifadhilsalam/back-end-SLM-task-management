import express, { Request, Response } from "express";
import authRouter from "./routes/auth.route";
import { requireAuth } from "./middleware/requireAuth";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public routes
app.use("/auth", authRouter);
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Protected routes
app.use(requireAuth);
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Welcome to SLM Project Management API" });
});

export default app;
