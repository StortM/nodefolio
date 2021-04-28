// create an express server
const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import projects.js
const projectsRouter = require('./routes/projects');
const contactRouter = require("./routes/contact.js");
const skillsRouter = require("./routes/skills.js");


app.use(projectsRouter.router);
app.use(contactRouter.router);
app.use(skillsRouter.router);

const fs = require('fs');

// components
const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

// pages
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8")
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", "utf-8")
const skills = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8")
const recommendations = fs.readFileSync(__dirname + "/public/recommendations/recommendations.html", "utf-8")
const education = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8")
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8")


app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projects +  footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skills + footer);
});

app.get("/recommendations", (req, res) => {
    res.send(header + recommendations + footer);
});

app.get("/education", (req, res) => {
    res.send(header + education + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contact + footer);
});

app.get('/recommendation', (req, res) => {
    const tempFile = "./public/recommendations/Recommendation.pdf";
    fs.readFile(tempFile, function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });
});


const port = process.env.PORT || 8080;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", Number(port));
});

