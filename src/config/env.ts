import dotenv from "dotenv";
dotenv.config();

const env: {
  jwtSecret: string;
  jwtExpiresIn: string | number;
  refreshTokenExpiresIn: string | number;
  refreshTokenCookieName: string;
  emailHost: string;
  emailPort: number;
  emailUser: string;
  emailPass: string;
  uploadDir: string;
  redisTLS?: object;
  redisHost: string;
  redisPort: number;
  redisPassword?: string;
  redisUsername?: string;
  redisDB?: number;
  nodeEnv: string;
  allowedOrigins: string[];
  rateLimitAllowlist: string[];
  rateLimitPublicWindowMs: number;
  rateLimitPublicMax: number;
  rateLimitLoginWindowMs: number;
  rateLimitLoginMax: number;
  rateLimitAuthWindowMs: number;
  rateLimitAuthMax: number;
  imapHost: string;
  imapPort: number;
  imapUser: string;
  imapPass: string;
  imapSecure: boolean;
  imapMailbox: string;
  imapPollIntervalMs: number;
  emailTicketProjectId?: number;
  emailTicketRequesterId?: number;
  emailTicketPriority: string;
  emailTicketType: string;
} = {
  jwtSecret: process.env.JWT_SECRET || "secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d",
  refreshTokenCookieName: process.env.REFRESH_TOKEN_COOKIE_NAME || "refresh_token",
  emailHost: process.env.EMAIL_HOST || "smtp.gmail.com",
  emailPort: parseInt(process.env.EMAIL_PORT || "587"),
  emailUser: process.env.EMAIL_USER || "user@gmail.com",
  emailPass: process.env.EMAIL_PASS || "abcdefghijklmnop",
  uploadDir: process.env.UPLOAD_DIR || "uploads/",
  redisHost: process.env.REDIS_HOST!,
  redisPort: parseInt(process.env.REDIS_PORT!),
  redisPassword: process.env.REDIS_PASSWORD || undefined,
  redisUsername: process.env.REDIS_USERNAME || undefined,
  redisDB: process.env.REDIS_DB ? parseInt(process.env.REDIS_DB) : undefined,
  redisTLS: process.env.REDIS_TLS === "true" ? {} : undefined,
  nodeEnv: process.env.NODE_ENV || "development",
  allowedOrigins: process.env.ALLOWED_ORIGINS?.trim().split(",") || ["http://localhost:5173"],
  rateLimitAllowlist:
    process.env.RATE_LIMIT_ALLOWLIST?.split(",")
      .map((ip) => ip.trim())
      .filter(Boolean) || [],
  rateLimitPublicWindowMs: parseInt(process.env.RATE_LIMIT_PUBLIC_WINDOW_MS || "60000"),
  rateLimitPublicMax: parseInt(process.env.RATE_LIMIT_PUBLIC_MAX || "120"),
  rateLimitLoginWindowMs: parseInt(process.env.RATE_LIMIT_LOGIN_WINDOW_MS || "900000"),
  rateLimitLoginMax: parseInt(process.env.RATE_LIMIT_LOGIN_MAX || "10"),
  rateLimitAuthWindowMs: parseInt(process.env.RATE_LIMIT_AUTH_WINDOW_MS || "60000"),
  rateLimitAuthMax: parseInt(process.env.RATE_LIMIT_AUTH_MAX || "300"),
  imapHost: process.env.IMAP_HOST || "",
  imapPort: parseInt(process.env.IMAP_PORT || "993"),
  imapUser: process.env.IMAP_USER || "",
  imapPass: process.env.IMAP_PASS || "",
  imapSecure: process.env.IMAP_SECURE !== "false",
  imapMailbox: process.env.IMAP_MAILBOX || "INBOX",
  imapPollIntervalMs: parseInt(process.env.IMAP_POLL_INTERVAL_MS || "60000"),
  emailTicketProjectId: process.env.EMAIL_TICKET_PROJECT_ID
    ? parseInt(process.env.EMAIL_TICKET_PROJECT_ID)
    : undefined,
  emailTicketRequesterId: process.env.EMAIL_TICKET_REQUESTER_ID
    ? parseInt(process.env.EMAIL_TICKET_REQUESTER_ID)
    : undefined,
  emailTicketPriority: process.env.EMAIL_TICKET_PRIORITY || "MEDIUM",
  emailTicketType: process.env.EMAIL_TICKET_TYPE || "ISSUE",
};

export default env;
