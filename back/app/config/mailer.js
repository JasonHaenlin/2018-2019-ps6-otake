const nodemailer = require('nodemailer');

module.exports = nodemailer.createTransport({
  // host: process.env.PULSE_HOST,
  // port: 465,
  // secure: true,
  // no need to set host or port etc.
  service: 'SendPulse',
  auth: {
    user: process.env.PULSE_USER,
    pass: process.env.PULSE_PSWD
  }
});
