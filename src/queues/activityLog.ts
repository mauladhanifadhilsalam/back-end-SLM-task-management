import { Queue } from "bullmq";
import { connection } from "../config/redis";
import { LogActivityInput } from "../services/activity-log.service";

const activityLogQueue = new Queue("activityLog", {
  connection,
  defaultJobOptions: {
    attempts: 3,
    removeOnComplete: true,
    backoff: {
      type: "exponential",
      delay: 5000,
    },
  },
});

async function enqueueActivityLog(data: LogActivityInput) {
  const { action, details, occurredAt, targetId, targetType, userId } = data;
  await activityLogQueue.add("recordActivityLog", { action, details, occurredAt, targetId, targetType, userId });
}

export { enqueueActivityLog };
