var phones = 0;
var phonesButton = document.getElementById('phonesButton');
var phonesDisplay = document.getElementById('phonesDisplay');
phonesButton.onclick = function() {
  phones = phones + 1;
  phonesDisplay.innerHTML = phones + " phones";
}

var coins = 0;
var coinsButton = document.getElementById('coinsButton');
var coinsDisplay = document.getElementById('coinsDisplay');
coinsButton.onclick = function() {
  coins = coins + 1;
  coinsDisplay.innerHTML = coins + " coins";
}

var FaceBook = 0;
var FaceBookButton = document.getElementById('FaceBookButton');
var FaceBookDisplay = document.getElementById('FaceBookDisplay');
FaceBookButton.onclick = function() {
  FaceBook = FaceBook + 1;
  FaceBookDisplay.innerHTML = FaceBook + " FaceBook";
}

var pink = 0;
var pinkButton = document.getElementById('pinkButton');
var pinkDisplay = document.getElementById('pinkDisplay');
pinkButton.onclick = function() {
 if(coins >= 10) {
   coins -= 10;
   pink++;
   coinsDisplay.innerHTML = Math.round(coins) + "coins";
   pinkDisplay.innerHTML = Math.round(pink) + "pink";  }
}
