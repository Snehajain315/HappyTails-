import nodemailer from "nodemailer";
import "dotenv/config";

export const sendEmail = async (to, htmlContent, subject) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  try {
    await transporter.verify();
    console.log("✅ SMTP ready");
  } catch (err) {
    console.error("❌ SMTP connection failed:", err);
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);
};
