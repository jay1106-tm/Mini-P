var btns = document.querySelectorAll("button");

for (const btn of btns) {
  btn.addEventListener("keydown", (e) => {
    makeSound(e.key);
    btnAnimation(e.key);
  });
  btn.addEventListener("click", () => {
    makeSound(btn.innerHTML);
    btnAnimation(btn.innerHTML);
  });
}

function btnAnimation(evt) {
  var activeBtn = document.querySelector("." + evt);
  activeBtn.classList.add("pressed");
  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
}

function makeSound(event) {
  switch (event) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("Press Again Bro");
  }
}
