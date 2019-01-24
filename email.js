var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nirushapath@gmail.com',
    pass: 'Niru...98'
  }
});

var mailOptions = {
  from: 'nirushapath@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  text: 'This is easy !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
