let numberOfDarkEssence = 0;

function getDarkEssencePerSecond() {
  return numberOfBeherit * 1.5;
}
function getDarkEssencePerClick() {
  return 1 + levelOfGuts;
}
function init() {
  setInterval(() => {
    numberOfDarkEssence = numberOfDarkEssence + getDarkEssencePerSecond() / 10;
  }, 100);
}
init();
