const logInForm = document.querySelector(".login-form");

logInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = logInForm.elements.email;
  const passWordInput = logInForm.elements.password;

  if (!emailInput.value || !passwordInput) {
    alert("All fields must be filled in.");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);

    logInForm.reset();
  }
});
