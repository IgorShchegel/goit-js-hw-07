const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const element = e.target.elements;

  if (
    element.email.value.trim() === "" ||
    element.password.value.trim() === ""
  ) {
    alert(`All form fields must be filled in`);
  } else {
    const data = {
      email: element.email.value.trim(),
      password: element.password.value.trim(),
    };
    console.log(data);
    form.reset();
  }
});
