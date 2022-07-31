const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const listAfterMapEl = ingredients.map(item => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = item;

  return itemEl;
});

listEl.append(...listAfterMapEl);