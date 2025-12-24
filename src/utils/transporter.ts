import nodemailer from "nodemailer";
import env from "../config/env";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export type MailOptions = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: env.emailHost,
  port: env.emailPort,
  auth: {
    user: env.emailUser,
    pass: env.emailPass,
  },
} as SMTPTransport.Options);

transporter.verify((error) => {
  if (error) {
    console.error("Error with email transporter:", error);
  }
});
