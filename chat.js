// script.js
document.addEventListener("mousemove", function(event) {
    var cursor = document.querySelector('.blurry-cursor');
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('gradient-overlay');

    // Function to handle scroll event
    function handleScroll() {
        // Calculate the opacity based on scroll position
        var opacity = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        // Apply opacity to the overlay
        overlay.style.opacity = opacity;
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});

