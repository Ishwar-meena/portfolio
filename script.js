let humburgerIcon = document.getElementById("humburger-icon");
let crossIcon = document.getElementById("cross-icon");
let navMenu = document.querySelector("nav ul");

humburgerIcon.addEventListener("click", () => {
    navMenu.style.display = "block";
    humburgerIcon.style.display = "none";
    crossIcon.style.display = "block";
});

crossIcon.addEventListener("click", () => {
    navMenu.style.display = "none";
    crossIcon.style.display = "none";
    humburgerIcon.style.display = "block";
});