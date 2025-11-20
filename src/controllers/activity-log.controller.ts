import { Request, Response } from "express";
import {
  activityLogQuerySchema,
  activityLogBulkDeleteSchema,
} from "../schemas/activity-log.schema";
import {
  findActivityLogs,
  findActivityLog,
  deleteActivityLog,
  deleteActivityLogs,
} from "../services/activity-log.service";

function parseIdParam(value: string) {
  const id = Number(value);
  if (!Number.isInteger(id) || id <= 0) {
    return null;
  }

  return id;
}

async function listActivityLogs(req: Request, res: Response) {
  const parsed = activityLogQuerySchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const page = parsed.data.page ?? 1;
  const pageSize = parsed.data.pageSize ?? 25;

  const logs = await findActivityLogs({
    ...parsed.data,
    page,
    pageSize,
  });

  res.status(200).json(logs);
}

async function getActivityLogById(req: Request, res: Response) {
  const id = parseIdParam(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid activity log id" });
  }

  const log = await findActivityLog(id);
  if (!log) {
    return res.status(404).json({ message: "Activity log not found" });
  }

  res.status(200).json(log);
}

async function removeActivityLog(req: Request, res: Response) {
  const id = parseIdParam(req.params.id);
  if (!id) {
    return res.status(400).json({ message: "Invalid activity log id" });
  }

  const existing = await findActivityLog(id);
  if (!existing) {
    return res.status(404).json({ message: "Activity log not found" });
  }

  await deleteActivityLog(id);
  res.status(200).json({ message: "Activity log deleted successfully" });
}

async function purgeActivityLogs(req: Request, res: Response) {
  const parsed = activityLogBulkDeleteSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json(parsed.error.format());
  }

  const result = await deleteActivityLogs(parsed.data);
  res.status(200).json({
    message: "Activity logs deleted successfully",
    deletedCount: result.count,
  });
}

export {
  listActivityLogs,
  getActivityLogById,
  removeActivityLog,
  purgeActivityLogs,
};
