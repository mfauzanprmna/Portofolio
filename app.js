const skills = document.querySelector(".skills");
const about = document.querySelector(".about");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const project = document.querySelector(".project");
const home = document.querySelector("#home");
const progressBars = document.querySelectorAll(".bar");

window.addEventListener("scroll", () => {
    const sectionPoss = skills.getBoundingClientRect().top;
    const aboutPoss = about.getBoundingClientRect().top;
    const experiencePoss = experience.getBoundingClientRect().top;
    const educationPoss = education.getBoundingClientRect().top;
    const projectPoss = project.getBoundingClientRect().top;
    const homePoss = home.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    console.log(aboutPoss);
    console.log(screenPos);

    if (sectionPoss < screenPos) {
        $(".bar").addClass("progress-bar");
        $(".navSkill").addClass("active");
    } else {
        $(".bar").removeClass("progress-bar");
        $(".navSkill").removeClass("active");
    }

    if (homePoss < screenPos && aboutPoss > screenPos) {
        $(".navHome").addClass("active");
    } else {
        $(".navHome").removeClass("active");
    }

    if (aboutPoss < screenPos && educationPoss > screenPos) {
        $(".navAbout").addClass("active");
    } else {
        $(".navAbout").removeClass("active");
    }

    if (educationPoss < screenPos && experiencePoss > screenPos) {
        $(".navEducation").addClass("active");
    } else {
        $(".navEducation").removeClass("active");
    }

    if (experiencePoss < screenPos && projectPoss > screenPos) {
        $(".navExperience").addClass("active");
    } else {
        $(".navExperience").removeClass("active");
    }

    if (projectPoss < screenPos && sectionPoss > screenPos) {
        $(".navProject").addClass("active");
    } else {
        $(".navProject").removeClass("active");
    }
});

function myFunction(x) {
    if (x.matches) {
        // If media query matches
        $(".school").attr("data-aos", "fade-up");
    } else {
        $(".school").attr("data-aos", "fade-left");
    }
}

var x = window.matchMedia("(max-width: 991px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes