const express = require('express');

const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

//error handler
app.use(async (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.post('/send-email', (req, res) => {
  const { sender_name, sender_email, subject, message, type } = req.body;
  const my_email = process.env.EMAIL_ADDRESS;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: my_email,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions;
  if(type === "notis") { // email from me to me telling me someone used my portfolio (basically just a notification to me that someone sent a message)
    const new_message = `${sender_name} (${sender_email}) sent you a message: \n${message} using your portfolio.`;
    mailOptions = {
        from: my_email,
        to: my_email,
        subject: subject,
        text: new_message
    };
  }
  else { // email from me to user thanking them for reaching out and using the portfolio
    const new_message = "Hi there! Thanks for reaching out and checking out my portfolio. I'll get back to you as soon as possible. \n\nBest,\nBanzile Nhlebela";
    mailOptions = {
      from: my_email,
      to: sender_email,
      subject: subject,
      text: new_message
    };
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});