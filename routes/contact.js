const router = require("express").Router(); 
const nodemailer = require("nodemailer");
require("dotenv").config();
const smtpTransport = require('nodemailer-smtp-transport');

let transporter;

(async function initTransporter() {
    try{
        transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            auth: {
              user: process.env.USER_EMAIL, 
              pass: process.env.USER_PASSWORD,
            }
          }));
    }
    catch(error){
        console.log(error);
    }
})();

router.post("/api/contact", (req, res) => {
    async function sendMail(transporter) {
    let info = transporter.sendMail({
        from:  `${req.body.email}`, // sender address
        to: process.env.EMAIL_TO, // list of receivers
        subject: "An email has been sent from Nodefolio from " + `${req.body.name}` + " Using email: " + `${req.body.email}`, // Subject line
        text: `${req.body.text}`, // plain text body
    });
    console.log("Message sent from " + `${req.body.name}` + " and email: " + `${req.body.email}`);
};

    sendMail(transporter).catch(console.error);

    res.redirect("/contact")
});

module.exports = {
    router
};