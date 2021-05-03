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

const projects = [{
    title: "Nodefolio",
    description: "Personal portfolio implemented in Node.js. Pages are served using express and are rendered from JavaScript objects to create a scalable website.",
    days: 7,
    technology: "JavaScript, NodeJS, HTML, CSS.",
    gitLink: "https://github.com/StortM/node-elective", 
    image: "https://cdn.discordapp.com/attachments/184351874797928449/836562470658506762/unknown.png"
},
    {
    title: "Bubble sort algorithm visualization",
    description: "A visualization of the bubble sort algorithm using JavaFX.",
    days: 3,
    technology: "Java, JavaFX, CSS.",
    gitLink: "https://github.com/StortM/SortingAlg", 
    image: "https://cdn.discordapp.com/attachments/184351874797928449/836546539286822922/bubblesort.png"
},
    {
    title: "Motorhome rental website",
    description: "A website utiziling the Java framework, MySQL, Spring Boot, Thymeleaf and Spring security to make a complete site for managing a motorhome rental service.",
    days: 30,
    technology: "Java, HTML, CSS, MySQL, Spring Boot, Thymeleaf, Spring Security.",
    gitLink: "https://github.com/StortM/2-semester-eksamensprojekt", 
    image: "https://cdn.discordapp.com/attachments/184351874797928449/836550661256511488/ferie-og-fritid---camping---autocamper-v-so.jpg"
},
    {
    title: "*In progress* Kvalifik  ",
    description: "A collaboration between the elective Angular course at KEA and Kvalifik. A social platform for students at CBS to help students engage in social acitivites.",
    days: "Currently developing",
    technology: "TypeScript, HTML, CSS, Firebase, Angular.",
    gitLink: "https://github.com/StortM/angular-kvalifik-semester-project", 
    image: "https://cdn.discordapp.com/attachments/184351874797928449/836561446023725096/unknown.png"
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

module.exports = {
    router
};