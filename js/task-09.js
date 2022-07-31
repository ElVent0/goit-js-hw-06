function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector("button.change-color");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  spanEl.textContent = getRandomHexColor();  
  bodyEl.style.backgroundColor = getRandomHexColor();
});


