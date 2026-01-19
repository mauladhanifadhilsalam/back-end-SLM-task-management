import { ImapFlow } from "imapflow";
import { simpleParser } from "mailparser";
import env from "../config/env";
import { createTicketFromEmail } from "../services/email-ticket.service";

const minPollIntervalMs = 10000;
const pollIntervalMs = Math.max(env.imapPollIntervalMs, minPollIntervalMs);

function isImapConfigured() {
  return Boolean(env.imapHost && env.imapUser && env.imapPass);
}

function normalizeBody(text?: string | null) {
  if (text && text.trim()) {
    return text.trim();
  }
  return null;
}

function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveBody(text?: string | null, html?: string | null) {
  return normalizeBody(text) ?? (html ? normalizeBody(stripHtml(html)) : null);
}

async function pollInbox() {
  const client = new ImapFlow({
    host: env.imapHost,
    port: env.imapPort,
    secure: env.imapSecure,
    auth: {
      user: env.imapUser,
      pass: env.imapPass,
    },
  });

  try {
    await client.connect();
    const lock = await client.getMailboxLock(env.imapMailbox);

    try {
      const unseen = (await client.search({ seen: false }, { uid: true })) || [];
      for (const uid of unseen) {
        try {
          const message = await client.fetchOne(uid, { source: true }, { uid: true });
          if (!message) {
            continue;
          }
          if (!message.source) {
            continue;
          }

          const parsed = await simpleParser(message.source);
          const fromEmail = parsed.from?.value?.[0]?.address ?? null;
          if (fromEmail && fromEmail.toLowerCase() === env.imapUser.toLowerCase()) {
            await client.messageFlagsAdd(uid, ["\\Seen"], { uid: true });
            continue;
          }

          const body = resolveBody(
            parsed.text,
            typeof parsed.html === "string" ? parsed.html : null,
          );
          const ticket = await createTicketFromEmail({
            subject: parsed.subject ?? null,
            body,
            fromEmail,
            messageId: parsed.messageId ?? null,
          });

          if (ticket) {
            await client.messageFlagsAdd(uid, ["\\Seen"], { uid: true });
          }
        } catch (error) {
          const message = error instanceof Error ? error.message : "Unknown IMAP error";
          console.error(`IMAP ticket worker error: ${message}`);
        }
      }
    } finally {
      lock.release();
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown IMAP error";
    console.error(`IMAP ticket worker failure: ${message}`);
  } finally {
    await client.logout().catch(() => undefined);
  }
}

let polling = false;

async function pollWithLock() {
  if (polling) return;
  polling = true;
  try {
    await pollInbox();
  } finally {
    polling = false;
  }
}

if (isImapConfigured()) {
  console.log(`IMAP ticket worker polling every ${pollIntervalMs}ms`);
  pollWithLock().catch((error) => {
    console.error("IMAP ticket worker failed to start:", error);
  });
  setInterval(() => {
    pollWithLock().catch((error) => {
      console.error("IMAP ticket worker poll failed:", error);
    });
  }, pollIntervalMs);
} else {
  console.warn("IMAP ticket worker disabled: missing IMAP configuration.");
}

export {};
