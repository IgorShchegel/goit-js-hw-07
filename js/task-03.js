const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  const inputText = e.target.value.trim();
  if (inputText === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputText;
  }
});
