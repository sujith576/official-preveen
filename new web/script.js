const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");


menuOpenButton.addEventListener("click", () => {
    navMenu.classList.add("active");
});

menuCloseButton.addEventListener("click", () => {
    navMenu.classList.remove("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !menuOpenButton.contains(e.target)) {
        navMenu.classList.remove("active");
    }
});