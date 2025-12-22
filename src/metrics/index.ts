import { Request, Response, NextFunction } from "express";
import {
  collectDefaultMetrics,
  Counter,
  Histogram,
  Registry,
} from "prom-client";

const registry = new Registry();

collectDefaultMetrics({ register: registry });

type HttpLabelSet = {
  method: string;
  route: string;
  status_code: string;
};

const httpRequestsTotal = new Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests received",
  labelNames: ["method", "route", "status_code"],
  registers: [registry],
});

const httpRequestDurationSeconds = new Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2, 5],
  registers: [registry],
});

function resolveRouteLabel(req: Request) {
  if (req.route?.path) {
    return req.baseUrl ? `${req.baseUrl}${req.route.path}` : req.route.path;
  }

  if (req.path) {
    return req.path;
  }

  return req.originalUrl || "unknown";
}

function httpMetricsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const endTimer = httpRequestDurationSeconds.startTimer();

  res.on("finish", () => {
    const labels: HttpLabelSet = {
      method: req.method,
      route: resolveRouteLabel(req),
      status_code: String(res.statusCode),
    };

    httpRequestsTotal.inc(labels);
    endTimer(labels);
  });

  next();
}

async function handleMetricsRequest(_req: Request, res: Response) {
  res.setHeader("Content-Type", registry.contentType);
  res.send(await registry.metrics());
}

export { httpMetricsMiddleware, handleMetricsRequest };
