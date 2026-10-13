/* ================= WELCOME MESSAGE ================= */

window.onload = function () {

    setTimeout(function () {
        alert("Welcome to Shiella Mae Ocampo's Portfolio!");
    }, 500);

    updateDateTime();
};


/* ================= HIRE ME ================= */

function viewProjects() {
    navigateToSection("projects");
}

const pageSectionIds = ["home", "about", "skills", "projects", "contact"];

function navigateToSection(sectionId, updateHistory = true) {
    if (!pageSectionIds.includes(sectionId)) return;

    pageSectionIds.forEach((id) => {
        document.getElementById(id).hidden = id !== sectionId;
    });

    navLinks?.querySelectorAll("a").forEach((link) => {
        link.classList.toggle("active", link.hash === `#${sectionId}`);
    });

    if (updateHistory && window.location.hash !== `#${sectionId}`) {
        window.history.pushState({ sectionId }, "", `#${sectionId}`);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("popstate", function () {
    const sectionId = window.location.hash.slice(1);
    navigateToSection(pageSectionIds.includes(sectionId) ? sectionId : "home", false);
});


/* ================= SHOW / HIDE INFORMATION ================= */

function toggleInfo(event) {

    const info = document.getElementById("moreInfo");
    const button = event.target;

    if (info && info.classList.contains("show")) {

        info.classList.remove("show");
        button.textContent = "Show More";

    } else if (info) {

        info.classList.add("show");
        button.textContent = "Show Less";

    }

}


/* ================= SKILLS GOAL TOGGLE ================= */

function showGoal(event) {

    const goal = document.getElementById("learningGoal");
    const button = event && event.currentTarget ? event.currentTarget : event.target;

    if (!goal || !button) return;

    goal.classList.toggle("show");

    button.textContent = goal.classList.contains("show")
        ? "Hide my learning goal"
        : "Show my learning goal";

}


/* ================= READ MORE ================= */

function readMore(id) {

    const project = document.getElementById(id);

    if (project) {
        project.classList.toggle("show");
    }

}

function openActivity(event, id) {

    const project = document.getElementById(id);
    const button = event && event.currentTarget ? event.currentTarget : event.target;

    if (!button || !project) return;

    project.classList.toggle("show");
    button.textContent = project.classList.contains("show")
        ? "Hide Activity"
        : "Open Activity";

}

function closeActivity(id, event) {
    if (event) {
        event.preventDefault();
    }

    const project = document.getElementById(id);

    if (!project) return;

    project.classList.remove("show");

    const button = document.querySelector('[onclick*="openActivity(event, \'" + id + "\')"]');
    if (button) {
        button.textContent = "Open Activity";
    }
}


/* ================= DARK / LIGHT MODE ================= */

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    const initialSectionId = window.location.hash.slice(1);
    navigateToSection(pageSectionIds.includes(initialSectionId) ? initialSectionId : "home", false);

    menuBtn.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
        menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });

    navLinks.addEventListener("click", function (event) {
        const link = event.target.closest("a");

        if (link) {
            event.preventDefault();
            navigateToSection(link.hash.slice(1));
            navLinks.classList.remove("open");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");
        }
    });
}

if (themeBtn) {
    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        themeBtn.textContent = isDark ? "☀️" : "🌙";
        themeBtn.style.color = isDark ? "#17132f" : "#17132f";
        themeBtn.style.background = isDark ? "#ffffff" : "rgba(255, 255, 255, 0.8)";

    });
}


/* ================= CURRENT DATE / TIME ================= */

function updateDateTime() {

    const dateTime = document.getElementById("dateTime");

    const now = new Date();

    dateTime.textContent =
        "Current Date & Time: " + now.toLocaleString();

}

setInterval(updateDateTime, 1000);


/* ================= IMAGE SLIDESHOW ================= */

const slideImages = Array.from(document.querySelectorAll(".slide-image"));
let currentSlide = 0;

function showSlide() {

    if (!slideImages.length) return;

    slideImages.forEach((image, index) => {
        image.style.display = index === currentSlide ? "block" : "none";
    });

}

function nextSlide() {

    if (!slideImages.length) return;

    currentSlide++;

    if (currentSlide >= slideImages.length) {
        currentSlide = 0;
    }

    showSlide();

}

function previousSlide() {

    if (!slideImages.length) return;

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slideImages.length - 1;
    }

    showSlide();

}

showSlide();

/* Automatic slideshow */

setInterval(nextSlide, 4000);


/* ================= CONTACT FORM ================= */

function sendMessage(event) {

    event.preventDefault();

    alert("Thank you for contacting me! Your message has been received.");

    event.target.reset();

}


/* ================= BACK TO TOP ================= */

window.onscroll = function () {

    const topButton = document.getElementById("topBtn");

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};


function goTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}