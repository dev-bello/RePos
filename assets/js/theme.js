"use strict";

const $HTML = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (localStorage.getItem("theme")) {
  $HTML.dataset.theme = localStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

let isPressed = false;

const changeTheme = function () {
  isPressed = isPressed ? false : true;
  this.setAttribute("aria-pressed", isPressed);

  $HTML.setAttribute("data-theme", $HTML.dataset.theme === "light" ? "dark" : "light");

  localStorage.setItem("theme", $HTML.dataset.theme);
};
window.addEventListener("load", function () {
  const $themeBtn = this.document.querySelector("[data-theme-btn]");

  $themeBtn.addEventListener("click", changeTheme);
});
