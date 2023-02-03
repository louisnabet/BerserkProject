function updateDarkEssenceDisplay() {
  const darkEssenceDisplayHTML = document.getElementById("darkessenceDisplay");
  darkEssenceDisplayHTML.innerHTML = Math.round(numberOfDarkEssence);
}
function updateBuyBeheritDisplay() {
  const buyBeheritButtonHTML = document.getElementById("priceOfBeherit");
  buyBeheritButtonHTML.innerHTML = Math.round(priceOfBeherit);
}
function updateBeheritDisplay() {
  const behelitDisplayHTML = document.getElementById("beheritDisplay");
  behelitDisplayHTML.innerHTML = numberOfBeherit;
}
function updatePriceOfLevelUPGutsDisplay() {
  const levelUpGutsDisplayHTML = document.getElementById("priceOfLvlUpGuts"); // new
  levelUpGutsDisplayHTML.innerHTML = Math.round(priceOfLevelUpGuts);
}
function updateLevelOfGutsDisplay() {
  const levelOfGutsHTML = document.getElementById("lvlOfGuts");
  levelOfGutsHTML.innerHTML = levelOfGuts;
}
function updateDamagePerClick() {
  const damagePerClickHTML = document.getElementById("dammagePerClick");
  damagePerClickHTML.innerHTML =
    "dammage per click :" + getDarkEssencePerClick();
}

function initializeRenderer() {
  updateDarkEssenceDisplay();
  updateBuyBeheritDisplay();
  updateBeheritDisplay();
  updatePriceOfLevelUPGutsDisplay();
  updateLevelOfGutsDisplay();
  updateDamagePerClick();
  window.requestAnimationFrame(initializeRenderer);
}
initializeRenderer();
