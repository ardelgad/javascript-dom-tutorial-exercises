let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	
	//1. Using the `createElement` function, create a `div` container with `yellow` background and "Hello World" as `innerHTML`.

	let div = document.createElement("div");
	div.innerHTML = "Hello World";
	document.body.appendChild(div);

	//2. Then append that `div` into the `body` of the website when the users clicks on the `#superDuperButton`

	document.querySelector("div").style.background = "yellow";
});