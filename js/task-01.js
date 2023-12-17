
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((value) => {
  console.log(`Category: ${value.firstElementChild.textContent}`);
  console.log(`Elements: ${value.lastElementChild.children.length}`);
});