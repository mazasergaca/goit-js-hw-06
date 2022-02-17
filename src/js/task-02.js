const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map((value) => {
  const itemListEl = document.createElement("li");
  itemListEl.textContent = value;
  itemListEl.classList.add("item");
  return itemListEl;
});

listEl.append(...itemsEl);
