import {
  EMAIL_OTP_TEMPLATE,
  EMAIL_WELCOME_TEMPLATE,
} from "../../utils/constants/messages.js";
import transporter from "../../utils/helpers/mailer.js";

export const sendWelcomeEmail = async (user) => {
  const mailOptions = {
    from: `"MěiHaat" <${process.env.SENDER_EMAIL}>`,
    to: user.email,
    subject: "Welcome to MeiHaat",
    html: EMAIL_WELCOME_TEMPLATE.replace("{{email}}", user.email).replace(
      "{{roles}}",
      user.roles.join(", ")
    ),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export const sendOtpEmail = async (email, otp) => {
  const mailOptions = {
    from: `"MěiHaat" <${process.env.SENDER_EMAIL}>`,
    to: email,
    subject: "Welcome to MeiHaat",
    html: EMAIL_OTP_TEMPLATE
    .replace("{{email}}", email)
    .replace("{{otp}}",otp),
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};
