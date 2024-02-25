var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '22cse061@skcet.ac.in',
    pass: 'tdpb mmte wher aycf'
  }
});

var mailOptions = {
  from: '22cse061@skcet.ac.in',
  to: 'oscaralwin@gmail.com',
  subject: 'hi',
  text: `gicidecieg eh dh e`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});