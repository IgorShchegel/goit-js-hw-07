function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const textColor = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", (e) => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  textColor.textContent = window
    .getComputedStyle(bodyColor)
    .getPropertyValue("background-color");
});
