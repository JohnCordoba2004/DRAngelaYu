const numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const btninnerHtml = this.innerHTML;
    makeSound(btninnerHtml);
    btnAnimation(btninnerHtml);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      const w = new Audio("./sounds/tom-1.mp3");
      w.play();
    case "a":
      const a = new Audio("./sounds/tom-2.mp3");
      a.play();
    case "s":
      const s = new Audio("./sounds/tom-3.mp3");
      s.play();
    case "d":
      const d = new Audio("./sounds/tom-4.mp3");
      d.play();
    case "j":
      const j = new Audio("./sounds/snare.mp3");
      j.play();
    case "k":
      const k = new Audio("./sounds/crash.mp3");
      k.play();
    case "l":
      const l = new Audio("./sounds/kick-bass.mp3");
      l.play();
      break;

    default:
      break;
  }
}

function btnAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
