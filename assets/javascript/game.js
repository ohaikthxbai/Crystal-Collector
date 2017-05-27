/* 
= = = = = = = pseudo something = = = = = = 

randomly generated number displayed to page
win and loss counters
crystals are clickable buttons that have number values
	number values are randomly assigned
each crystal click is added to the total score
if the total score matches the displayed number,
	it counts as a win, otherwise the player loses.

*/

// VARIABLES
// randomly generated number
var randomNumber;
//counters
var winCount = 0;
var lossCount = 0;
// player's number
var totalNumber = 0;
// crystals
var cry1;
var cry2;
var cry3;
var cry4;

// FUNCTIONS
// generate random number
// sets the game board
var letsPlay = function() {
    // random number between 19 and 120
    // 19 is the minimum number and 100 is the max 120, minus 20

    randomNumber = Math.floor((Math.random() * 100) + 19);
    cry1 = Math.floor((Math.random() * 12) + 1);
    cry2 = Math.floor((Math.random() * 12) + 1);
    cry3 = Math.floor((Math.random() * 12) + 1);
    cry4 = Math.floor((Math.random() * 12) + 1);
    totalNumber = 0;

    $('#rand-id').html(randomNumber);
    $('#wins').html(winCount);
    $('#losses').html(lossCount);
    $('#total').html(totalNumber);

    //testing
    //console.log(randomNumber);
    //console.log(winCount);
    //console.log(lossCount);
    //console.log(totalNumber);
    //console.log(cry1);
    //console.log(cry2);
    //console.log(cry3);
    //console.log(cry4);
}

// check the value of the total number vs the random number
var scoreCheck = function() {
	if (totalNumber === randomNumber) {
		alert("MATCH! Nice job! One dub for you!")
		winCount++;
		letsPlay();
	}
	else if (totalNumber > randomNumber) {
		alert("You went over! Here take this L.");
		lossCount++;
		letsPlay();
	}
}
// hmmmmm DRYYYY 
$(document).ready(function() {
	letsPlay();
    $('#red').click(function() {
        totalNumber += cry1;
        $('#total').html(totalNumber);
        //console.log(cry1);
        scoreCheck();
    })
    $('#blue').click(function() {
        totalNumber += cry2;
        $('#total').html(totalNumber);
        //console.log(cry2);
        scoreCheck();
    })
    $('#yellow').click(function() {
        totalNumber += cry3;
        $('#total').html(totalNumber);
        //console.log(cry3);
        scoreCheck();
    })
    $('#green').click(function() {
        totalNumber += cry4;
        $('#total').html(totalNumber);
        //console.log(cry4);
        scoreCheck();
    })
});
