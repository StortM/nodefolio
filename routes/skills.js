const router = require("express").Router();

// Create a schema for a project
// there are no rules to how the schema should look
// but decide what data should be in a project and what datatype it should have

// TABLE - project
    // INT: id
    // VARCHAR: title
    // VARCHAR: description
    // BLOB: image 
    // VARCHAR: link

const skills = [{
    name: "Java",
    logo: {
        type: "fab",
        logo: "fa-java",
        size: "fa-lg"
    },
    experience: "2 years",
    text: "The primary programming language used during the KEA Computer Science programme. Used in various projects together with the Spring and Thymeleaf framework to create full stack web based applications."}, 
{
    name: "JavaScript",
    logo: {
        type: "fab",
        logo: "fa-js",
        size: "fa-lg"
    },    
    experience: "1 year",
    text: "Used in various projects together with Java or NodeJS."},
{
    name: "Python",
    logo: {
        type: "fab",
        logo: "fa-python",
        size: "fa-lg"
    },    
    experience: "1 year",
    text: "Used both as a tool to solve computable engineering problems and display data graphically at DTU, at work as a scripting language to automate everyday tasks as well as at KEA during my elective to create various applications such as web scrapers. "  
}
];

router.get("/api/skills", (req, res) => {
    res.send({ skills });
});

module.exports = {
    router
};