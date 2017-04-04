'use strict';

var userResponse = '';

function checkResponse(response) {
  if(response.trim().toLowerCase() == 'yes' || response.trim().toLowerCase() == 'y') {
    alert('Correct!');
    console.log('User was correct.');
  } else {
    alert('Wrong!');
    console.log('User was not correct.');
  }
}

userResponse = prompt('Does Kyle like rain drops on roses?');
console.log('Does Kyle like rain drops on roses?');
checkResponse(userResponse);
