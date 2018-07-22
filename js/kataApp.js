'use strict';

var check = new Image();
check.src = 'check.png';

var cross = new Image();
cross.src = 'cross.png';

var kataArray = [];

// Function pulling random image object from the array
function imgRandom(imgArr) {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}

// Assign said image object to randomKata variable
var randomKata = imgRandom(kataArray);
// var randomKata = imgRandom(kataArray);
var locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'kataLocation');
var validationDiv = document.createElement('div');
validationDiv.setAttribute('id', 'validation');

function image() {
  var location = document.getElementById('kataLocation');
  if (location) {
    document.getElementById('kataLocation').removeChild(randomKata);
    document.getElementById('imgSection').removeChild(location);
  }
  document.getElementById('imgSection').appendChild(locationDiv);
  // Assign a new image
  randomKata = imgRandom(kataArray);
  // Send the image to the div with kanaLocation id
  document.getElementById('kataLocation').appendChild(randomKata);
  // document.getElementById('kanaLocation').appendChild(randomKata);
  document.forms['form1'].reset();
}
var validator;

function nukeMakeDiv() {
  var validation = document.getElementById('validation');
  if (validation) {
    document.getElementById('validation').removeChild(validator);
    document.getElementById('checklocation').removeChild(validation);
  }
  document.getElementById('checklocation').appendChild(validationDiv);
  append();
}

function append() {
  if (document.getElementById('input').value.toLowerCase() === randomKata.answer) {
    validator = check;
    document.getElementById('validation').appendChild(validator);
    image();
  } else {
    validator = cross;
    document.getElementById('validation').appendChild(validator);
    image();
  }
}

image();