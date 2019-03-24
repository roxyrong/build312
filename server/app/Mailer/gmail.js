const nodemailer = require('nodemailer');

const client = process.env.GMAIL_USER;
const clientID = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;
const accessToken = process.env.GMAIL_ACCESS_TOKEN;
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      type: 'OAuth2',
      user: client,
      clientId: clientID,
      clientSecret: clientSecret,
      accessToken: accessToken,
      refreshToken: refreshToken
    }
  });

const send = ({ email, name, subject, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const content = text + '\nfrom: ' + name + '(' + email + ')'; 
  const message = {
    from: from,
    to: client,
    subject: subject,
    text: content,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
        console.log(message);
        console.log(error);
        console.log(info);
        error ? reject(error) : resolve(info)
    }
    )
  })
}

module.exports = send