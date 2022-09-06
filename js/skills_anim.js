let allSkills = document.querySelector(".skills .skills-bar");
let children_skills = Array.from(allSkills.children);
children_skills.forEach((elem) => {
    elem.classList.add("inactive");
});

window.addEventListener("scroll", (e) => {
    let skillY = allSkills.getBoundingClientRect().top;
    let skillHeight = allSkills.getBoundingClientRect().height;
    if (skillY <= 500.2833251953125 && skillY > 0) {
        console.log(e, allSkills.getBoundingClientRect());
        children_skills.forEach((elem) => {
            elem.classList.remove("inactive");
        });
    }
});
