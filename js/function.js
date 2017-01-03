/*
A function with a
Randomnumber generator with two values
*/

function number(high, low){
	var randomNumber = Math.floor(Math.random() * (high - low + 1)) + low;
	if (isNaN(high) === true  || isNaN(low) === true ){
		throw new Error ("You can only use numbers!");
	} else {
		return document.write("<p>This is your randomnumber: <strong>" + randomNumber + "</strong></p>");
	}
} 


number(100, 10);
number(10000, 1000);
number(5, 1);

