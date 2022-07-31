function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyel = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");
let valueWidthAndHeight = 20;

const createBoxes = (amount) => {
  amount = inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    const elementEl = document.createElement('div');
    valueWidthAndHeight += 10;
    elementEl.style.width = valueWidthAndHeight + "px";
    elementEl.style.height = valueWidthAndHeight + "px";
    elementEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(elementEl);
  };
};

const destroyBoxes = () => {
  do {
    boxesEl.firstChild.remove()
  } while (boxesEl.firstChild != null);
};

buttonCreateEl.addEventListener("click", createBoxes);

buttonDestroyel.addEventListener("click", destroyBoxes);