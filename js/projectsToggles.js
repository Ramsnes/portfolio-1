const description = document.querySelector(".crossCourse-description");
const button = document.querySelector(".crossCourse-btn");

// Flag to track the state (visible or hidden)
let isDescriptionVisible = false;

// Button click event listener
button.addEventListener("click", () => {
  // Toggles the visibility of the description element
  isDescriptionVisible = !isDescriptionVisible;
  description.style.display = isDescriptionVisible ? "grid" : "none";

  // Updates the button text based on the state
  button.textContent = isDescriptionVisible
    ? "Hide description"
    : "Show description";
});
