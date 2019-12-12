var valid_id = "iga2019";
var valid_pw = "iga";

var id = document.getElementById('login');
var pw = document.getElementById('pw');
var submit = document.getElementById('submit');

submit.onclick = function( ){
  if(valid_id == id.value)
  if(valid_pw == pw.value)
  window.location.href = "./informal assignment.html";
}
