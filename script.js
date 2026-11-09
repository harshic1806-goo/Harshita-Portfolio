// Initialize Lucide icons
if (window.lucide) {
    lucide.createIcons();
}

// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");

    const icon = menuToggle.querySelector("i");
    icon.setAttribute(
        "data-lucide",
        navbar.classList.contains("open") ? "x" : "menu"
    );

    lucide.createIcons();
});

// Close mobile menu after selecting a link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
        menuToggle.querySelector("i").setAttribute("data-lucide", "menu");
        lucide.createIcons();
    });
});

// Typing animation
const typingText = document.getElementById("typing-text");

const roles = [
    "Computer Engineering Student",
    "Frontend Developer",
    "Problem Solver",
    "Technology Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let delay = deleting ? 45 : 85;

    if (!deleting && characterIndex === currentRole.length) {
        deleting = true;
        delay = 1300;
    } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 350;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

// Scroll reveal animation
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Active navigation link
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
});

// Back to top button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();