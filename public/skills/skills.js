//fetch("/api/projects").then(res => res.json()).then(console.log());

(async function getSkills() {

    try {
        const response = await fetch("/api/skills");
        const result = await response.json();

        const skillsDiv = document.getElementById("skills");

        
        const skillsArray = result.skills;

        skillsArray.forEach(skill => {

            // creating outer div with border
            const borderDiv = document.createElement("div");
            borderDiv.classList.add("col-md-8", "mx-auto", "border", "border-secondary", "rounded-pill", "mt-4")
            
            // creating inner div with elements inside
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("col-md-10", "text-center", "mt-4", "mx-auto")
            // header
            const skillHeader = document.createElement("h4");
            skillHeader.classList.add("fw-light");
            skillHeader.innerText = skill.name;

            // logo with wrapper to show inline with header
            const logo = document.createElement("i");
            logo.classList.add(skill.logo.type, skill.logo.logo, skill.logo.size);

            const logoWrapper = document.createElement("span");
            logoWrapper.innerHTML = " " + logo.outerHTML;

            // append logo to header
            skillHeader.appendChild(logoWrapper);
            
            // add experience subtitle
            const experience = document.createElement("p");
            experience.classList.add("lead", "text-muted");
            experience.innerText = "Experience: " + skill.experience;

            // description text
            const descriptionP = document.createElement("p");
            descriptionP.classList.add("mt-3");
            descriptionP.innerText = skill.text;


            skillDiv.appendChild(skillHeader);
            skillDiv.appendChild(experience);
            skillDiv.appendChild(descriptionP);
            
            borderDiv.appendChild(skillDiv);
            skillsDiv.appendChild(borderDiv);        
        });

    }
    catch(error){
        console.log(error);
    }
})();