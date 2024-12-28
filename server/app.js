const express = require('express');

const nodemailer = require('nodemailer');
const path = require('path');
const axios = require('axios');

const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

const connectDB = require('./config/connectDB');
const { User } = require('./models');
const { email_to_me, receiver_email } = require('./constants');

const app = express();
const port = process.env.PORT || 3001;

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

  // check database for the email. if it exists, just send the email and 
  // avoid using the api to check if it is valid
  const flag = !!(await User.findOne({ email: sender_email }).exec());

  if(!flag) {
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

      await User.create({
        name: sender_name,
        email: sender_email
      });

      res.status(201).send('Email is exists and can receive emails');
    }
    catch (error) {
      console.error('Error validating email:', error);
      return res.status(500).send('Error validating email address.');
    }
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

// a little black magic
app.get('/api/ping', (req, res) => {
  res.status(200).send({ message: 'pong' });
});

const pingServer = () => {
  axios.get(process.env.BACKEND_URL)
      .then((response) => {
        console.log(`ping-${response.data.message}`); // should print ping-pong
      })
      .catch((error) => {
        console.error("Error pinging server:", error);
      });
}

setInterval(pingServer, 1000 * 60 * 14); // ping server every 14 minutes since render server goes to sleep after 15 minutes

//error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Internal server error');
});

connectDB(true); //true if we want to connect to the online database

mongoose.connection.on("connected", async () => {
    console.log("SUCCESSFULLY CONNECTED TO DATABASE");
    app.listen(port, () => {
        console.log(`server listening on port: ${port}...`)
    });
});
mongoose.connection.on("disconnected", () => {
    console.log("Lost connection to database")
});