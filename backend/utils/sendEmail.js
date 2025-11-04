// utils/sendEmail.js
import SibApiV3Sdk from "@sendinblue/client";
import "dotenv/config";

export const sendEmail = async (to, htmlContent, subject) => {
  try {
    const client = new SibApiV3Sdk.TransactionalEmailsApi();
    client.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    await client.sendTransacEmail({
      sender: { email: "no-reply@brevo.com" },
      to: [{ email: to }],
      subject,
      htmlContent,
    });

    console.log("✅ Email sent successfully to:", to);
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    throw new Error("Email sending failed");
  }
};
