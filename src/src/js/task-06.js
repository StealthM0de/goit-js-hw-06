const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  const inputValue = event.target.value;
  const dataLength = event.target.dataset.length;

  validationInput.classList.remove("invalid");
  validationInput.classList.remove("valid");

  if (inputValue.length === parseInt(dataLength)) {
    validationInput.classList.add("valid");
  } else if (inputValue.length > 0) {
    validationInput.classList.add("invalid");
  }
});
