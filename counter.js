// Load the visit count from localStorage or initialize it to 0
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

// Increment the visit count and update the display
visitCount++;
document.getElementById('visitCount').textContent = visitCount;

// Save the updated visit count to localStorage
localStorage.setItem('visitCount', visitCount.toString());
