
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.textContent = nav.classList.contains("active")
        ? "✕"
        : "☰";
});

// MENU LINK CLICK
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;

    if (!name || !phone || !course) {
        formMessage.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
        return;
    }

    formMessage.textContent =
        "Rahmat, " + name + "! Demo arizangiz qabul qilindi.";

    contactForm.reset();
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(
    ".course-card, .about-content, .teacher-banner, .contact-box"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

// HEADER + SCROLL PROGRESS
const header = document.querySelector(".header");
const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progress.style.width = percent + "%";
    header.classList.toggle("scrolled", window.scrollY > 30);
});

// ACTIVE NAVIGATION
const sections = document.querySelectorAll("main section[id]");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll(".nav a").forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        }
    });
}, { rootMargin: "-35% 0px -55%", threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// SOFT CURSOR LIGHT
const cursorGlow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer:fine)").matches) {
    window.addEventListener("pointermove", event => {
        cursorGlow.style.transform = `translate(${event.clientX - 180}px, ${event.clientY - 180}px)`;
    });
}

