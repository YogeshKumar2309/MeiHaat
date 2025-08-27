import { EMAIL_WELCOME_TEMPLATE } from "../../utils/constants/messages.js";
import transporter from "../../utils/helpers/mailer.js";


export const sendWelcomeEmail = async (user) => {
  const mailOptions = {
    from: `"MeiHaat" <${process.env.SENDER_EMAIL}>`,
    to: user.email,
    subject: "Welcome to MeiHaat",
    html: EMAIL_WELCOME_TEMPLATE
      .replace("{{email}}", user.email)
      .replace("{{roles}}", user.roles.join(", ")),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Welcome email sent to:", user.email);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
