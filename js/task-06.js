function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
const boxesDivRef = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  boxesDivRef.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDivRef.appendChild(box);
    size += 10;
  }
}

createBtnRef.addEventListener("click", () => {
  const amount = inputRef.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputRef.value = "";
  } else {
    alert("Введіть число від 1 до 100");
  }
});

function destroyBoxes() {
  boxesDivRef.innerHTML = "";
}

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
});
