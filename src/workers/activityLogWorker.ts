import { Worker } from "bullmq";
import { logActivity } from "../services/activity-log.service";
import { connection } from "../config/redis";

const activityLogWorker = new Worker("activityLog", async (job) => {
  await logActivity(job.data);
}, { connection });

activityLogWorker.on("completed", async (job) => {
  console.log(`Record activity log job ${job.id} completed`);
});

activityLogWorker.on("failed", async (job, err) => {
  console.error(`Record activity log job ${job?.id} failed with error: ${err.message}`);
});

export default activityLogWorker;
