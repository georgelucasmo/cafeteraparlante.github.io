const menu = document.querySelector(".nav-items");
const menuItems = document.querySelectorAll(".menu-items");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".cerrar-menu");
const menuIcon = document.querySelector(".icono-menu");

closeIcon.style.display = "none";

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
