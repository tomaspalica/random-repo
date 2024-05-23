const headTitle = document.querySelector(".head-title");
const colorList = document.querySelector(".random-colors");
const ourBody = document.querySelector("body");
function randomColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
}

for (let i = 0; i < 50; i++) {
  const color = document.createElement("li");
  const generatedColor = "#" + `${randomColor()}`;
  color.classList.add("color-box");
  color.style.backgroundColor = `${generatedColor}`;
  color.dataset.color = generatedColor;
  colorList.append(color);
}

colorList.addEventListener("click", (e) => {
  if (e.target.nodeName !== "LI") {
    return;
  }
  const targetBox = e.target.dataset.color;
  ourBody.style.backgroundColor = `${targetBox}`;
  headTitle.innerHTML = `Selected Color: ${targetBox.toUpperCase()}`;
});
