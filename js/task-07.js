const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onAddFontSizeAtInput);
spanEl.style.fontSize = `${inputEl.value}px`;
function onAddFontSizeAtInput(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
