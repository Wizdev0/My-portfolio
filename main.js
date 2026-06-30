/* THE BLINKING TEXT */
const text = "Frontend web Developer";
const heroIntroPara = document.getElementById("heroIntroPara");

let index = 0;

function type() {
    if (index < text.length) {
        heroIntroPara.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100)
    }
}

type();



/* THE ANIMATION FOR SCROLLING */
const about = document.querySelectorAll(".about-section");
const skills = document.querySelectorAll(".skills-section");
const projects = document.querySelectorAll(".project-section");
const contacts = document.querySelectorAll(".contact-section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

about.forEach(about => observer.observe(about));
skills.forEach(skills => observer.observe(skills));
projects.forEach(projects => observer.observe(projects));
contacts.forEach(contacts => observer.observe(contacts));


/* CIRCULAR PROGRESS BAR */
const animation = [
    {
        number: document.getElementById("htmlNumber"),
        circle: document.querySelector(".html-circle"),
        target: 85
    },
    {
        number: document.getElementById("cssNumber"),
        circle: document.querySelector(".css-circle"),
        target: 75
    },
    {
        number: document.getElementById("jsNumber"),
        circle: document.querySelector(".js-circle"),
        target: 60
    },
    {
        number: document.getElementById("gitNumber"),
        circle: document.querySelector(".git-circle"),
        target: 70
    },
    {
        number: document.getElementById("reactNumber"),
        circle: document.querySelector(".react-circle"),
        target: 20
    }, 
    {
        number: document.getElementById("githubNumber"),
        circle: document.querySelector(".github-circle"),
        target: 70
    }
];

const move = 440;

animation.forEach(animation => {

    let counter = 0;

    const interval = setInterval(() => {

        if(counter >= animation.target){
            clearInterval(interval);
            return;
        }

        counter++;

        animation.number.innerHTML = counter + "%";

        animation.circle.style.strokeDashoffset =
            move - (counter / 100) * move;

    },20);

});








