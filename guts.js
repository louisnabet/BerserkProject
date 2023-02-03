let levelOfGuts = 5;
let priceOfLevelUpGuts = 15;

function buyLevelUpGuts() {
  if (numberOfDarkEssence >= priceOfLevelUpGuts) {
    levelOfGuts = levelOfGuts + 1;
    numberOfDarkEssence = numberOfDarkEssence - priceOfLevelUpGuts;
    priceOfLevelUpGuts = priceOfLevelUpGuts * 1.5;
  }
}
