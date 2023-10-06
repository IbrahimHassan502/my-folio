"use strict";
// =================== nav menu on mobile ================
const moblieMenu = document.querySelector(".nav-menu");
const mobileMenuButton = document.querySelector(".mobile-menu-button");

mobileMenuButton.addEventListener("click", () => {
  moblieMenu.classList.toggle("-translate-y-full");
});
