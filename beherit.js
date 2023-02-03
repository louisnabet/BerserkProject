let numberOfBeherit = 0;
let priceOfBeherit = 100;
const audio = new Audio("sound/behelitsound.mp3");

function buyBeherit() {
  if (numberOfDarkEssence >= priceOfBeherit) {
    numberOfBeherit = numberOfBeherit + 1;
    numberOfDarkEssence = numberOfDarkEssence - priceOfBeherit;
    priceOfBeherit = priceOfBeherit * 1.5;
    audio.play();
  }
}
