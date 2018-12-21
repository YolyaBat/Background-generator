var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
function onLoadBackground () {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	css.textContent = body.style.background + ";";
}
onLoadBackground();
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var randomButton = document.getElementById("randomButton");
var moreStyles = document.getElementById("more");

// function getRandNumber() {
// var randNumber = Math.floor(Math.random()*256);
// return randNumber;
// }
var randNumber1 = Math.floor(Math.random()*256);
var randNumber2 = Math.floor(Math.random()*256);
var randNumber3 = Math.floor(Math.random()*256);
var randNumber4 = Math.floor(Math.random()*256);
var randNumber5 = Math.floor(Math.random()*256);
var randNumber6 = Math.floor(Math.random()*256);

// function randStyle() {
// 	body.style.background = 
// 	"linear-gradient(to right, rgb(" + getRandNumber() +", "
// 	+ getRandNumber() + ", " + getRandNumber() + "), rgb(" +
// 	getRandNumber() + ", " + getRandNumber() + ", " + getRandNumber() +
// 	"))";
// }

function randStyle() {
	body.style.background = 
	"linear-gradient(to right, rgb(" + randNumber1 +", "
	+ randNumber2 + ", " + randNumber3 + "), rgb(" +
	randNumber4 + ", " + randNumber5 + ", " + randNumber6 +
	"))";
	css.textContent = body.style.background + ";";
}

randomButton.addEventListener("click", randStyle);
moreStyles.addEventListener("click", function() {
	location.reload();
})