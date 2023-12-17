const userName = document.querySelector("#name-input");
const writeName = document.querySelector("#name-output");

userName.addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    writeName.textContent = "Anonymous";
  } else {
    writeName.textContent = e.target.value.trim();
  }
});
