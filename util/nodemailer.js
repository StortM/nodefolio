"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

// async..await is not allowed in global scope, must use a wrapper
async function main(user) {

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
    /*

  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  */

  let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_EMAIL, 
      pass: process.env.USER_PASSWORD,
    }
  }));
  // send mail with defined transport object

  // ***TODO***
  // Atm. this transporter is called every time the program compiles which casts a typeError. 
  // This does not affect the clients experience but just looks bad
  let mailOptions  = await transporter.sendMail({
    from: process.env.USER_EMAIL, // sender address
    to: process.env.EMAIL_TO, // list of receivers
    subject: "An email has been sent from Nodefolio from " + user.name + " Using email: " + user.email, // Subject line
    text: user.text, // plain text body
  });

  console.log("Message sent from " + user.name + "and email: " + user.email);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

module.exports.func = main;