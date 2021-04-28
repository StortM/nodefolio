(async function getProjects() {

    try {
        const response = await fetch("/api/projects");
        const result = await response.json();

        const projectsDiv = document.getElementById("projects");

        
        const projectsArray = result.projects;

        let textLeft = true;

        projectsArray.forEach(project => {

            // creating outer div with border
            const borderDiv = document.createElement("div");
            borderDiv.classList.add("col-md-8", "mx-auto", "border", "border-secondary", "mt-5");
            
            // create row div for text
            const contentDiv = document.createElement("div");
            contentDiv.classList.add("row");

            // creating inner div with elements inside
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("text-center", "mt-4", "col-md-6");

            // header
            const projectHeader = document.createElement("h4");
            projectHeader.classList.add("fw-light");
            projectHeader.innerText = project.title;
            
            // add date subtitle
            const startDate = document.createElement("p");
            startDate.classList.add("lead", "text-muted");
            startDate.innerText = "Days worked on: " + project.days;

            // technologies
            const technologies = document.createElement("p");
            technologies.classList.add("fst-italic");
            technologies.innerText = "Technologies used: " + project.technology;

            // description text
            const descriptionP = document.createElement("p");
            descriptionP.classList.add("mt-3");
            descriptionP.innerText = project.description;

            const gitLink = document.createElement("a");
            gitLink.classList.add("btn", "btn-outline-dark");
            gitLink.innerText = "View project";
            gitLink.href = project.gitLink;

            // create div for image
            const imageDiv = document.createElement("div");
            imageDiv.classList.add("col-md-6")

            // create image link
            const image = document.createElement("img")
            image.classList.add("img-fluid", "w-100");
            image.src = project.image;

            projectDiv.appendChild(projectHeader);
            projectDiv.appendChild(startDate);
            projectDiv.appendChild(technologies);
            projectDiv.appendChild(descriptionP);
            projectDiv.appendChild(gitLink);

            imageDiv.appendChild(image);

            // alternate between pic / text on left / right
            if (textLeft){
                contentDiv.appendChild(projectDiv);
                contentDiv.appendChild(imageDiv);
                textLeft = false;
                console.log("text was placed left");
                console.log(textLeft);
            }
            else{
                contentDiv.appendChild(imageDiv);
                contentDiv.appendChild(projectDiv);
                textLeft = true;
                console.log("text was placed right");
                console.log(textLeft);
            }


            borderDiv.appendChild(contentDiv);
            
            projectsDiv.appendChild(borderDiv);        
        });
        
    }
    catch(error){
        console.log(error);
    }
})();