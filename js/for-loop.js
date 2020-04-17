let scores = [24, 32, 17];           //Array of scores
let arrayLength = scores.length;     //Items in array
let roundNumber = 0;                //Current round
let msg = '';                       //Message
let i;                              //Counter

//Loop though the items in the array
for (i = 0; i < arrayLength; i++){

    //Arrays are zero based (so 0 is round 1)
    //Add 1 to the current round
    roundNumber = (i+ 1);

    //Write the current round to the message
    msg += 'Round ' + roundNumber + ': ';

    //Get the score from the scores array
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;