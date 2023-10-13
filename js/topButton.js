// Get a reference to the scroll-to-top button
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show the button when the user has scrolled down 300 pixels
    scrollToTopButton.style.display = "block";
  } else {
    // Hide the button when the user is at the top of the page
    scrollToTopButton.style.display = "none";
  }
});

// Add a click event listener to scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
});
