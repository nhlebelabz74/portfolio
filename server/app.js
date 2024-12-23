const express = require('express');

const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const { email_to_me, receiver_email } = require('./constants');

app.use(cors());
app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/model', express.static('./models', {
  maxAge: 31536000000, // 1 year cache
  setHeaders: function (res, path) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));

app.post('/api/send-email', async (req, res) => {
  const { sender_name, sender_email, subject, message, type } = req.body;
  const my_email = process.env.EMAIL_ADDRESS;

  try {
    const validationResponse = await axios.get('https://apilayer.net/api/check', {
      params: {
        access_key: process.env.MAILBOXLAYER_API_KEY,
        email: sender_email,
      },
    });

    const { format_valid, smtp_check } = validationResponse.data;

    if (!format_valid || !smtp_check)
      return res.status(400).send('Invalid email address provided.');
  } catch (error) {
    console.error('Error validating email:', error);
    return res.status(500).send('Error validating email address.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: my_email,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions;
  if(type === "notis") { // email from me to me telling me someone used my portfolio (basically just a notification to me that someone sent a message)
    mailOptions = {
        from: my_email,
        to: my_email,
        subject: subject,
        html: email_to_me({ sender_name: sender_name, sender_email: sender_email, message: message })
    };
  }
  else { // email from me to user thanking them for reaching out and using the portfolio
    mailOptions = {
      from: my_email,
      to: sender_email,
      subject: subject,
      html: receiver_email
    };
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.get('/api/model/:modelName/:fileName', (req, res, next) => {
  const { modelName, fileName } = req.params;
  
  // Secure the path by normalizing and ensuring it's within the allowed directory
  const modelPath = path.join(__dirname, 'models', modelName, fileName);
  const normalizedPath = path.normalize(modelPath);
  const modelsDirectory = path.normalize(path.join(__dirname, 'models'));

  if (!normalizedPath.startsWith(modelsDirectory)) {
    return res.status(403).send('Access denied.');
  }

  res.sendFile(normalizedPath, (err) => {
    if (err)
      next(err); // Pass errors to the error handler
  });
});

//error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Internal server error');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});