const receiver_email = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #222;
    }
    p {
      line-height: 1.6;
      color: #555;
    }
    .footer {
      margin-top: 20px;
      font-size: 0.9em;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Thank You for Reaching Out!</h2>
    <p>Hello,</p>
    <p>Thank you for checking out my portfolio and taking the time to reach out. I appreciate your interest and will get back to you as soon as possible.</p>
    <p>Best regards,</p>
    <p><strong>Banzile Nhlebela</strong></p>
    <div class="footer">
      This email was sent by tmk74.
    </div>
  </div>
</body>
</html>
`;

const email_to_me = ({ sender_name, sender_email, message }) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
      background-color: #fff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    h2 {
      color: #333;
    }
    p {
      line-height: 1.6;
      color: #555;
    }
    .footer {
      margin-top: 20px;
      font-size: 0.9em;
      color: #888;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>You've Received a New Message!</h2>
    <p><strong>From:</strong> ${sender_name} (<a href="mailto:${sender_email}">${sender_email}</a>)</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <div class="footer">
      This is an automated notification from your portfolio.
    </div>
  </div>
</body>
</html>
`;
};

module.exports = {
    receiver_email,
    email_to_me,
}