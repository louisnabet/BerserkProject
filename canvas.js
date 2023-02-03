// const canvas = document.getElementById("swordSharpening");
// const ctx = canvas.getContext("2d");

// ctx.lineWidth = 10;

// //ctx.strokeRect(600, 40, 560, 920); // X , Y , LARGEUR , HAUTEUR
// //ctx.beginPath();
// //ctx.arc(600, 500, 100, 0, Math.PI / 2);
// //ctx.stroke();

// //ctx.beginPath();
// //ctx.arc(600, 500, 100, Math.PI, (Math.PI * 3) / 2);
// //ctx.stroke();

// function drawBall(abscisse, ordonees, radius) {
//   ctx.beginPath();
//   ctx.arc(abscisse, ordonees, radius, 0, Math.PI * 2);
//   ctx.stroke();
// }

// function drawRandoomStar() {
//   ctx.fillStyle = "yellow";
//   console.log(Math.round(Math.random() * 1000));
// }

// function getRandomNumberBelowMaxNumber(maxNumber) {
//   let number = Math.round(Math.random() * maxNumber);
//   return number;
// }
// const randomNumberBetweenZeroAndHundred = getRandomNumberBelowMaxNumber(1000);
// console.log(randomNumberBetweenZeroAndHundred);

// const michelle = 3;
// const patrick = 8 / 2;
// const jack = michelle * 3;
// const pierre = Math.round(jack);

const salutation = "coucou";
const letters = salutation.split("");
console.log(letters);
const thrirdElement = letters[2];
console.log(thrirdElement);
const sixthElement = letters[5];
console.log(sixthElement);
const verySameLetter = thrirdElement === sixthElement;

console.log(thrirdElement === sixthElement);
