const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const valueEl = outputEl.textContent;

inputEl.addEventListener("input", onInputText);

function onInputText(event) {
  outputEl.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    outputEl.textContent = valueEl;
  }
}
