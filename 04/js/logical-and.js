var score1 = 8;   //Round 1 scores
var score2 = 8; //Round 2 scores
var pass1 = 6;  //Round 1 pass mark
var pass2 =6;   //Round 2 pass mark

//Check whether user passed both rounds, store result in variable
var passBoth = (score1 >= pass1)&&(score2 >= pass2);

//Create a message
var msg = 'Both rounds passed: ' + passBoth;

//Write the message into the page
var el = document.getElementById('answer');
el.textContent = msg;
