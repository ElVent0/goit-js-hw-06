const categoriesEl = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesEl.children.length}`);

for (const item of categoriesEl.children) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
};