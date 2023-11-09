const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const recipe = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  recipe.insertAdjacentHTML("beforeend", `<li class="item">${ingredient}</li>`);
});
