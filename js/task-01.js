const dataCollection = document.querySelector("#categories");
const dataClassCollection = document.querySelectorAll(".item");

console.log("Number of categories: ", dataCollection.childElementCount);

dataClassCollection.forEach((data) => {
  const firstChild = data.firstElementChild;
  const lastChild = data.lastElementChild;
  console.log("Category: ", firstChild.textContent);
  console.log("Elements: ", lastChild.childElementCount);
});

// const categoriesList = document.querySelector("#categories");
// const categoryItems = categoriesList.querySelectorAll(".item");

// console.log(`Number of categories: ${categoryItems.length}`);

// categoryItems.forEach((category) => {
//   const categoryTitle = category.querySelector("h2");
//   const categoryElements = category.querySelectorAll("ul li");

//   console.log(`Category: ${categoryTitle.textContent}`);
//   console.log(`Elements: ${categoryElements.length}`);
// });
