/*
A function with a
Randomnumber generator with two values
*/

function number(high, low){
	var randomNumber = Math.floor(Math.random() * (high - low + 1)) + low;
	if (isNaN(high) === true  || isNaN(low) === true ){
		throw new Error ("You can only use numbers!");
	} else {
		return randomNumber;
	}
} 


document.write("<p>Displays a value between 10 - 100:<strong> " + number(100, "ten") + "</strong></p>");
document.write("<p>Displays a value between 1000 - 10000:<strong> " + number(10000, 1000) + "</strong></p>");
document.write("<p>Displays a value between 1 - 10:<strong> " + number("ten", 1) + "</strong></p>");
document.write("<p>Displays a value between 10 - 20:<strong> " + number(20, 10) + "</strong></p>");

