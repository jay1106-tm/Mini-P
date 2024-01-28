const btns = document.querySelectorAll(".btn");
const body = document.body;
btns.forEach((color) => {
  color.addEventListener("mouseover", () => {
    changeBackground(color.value);
  });
});

changeBackground = (number) => {
  body.className = "";
  switch (number) {
    case "Purple":
      body.classList.add("purple");
      break;
    case "Blue":
      body.classList.add("blue");
      break;
    case "Red":
      body.classList.add("red");
      break;
    case "Green":
      body.classList.add("green");
      break;
    case "Yellow":
      body.classList.add("yellow");
      break;
    case "Teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
};
