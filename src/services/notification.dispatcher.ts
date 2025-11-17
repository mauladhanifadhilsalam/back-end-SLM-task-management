import {
  NotificationState,
  NotificationTargetType,
  NotifyStatusType,
} from "../generated/prisma";
import env from "../utils/env";
import { transporter } from "../utils/transporter";
import {
  createNotification,
  editNotification,
} from "./notification.service";

type DispatchNotificationInput = {
  recipientId: number;
  targetType: NotificationTargetType;
  targetId?: number;
  message: string;
  subject: string;
  text?: string;
  state?: NotificationState;
  from?: string;
  replyTo?: string;
};

function sendEmailAsync(
  notificationId: number,
  recipientEmail: string,
  subject: string,
  text: string,
  from?: string,
  replyTo?: string,
) {
  transporter
    .sendMail({
      from: from ?? `SLM Project Management <${env.emailUser}>`,
      to: recipientEmail,
      subject,
      text,
      ...(replyTo ? { replyTo } : {}),
    })
    .then(() =>
      editNotification(notificationId, {
        status: NotifyStatusType.SENT,
        sentAt: new Date(),
        emailError: null,
      }),
    )
    .catch((error) => {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown email error";
      return editNotification(notificationId, {
        status: NotifyStatusType.FAILED,
        emailError: errorMessage,
      });
    });
}

async function dispatchNotification({
  recipientId,
  targetType,
  targetId,
  message,
  subject,
  text,
  state,
  from,
  replyTo,
}: DispatchNotificationInput) {
  const notification = await createNotification({
    recipientId,
    targetType,
    targetId,
    message,
    state: state ?? NotificationState.UNREAD,
    status: NotifyStatusType.PENDING,
  });

  const recipientEmail = notification.recipient.email;
  if (!recipientEmail) {
    await editNotification(notification.id, {
      status: NotifyStatusType.FAILED,
      emailError: "Recipient email missing",
    });
    return notification;
  }

  sendEmailAsync(
    notification.id,
    recipientEmail,
    subject,
    text ?? message,
    from,
    replyTo,
  );

  return notification;
}

export { dispatchNotification };
