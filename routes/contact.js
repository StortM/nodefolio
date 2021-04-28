const router = require("express").Router();
const nodemailerModule = require("../util/nodemailer");

router.post("/api/contact", (req, res) => {
    // todo send email
    console.log(req.body.user.name);
    console.log(req.body.user.email);
    console.log(req.body.user.text);

    const user = {
        name: req.body.user.name,
        email: req.body.user.email,
        text: req.body.user.text
    }

    nodemailerModule.func({ name: user.name, email: user.email, text: user.text});

    res.redirect("/")
});

module.exports = {
    router
};