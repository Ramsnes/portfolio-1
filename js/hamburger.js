const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("navbar-links")[0];
const mobileMenuLinks = document.querySelectorAll(".navbar-links ul li a");

toggleButton.addEventListener("click", () => {
  navbarlinks.classList.toggle("active"); //creates class active, which is styled
});

// click event listeners to clear hamMenu
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarlinks.classList.remove("active"); // Remove the 'active' class to close the mobile menu
  });
});
