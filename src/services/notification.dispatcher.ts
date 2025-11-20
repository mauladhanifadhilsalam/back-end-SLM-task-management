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
  NotificationWithRelations,
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

type ResendNotificationOverrides = {
  subject?: string;
  text?: string;
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
    subject,
    emailText: text ?? message,
    emailFrom: from,
    emailReplyTo: replyTo,
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

async function resendNotificationEmail(
  notification: NotificationWithRelations,
  overrides: ResendNotificationOverrides = {},
) {
  if (notification.status !== NotifyStatusType.FAILED) {
    throw new Error("Only failed notifications can be resent");
  }

  const subject =
    overrides.subject ?? notification.subject ?? null;
  if (!subject) {
    throw new Error("Subject is required to resend the email");
  }

  const text =
    overrides.text ??
    notification.emailText ??
    notification.message;

  const from =
    overrides.from ?? notification.emailFrom ?? undefined;
  const replyTo =
    overrides.replyTo ?? notification.emailReplyTo ?? undefined;

  const recipientEmail = notification.recipient.email;
  if (!recipientEmail) {
    await editNotification(notification.id, {
      status: NotifyStatusType.FAILED,
      emailError: "Recipient email missing",
    });
    throw new Error("Recipient email missing");
  }

  const updated = await editNotification(notification.id, {
    status: NotifyStatusType.PENDING,
    sentAt: null,
    emailError: null,
    subject,
    emailText: text,
    ...(from !== undefined ? { emailFrom: from } : {}),
    ...(replyTo !== undefined ? { emailReplyTo: replyTo } : {}),
  });

  sendEmailAsync(notification.id, recipientEmail, subject, text, from, replyTo);

  return updated;
}

export { dispatchNotification, resendNotificationEmail };
