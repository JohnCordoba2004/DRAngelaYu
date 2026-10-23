const randomNumber = Math.floor(Math.random() * 6) + 1;
const randomImg = "images/dice" + randomNumber + ".png";
const img1 = document.querySelector(".img1").setAttribute("src", randomImg);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomImg2 = "images/dice" + randomNumber2 + ".png";
const img2 = document.querySelector(".img2").setAttribute("src", randomImg2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (randomNumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
