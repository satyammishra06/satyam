// script.js

// Example: Toggle dark mode
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Additional animations
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Add fade-in animation to elements
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transition = "opacity 0.5s ease";
        element.classList.add("animate-fade-in");
    });

    // Example: Animate profile picture on hover
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("mouseenter", () => {
        profilePic.style.transform = "scale(1.1)";
    });
    profilePic.addEventListener("mouseleave", () => {
        profilePic.style.transform = "scale(1)";
    });
});

function toggleDetails() {
    var details = document.getElementById("details");
    var btn = document.getElementById("readMoreBtn");
    
    if (details.style.display === "none") {
      details.style.display = "block";
      btn.innerHTML = "Read Less";
    } else {
      details.style.display = "none";
      btn.innerHTML = "Read More";
    }
  }
  
   // Scroll to the achievements section
   achievements.scrollIntoView({ behavior: 'smooth' });
  
   // Toggle visibility of the achievements section
   if (achievements.style.display === "none") {
     achievements.style.display = "block";
   } else {
     achievements.style.display = "none";
   }
 
 