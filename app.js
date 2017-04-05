'use strict';

var userResponse = '';

function checkResponseYes(response) {
  if(response && (response.trim().toLowerCase() == 'yes' || response.trim().toLowerCase() == 'y')) {
    alert('Correct!');
    console.log('User response: ' + response + '. Correct!');
  } else {
    alert('Wrong!');
    console.log('User response: ' + response + '. Wrong!');
  }
}

function checkResponseNo(response) {
  if(response && (response.trim().toLowerCase() == 'no' || response.trim().toLowerCase() == 'n')) {
    alert('Correct!');
    console.log('User response: ' + response + '. Correct!');
  } else {
    alert('Wrong!');
    console.log('User response: ' + response + '. Wrong!');
  }
}

userResponse = prompt('Does Kyle like rain drops on roses?');
console.log('Does Kyle like rain drops on roses?');
checkResponseYes(userResponse);

userResponse = prompt('Does Kyle like whiskers on kittens?');
console.log('Does Kyle like whiskers on kittens?');
checkResponseYes(userResponse);

userResponse = prompt('Does Kyle like beer?');
console.log('Does Kyle like beer?');
checkResponseYes(userResponse);

userResponse = prompt('Does Kyle like sweet potatoes?');
console.log('Does Kyle like sweet potatoes?');
checkResponseNo(userResponse);

userResponse = prompt('Does Kyle like sleep?');
console.log('Does Kyle like sleep?');
checkResponseYes(userResponse);

var favoriteNum = '11';
var userGuess
var numNotGuessed = true;

for(var i = 0; i < 4 && numNotGuessed; i++){
  userGuess = prompt('Guess Kyle\'s favorite number.');
  console.log('Guess Kyle\'s favorite number.');

  if(userGuess > favoriteNum){
      alert('Too high!');
      console.console.log('Too High!');
  } else if (userGuess < favoriteNum) {
    alert('Too low!');
    console.console.log('Too low!');
  } else {
    alert('You got it!');
    console.console.log('You got it!');
    numNotGuessed = false;
  }
}
