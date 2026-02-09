// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const nav = document.getElementById("nav");

mobileMenuBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close mobile menu when clicking a nav link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active");
    nav.classList.remove("active");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.getElementById("header").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Header scroll effect
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  } else {
    header.style.boxShadow =
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  }
  lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");

function highlightNavLink() {
  const scrollPosition = window.pageYOffset;
  const headerHeight = header.offsetHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const correspondingLink = document.querySelector(
      `.nav-link[href="#${sectionId}"]`
    );

    if (correspondingLink) {
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => link.classList.remove("active"));
        correspondingLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNavLink);
window.addEventListener("load", highlightNavLink);

// Patinhas
const pawContainer = document.querySelector('.paw-container');

function ajustarAlturaPaws() {
  // o container cobre toda a altura do body
  pawContainer.style.height = document.body.scrollHeight + 'px';
}

// gera patinhas
function gerarPatinhas() {
  pawContainer.innerHTML = ''; // limpa antes
  const numPaws = 45;
  const containerHeight = document.body.scrollHeight;

  for (let i = 0; i < numPaws; i++) {
    const paw = document.createElement('img');
    paw.src = 'img/paw.png';
    paw.style.position = 'absolute';
    paw.style.top = Math.random() * containerHeight + 'px';
    paw.style.left = Math.random() * 100 + '%';
    paw.style.width = (20 + Math.random() * 30) + 'px';
    paw.style.opacity = 0.7;
    pawContainer.appendChild(paw);
  }
}

// roda no load e resize
window.addEventListener('load', () => {
  ajustarAlturaPaws();
  gerarPatinhas();
});

window.addEventListener('resize', () => {
  ajustarAlturaPaws();
  gerarPatinhas();
});