import { Queue } from "bullmq";
import { connection } from "../config/redis";

const emailQueue = new Queue("email", {
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

async function enqueueEmailNotification(notificationId: number) {
  await emailQueue.add("sendEmail", { notificationId });
}

export { emailQueue, enqueueEmailNotification };
