const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'ddd.dsx@bk.ru',
    //   pass: 'ThD2a6hkh2pY76L0DbkD',
      pass: 'zuGFAB4VzFkFJ5aJIA4f',
    },
  },
  {
    from: '"Node js" <ddd.dsx@bk.ru>',
  },
);

const mailer = (massage) => {
  transporter.sendMail(massage, (err, info) => {
    if (err) return console.log(err);
    console.log(`Email sent: ${info}`);
  });
};

module.exports = mailer;