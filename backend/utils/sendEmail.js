import SibApiV3Sdk from "@sendinblue/client";
import "dotenv/config";

export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const client = new SibApiV3Sdk.TransactionalEmailsApi();
    client.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const response = await client.sendTransacEmail({
      sender: { email: process.env.EMAIL_USER, name: "HappyTails" },
      to: [{ email: to }],
      subject,
      htmlContent,
    });
    console.log("✅ Email sent successfully to:", to, response);
  } catch (err) {
    console.error("❌ Email sending failed:", err.response?.body || err);
    throw new Error("Email sending failed");
  }
};
