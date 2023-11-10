const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");
let count = parseFloat(counterValue.textContent);

counter.addEventListener("click", (event) => {
  if (event.target.dataset.action === "increment") {
    count += 1;
  }
  if (event.target.dataset.action === "decrement") {
    count -= 1;
  }
  counterValue.textContent = count;
});
