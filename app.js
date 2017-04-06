'use strict';

var userResponse = '';
var favoriteNum = 11;
var userGuess;
var notGuessed = true;
var countriesVisited = ['canada', 'mexico', 'england', 'france', 'italy', 'spain', 'greece', 'croatia'];
var numQuestions = 0;
var numCorrect = 0;

function checkResponseYes(response) {
  if(response && (response.trim().toLowerCase() == 'yes' || response.trim().toLowerCase() == 'y')) {
    alert('Correct!');
    console.log('User response: ' + response + '. Correct!');
    numCorrect++;
  } else {
    alert('Wrong!');
    console.log('User response: ' + response + '. Wrong!');
  }
}

function checkResponseNo(response) {
  if(response && (response.trim().toLowerCase() == 'no' || response.trim().toLowerCase() == 'n')) {
    alert('Correct!');
    console.log('User response: ' + response + '. Correct!');
    numCorrect++;
  } else {
    alert('Wrong!');
    console.log('User response: ' + response + '. Wrong!');
  }
}
function questionOne(){

  userResponse = prompt('Does Kyle like rain drops on roses?');
  console.log('Does Kyle like rain drops on roses?');
  checkResponseYes(userResponse);
  numQuestions++;
}
function questionTwo(){
userResponse = prompt('Does Kyle like whiskers on kittens?');
console.log('Does Kyle like whiskers on kittens?');
checkResponseYes(userResponse);
numQuestions++;
}
function questionThree(){
userResponse = prompt('Does Kyle like beer?');
console.log('Does Kyle like beer?');
checkResponseYes(userResponse);
numQuestions++;
}
function questionFour(){
userResponse = prompt('Does Kyle like sweet potatoes?');
console.log('Does Kyle like sweet potatoes?');
checkResponseNo(userResponse);
numQuestions++;
}
function questionFive(){

userResponse = prompt('Does Kyle like sleep?');
console.log('Does Kyle like sleep?');
checkResponseYes(userResponse);
numQuestions++;
}

for(var i = 0; i < 4 && notGuessed; i++){
  userGuess = prompt('Guess Kyle\'s favorite number.');
  console.log('Guess Kyle\'s favorite number.');

  if(userGuess > favoriteNum){
      alert('Too high!');
      console.log('Too High!');
  } else if (userGuess < favoriteNum) {
    alert('Too low!');
    console.log('Too low!');
  } else {
    alert('You got it!');
    console.log('You got it!');
    notGuessed = false;
    numCorrect++;
  }
}
numQuestions++;

notGuessed = true;
for(var i = 0; i < 6 && notGuessed; i++){
  userGuess = prompt('Guess a Country that Kyle has visited (other than the US).');
  console.log('Guess a country that kyle has visited');

  for(var itr = 0; itr < countriesVisited.length; itr++){
    if(userGuess && userGuess.trim().toLowerCase() === countriesVisited[itr]){
      notGuessed = false;
    }
  }

  if(!notGuessed){
    alert('You guessed it!');
    console.log('You guessed it!');
    notGuessed = false;
    numCorrect++;
  } else {
    alert('Guess again.');
    console.log('Guess again.');
  }
}
numQuestions++;

alert('You got ' + numCorrect + ' out of' + numQuestions + 'correct');
