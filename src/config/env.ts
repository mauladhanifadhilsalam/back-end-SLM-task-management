import dotenv from "dotenv";
dotenv.config();

const env: {
  jwtSecret: string;
  jwtExpiresIn: string | number;
  refreshTokenExpiresIn: number;
  refreshTokenCookieName: string;
  emailHost: string;
  emailPort: number;
  emailUser: string;
  emailPass: string;
  uploadDir: string;
  redisHost: string;
  redisPort: number;
  nodeEnv: string;
  allowedOrigins: string[];
} = {
  jwtSecret: process.env.JWT_SECRET || "secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || 10,
  refreshTokenExpiresIn: parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN || String(60 * 60 * 24 * 7)),
  refreshTokenCookieName: process.env.REFRESH_TOKEN_COOKIE_NAME || "refresh_token",
  emailHost: process.env.EMAIL_HOST || "smtp.gmail.com",
  emailPort: parseInt(process.env.EMAIL_PORT || "587"),
  emailUser: process.env.EMAIL_USER || "user@gmail.com",
  emailPass: process.env.EMAIL_PASS || "abcdefghijklmnop",
  uploadDir: process.env.UPLOAD_DIR || "uploads/",
  redisHost: process.env.REDIS_HOST!,
  redisPort: parseInt(process.env.REDIS_PORT!),
  nodeEnv: process.env.NODE_ENV || "development",
  allowedOrigins: process.env.ALLOWED_ORIGINS?.trim().split(",") || ["http://localhost:5173"],
};

export default env;
