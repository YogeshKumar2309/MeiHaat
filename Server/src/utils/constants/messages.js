export const EMAIL_WELCOME_TEMPLATE = `
<!-- EMAIL_WELCOME_TEMPLATE.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MěiHaat</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
    }
    .header h1 {
      color: #333333;
    }
    .content {
      font-size: 16px;
      color: #555555;
      line-height: 1.5;
    }
    .content a {
      color: #1a73e8;
      text-decoration: none;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #aaaaaa;
      margin-top: 20px;
    }
    .role {
      font-weight: bold;
      color: #1a73e8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to MeiHaat!</h1>
    </div>
    <div class="content">
      <p>Hi <strong>{{email}}</strong>,</p>
      <p>Thank you for registering with MeiHaat. Your role in our platform is: <span class="role">{{roles}}</span>.</p>
      <p>To get started, you can visit our <a href="http://localhost:3000">website</a> and explore our services.</p>
      <p>If you have any questions, feel free to contact us anytime.</p>
      <p>Best regards,<br>Team MeiHaat</p>
    </div>
    <div class="footer">
      &copy; 2025 MeiHaat. All rights reserved.
    </div>
  </div>
</body>
</html>

`


export const EMAIL_OTP_TEMPLATE = `
<!-- EMAIL_OTP_TEMPLATE.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to MeiHaat</title>
  <style>
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333333;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      padding: 30px 40px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .header {
      text-align: center;
      padding-bottom: 25px;
    }
    .header h1 {
      color: #2c3e50;
      font-size: 28px;
      margin: 0;
    }
    .content {
      font-size: 16px;
      color: #555555;
      line-height: 1.7;
    }
    .content a {
      color: #1a73e8;
      text-decoration: none;
    }
    .content a:hover {
      text-decoration: underline;
    }
    .otp {
      font-weight: bold;
      color: #1a73e8;
      font-size: 18px;
    }
    .footer {
      text-align: center;
      font-size: 13px;
      color: #aaaaaa;
      margin-top: 30px;
    }
    .note {
      margin-top: 20px;
      font-size: 14px;
      color: #777777;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to MěiHaat!</h1> 
    </div>
    <div class="content">
      <p>Hi <strong>{{email}}</strong>,</p>
      <p>Your email verification OTP is: <span class="otp">{{otp}}</span></p>
      <p>Please do not share this OTP with anyone.</p>
      <strong>OTP is valid for 5 minutes</strong>
      <p>To get started, visit our <a href="http://localhost:3000">website</a> and explore our services.</p>
      <p>If you have any questions, feel free to contact us at any time.</p>
      <p>Best regards,<br>Team MeiHaat</p>
      <div class="note">
        <p>About MeiHaat: “Měi” means “Happy” in Mandarin, and “Haat” means “Market” in Bengali. We pronounce it as <strong>मेईहाट</strong>.</p>
      </div>
    </div>
    <div class="footer">
      &copy; 2025 MeiHaat. All rights reserved.
    </div>
  </div>
</body>
</html>


`