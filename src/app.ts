// Core framework and type imports
import express from "express";
// Route handlers for different parts of the application
import docsRouter from "./routes/docs.route";
import metricsRouter from "./routes/metrics.route";
import apiRouter from "./routes";

// Middleware for authentication and rate limiting
import { publicRateLimiter } from "./middleware/rateLimit";

// Third-party middleware utilities
import env from "./config/env";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { httpMetricsMiddleware } from "./metrics";

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
app.use(httpMetricsMiddleware);

// Public routes
app.use("/metrics", publicRateLimiter, metricsRouter);
if (env.nodeEnv !== "production") {
  app.use("/docs", express.static("docs"), docsRouter);
}

// API routes (under /api)
app.use("/api", apiRouter);

export default app;
