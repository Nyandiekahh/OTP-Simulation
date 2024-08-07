const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

let otpStore = {}; // Temporary store for OTPs

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password' // Replace with your email password
  }
});

app.post('/send-otp', (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP with expiration time (e.g., 5 minutes)
  otpStore[email] = { otp, expires: Date.now() + 300000 };

  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your email
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('OTP sent successfully');
  });
});

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  const storedOtp = otpStore[email];

  if (storedOtp && storedOtp.otp === otp && storedOtp.expires > Date.now()) {
    delete otpStore[email]; // Clear OTP after verification
    res.status(200).send('OTP verified successfully');
  } else {
    res.status(400).send('Invalid or expired OTP');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
