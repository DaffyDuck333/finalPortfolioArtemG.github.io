// Select the hamburger and navigation menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
