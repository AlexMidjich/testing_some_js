/*Quiz program
- Five questions
- Counter for every right answer
- Display the number of questions that was correct
- Rank the player: Five correct answers = Gold Crown; 3-4 = Silver Crown; 1-2 = Bronze; 0 = No crown*/

var answer = false;
var question = prompt("What is the capitol of Sweden?"); 
question = question.toLowerCase();
var question2 = prompt("What is the name of the famous mouse from Disney?");
question2 = question2.toLowerCase();
var question3 = prompt("What popular Nintendo character made it's debue on ios?");
question3 = question3.toLowerCase();
var question4 = prompt("Give me the name of the latest Star Wars movie, released 2016?");
question4 = question4.toLowerCase();
var question5 = prompt("Who is Luke Skywalkers father?");
question5 = question5.toLowerCase();
var count = 0;

if (question === "stockholm") {
	count +=1
	document.write("<p>correct</p>");
} else {
	document.write("<p>Wrong, right answer is Stockholm.</p>");
}
if (question2 === "mickey mouse") {
	count +=1
	document.write("<p>correct</p>");
} else {
	document.write("<p>Wrong, right answer is Mickey Mouse</p>");
} 
if (question3 === "super mario" || question3 === "mario") {
	count +=1
	document.write("<p>correct</p>");
} else {
	document.write("<p>Wrong, right answer is Super Mario or Mario</p>");
}
if (question4 === "rouge one") {
	count +=1
	document.write("<p>correct</p>");
} else {
	document.write("<p>Wrong, right answer is Rouge One</p>");
}
if (question5 === "darth wader" || question5 === "anakin skywalker" || question5 === "anakin") {
	count +=1
	document.write("<p>correct</p>");
} else {
	document.write("<p>Wrong, right answer is Darth Wader, Anakin Skywalker or Anakin</p>");
}


document.write("<p>You got " + count + " correct answers.</p>");
if (count === 5){
	document.write("<p>Wow, congratulations! You recieved a gold crown.</p>");
} else if (count < 5 && count > 3) {
	document.write("<p>Great job! You recieved a silver crown.</p>");
} else if (count < 3 && count > 1) {
	document.write("<p>Good job! You recieved a bronze crown.</p>");
} else {
	document.write("<p>Better luck next time.</p>")
}
