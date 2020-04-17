var score= 75; //score
var msg; //Message

if (score >= 50){  //If score is 50 or higher
    msg = 'Congratulations!';
    msg += ' proceed to the next round.';
}
 var el = document.getElementById('answer');
el.ttextContent= msg;
