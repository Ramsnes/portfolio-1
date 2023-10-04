// Cross Course
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

//
//
// Semester
const description1 = document.querySelector(".semester-description");
const button2 = document.querySelector(".semester-btn");

// Flag to track the state (visible or hidden)
let isDescription1Visible = false;

// Button click event listener
button2.addEventListener("click", () => {
  // Toggles the visibility of the description element
  isDescription1Visible = !isDescription1Visible;
  description1.style.display = isDescription1Visible ? "grid" : "none";

  // Updates the button text based on the state
  button2.textContent = isDescription1Visible
    ? "Hide description"
    : "Show description";
});

//
//
// Exam
const description2 = document.querySelector(".projectExam-description");
const button3 = document.querySelector(".projectExam-btn");

// Flag to track the state (visible or hidden)
let isDescription2Visible = false;

// Button click event listener
button3.addEventListener("click", () => {
  // Toggles the visibility of the description element
  isDescription2Visible = !isDescription2Visible;
  description2.style.display = isDescription2Visible ? "grid" : "none";

  // Updates the button text based on the state
  button3.textContent = isDescription2Visible
    ? "Hide description"
    : "Show description";
});
