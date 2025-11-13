import nodemailer from "nodemailer";

export type MailOptions = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error with email transporter:', error);
  }
});
