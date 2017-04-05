'use strict';

var userResponse;

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
