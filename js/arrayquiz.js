//Quiz program
//Keep track of correct answeres
//Use two dimensional array
//Array with at least three questions
//Use a loop to go through the question

var questions = [
				["What is Marios antagonist called?", "bowser"],
				["What company is behind consoles like N64 and GameCube?", "nintendo"],
				["What is the main character you play as in The Legend of Zelda called?", "link"],
				["What is the name of Nintendos latest game to mobiledevices?", "super mario run"],
				];
var counter = 0;
var question;
var answer;
var response;
var html;


function print(message) {
  document.write(message);
}

for(var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	
	response = prompt(question);
	response = response.toLowerCase();
	if (response === answer){
		counter += 1;	
	} 
}

html = "<p>You got " + counter + " out of 4 correct answers.</p>";
print(html);

