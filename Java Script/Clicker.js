var eggs = 0;

var eggButton = document.getElementById('eggButton');

var eggDisplay = document.getElementById('eggDisplay');

eggButton.onclick = function() {
  eggs = eggs + 1;
  eggDisplay.innerHTML = eggs + " egg(s)";
}
