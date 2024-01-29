var randomNumber1 = Math.ceil(Math.random() * 6);
let img1 = document.querySelector(".img1");
img1.setAttribute("src", `./images/dice${randomNumber1}.png`);

var randomNumber2 = Math.ceil(Math.random() * 6);
let img2 = document.querySelector(".img2");
img2.setAttribute("src", `./images/dice${randomNumber2}.png`);

const h1 = document.querySelector("h1");
if(randomNumber1 === randomNumber2){
    h1.innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    h1.innerText = "🚩Player 1 Wins!"
} else {
    h1.innerText = "Player 2 Wins!🚩"
}
