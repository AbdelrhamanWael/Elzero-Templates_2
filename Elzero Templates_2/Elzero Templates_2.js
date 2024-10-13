// Get the About link and section elements
const aboutLink = document.querySelector(".about-link");
const aboutSection = document.querySelector(".about");

// Add an event listener to the About link
aboutLink.addEventListener("click", function (event) {
  // Prevent the default link behavior
  event.preventDefault();
  // Scroll to the About section
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
  
