function init(){
//add your javascrip between these two lines of code
document.getElementById("entrybutton").addEventListener("click", myFunction);

function myFunction()
{
  input = document.getElementById("entryinput").value;
alert("Kenton Fong: " + input);
h2.innerHTML = input;
}






}
window.addEventListener('load', init);
