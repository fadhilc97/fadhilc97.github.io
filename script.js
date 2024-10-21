const hamburgerBtn = document.querySelector(".hamburger-menu");
const menuUl = document.querySelector("nav ul");

hamburgerBtn.addEventListener("click", () => {
  showNavMenus();
});

function showNavMenus() {
  menuUl.classList.toggle("nav-menus");
}
