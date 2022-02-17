function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButtonEl = document.querySelector("[data-create]");
const destroyButtonEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls input");

createButtonEl.addEventListener("click", createBoxes);
destroyButtonEl.addEventListener("click", destroyBoxes);

function createBoxes() {
  const divElements = [];
  let countPX = 30;
  for (let i = 0; i < inputEl.value; i++) {
    const addDiv = document.createElement("div");
    addDiv.classList.add("item");
    addDiv.style.width = `${countPX}px`;
    addDiv.style.height = `${countPX}px`;
    addDiv.style.backgroundColor = getRandomHexColor();
    divElements.push(addDiv);
    countPX += 10;
  }
  boxesEl.append(...divElements);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
