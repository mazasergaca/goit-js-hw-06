const inputEl = document.querySelector("#validation-input");
const lengthValue = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onCheckLength);

function onCheckLength(event) {
  if (event.currentTarget.value.length === lengthValue) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
