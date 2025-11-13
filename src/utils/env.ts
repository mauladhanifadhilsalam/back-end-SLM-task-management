import dotenv from "dotenv";
dotenv.config();

const env: {
  jwtSecret: string;
  jwtExpiresIn: string | number;
  emailHost: string;
  emailPort: number;
  emailUser: string;
  emailPass: string;
} = {
  jwtSecret: process.env.JWT_SECRET || "secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || 3600,
  emailHost: process.env.EMAIL_HOST || "smtp.gmail.com",
  emailPort: parseInt(process.env.EMAIL_PORT || "587"),
  emailUser: process.env.EMAIL_USER || "user@gmail.com",
  emailPass: process.env.EMAIL_PASS || "abcdefghijklmnop",
};

export default env;
