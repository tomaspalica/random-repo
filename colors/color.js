const colorInput = document.querySelector(".color-input");
const colorButton = document.querySelector(".color-button");
const colorForm = document.querySelector(".color-form");
const ourBody = document.querySelector("body");
const errorMessage = document.querySelector(".error-message");
function isValidColor(strColor) {
  let s = new Option().style;
  s.color = strColor;

  return s.color == strColor.toLowerCase();
}
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const color = e.currentTarget.color.value;
  if (isValidColor(color)) {
    ourBody.style.backgroundColor = `${color}`;
    errorMessage.style.display = "none";
    colorInput.style.borderColor = "black";
  } else {
    colorInput.style.borderColor = "red";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "please enter valid color";
  }
});
