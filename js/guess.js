/*Gissa talet spel där användaren själv får väja intervall
att gissa mellan. Programmet loppar tills det att 
användaren har gissat rätt. När användaren gissat rätt
skrivs det ut tillsammans med statistik för hur många 
gissningar det tog.*/

var input = prompt("Skriv in ett nummer"); 
input = parseInt(input);
var input2 = prompt("Skriv in ett nytt nummer, större en det förre");
input2 = parseInt(input2);
var randomNumber = Math.floor(Math.random() * (input2 - input + 1)) + input;
var counter = 0
var rightCounter = 0

while (guess != randomNumber) {
	var guess = prompt("Gissa nu på ett nummer mellan " + input + " och " + input2);
	counter +=1
		
	if (parseInt(guess) === randomNumber){
		rightCounter +=1
		document.write("<p>Grattis du gissade rätt, rätt nummer var " + randomNumber + "</p>");
		document.write("<p>Antal gånger du gissat: " + counter + "</p>");
		//document.write("<p>Du har gissat rätt " + rightCounter + " gånger</p>")
	} 
}