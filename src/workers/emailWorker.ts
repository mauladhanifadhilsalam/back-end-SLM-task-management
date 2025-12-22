import { Worker } from "bullmq";
import { NotifyStatusType } from "@prisma/client";
import { connection } from "../config/redis";
import { findNotification, editNotification } from "../services/notification.service";
import { transporter } from "../utils/transporter";
import env from "../config/env";

const emailWorker = new Worker(
  "email",
  async (job) => {
    const notificationId = job.data.notificationId;
    const notification = await findNotification({ id: notificationId });
    if (!notification) {
      throw new Error(`Notification ${notificationId} not found`);
    }

    const recipientEmail = notification.recipient.email;
    if (!recipientEmail) {
      await editNotification(notification.id, {
        status: NotifyStatusType.FAILED,
        emailError: "Recipient email missing",
      });
      throw new Error("Recipient email missing");
    }

    const subject = notification.subject ?? "Notification";
    const text = notification.emailText ?? notification.message;
    const from = notification.emailFrom ?? `SLM Project Management <${env.emailUser}>`;
    const replyTo = notification.emailReplyTo ?? undefined;

    try {
      await transporter.sendMail({
        from,
        to: recipientEmail,
        subject,
        text,
        ...(replyTo ? { replyTo } : {}),
      });

      await editNotification(notification.id, {
        status: NotifyStatusType.SENT,
        sentAt: new Date(),
        emailError: null,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown email error";

      await editNotification(notification.id, {
        status: NotifyStatusType.FAILED,
        emailError: errorMessage,
      });

      throw error instanceof Error ? error : new Error(errorMessage);
    }
  },
  { connection },
);

emailWorker.on("completed", (job) => {
  console.log(`Send email job ${job.id} completed`);
});

emailWorker.on("failed", (job, error) => {
  console.error(`Send email job ${job?.id} failed: ${error.message}`);
});

export default emailWorker;
