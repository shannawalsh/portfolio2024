// Select the button:
const backToTopButton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Select the Copyright element:
let currentYearElement = document.getElementById("currentYear");

// Get the current year
//let currentDate = new Date();
let currentYear = (new Date().getFullYear());

// Update the date in the Copyright element
currentYearElement.innerText = currentYear;

