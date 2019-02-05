const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

//The initial gradient
function onLoadBackground () {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	css.textContent = body.style.background + ";";
}
window.onload = onLoadBackground();

//Setting gradient after input
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
//Adding event listeners to trigger new gradient after input
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//A button that would generate a random gradient
const randomButton = document.getElementById("randomButton");
//randNumber function produces a random number in hexadecimal format (for creating a hex color input value)
//As browser demands two-digit numbers, zero is added before a numbers if its length < 2
let randNumber = function () {
	let rand = Math.floor(Math.random()*256).toString(16);
	if(rand.length < 2) {
		return "0" + rand;
	} return rand;
}

//Setting the random gradient using the generated random numbers
function randStyle() {
	color1.value = "#" + randNumber() + randNumber() + randNumber();
	color2.value = "#" + randNumber() + randNumber() + randNumber();
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

randomButton.addEventListener("click", randStyle);