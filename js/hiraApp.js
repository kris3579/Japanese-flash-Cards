'use strict';

var check = new Image();
check.src = 'assets/check.png';

var cross = new Image();
cross.src = 'assets/cross.png';

var hiraA = new Image();
hiraA.src = 'hiraimgs/a.png';
hiraA.answer = 'a';

var hiraI = new Image();
hiraI.src = 'hiraimgs/i.png';
hiraI.answer = 'i';

var hiraU = new Image();
hiraU.src = 'hiraimgs/u.png';
hiraU.answer = 'u';

var hiraE = new Image();
hiraE.src = 'hiraimgs/e.png';
hiraE.answer = 'e';

var hiraO = new Image();
hiraO.src = 'hiraimgs/o.png';
hiraO.answer = 'o';

var hiraKa = new Image();
hiraKa.src = 'hiraimgs/ka.png';
hiraKa.answer = 'ka';

var hiraArray = [hiraA, hiraI, hiraU, hiraE, hiraO, hiraKa];

// Function pulling random image object from the array
function imgRandom(imgArr) {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}

// Assign said image object to randomHira variable
var randomHira = imgRandom(hiraArray);
// var randomKata = imgRandom(kataArray);
var locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'hiraLocation');
var validationDiv = document.createElement('div');
validationDiv.setAttribute('id', 'validation');

function image() {
  var location = document.getElementById('hiraLocation');
  if (location) {
    document.getElementById('hiraLocation').removeChild(randomHira);
    document.getElementById('imgSection').removeChild(location);
  }
  document.getElementById('imgSection').appendChild(locationDiv);
  // Assign a new image
  randomHira = imgRandom(hiraArray);
  // Send the image to the div with kanaLocation id
  document.getElementById('hiraLocation').appendChild(randomHira);
  // document.getElementById('kanaLocation').appendChild(randomKata);
  document.forms['form1'].reset();
}

// Check whether User input is correct, formInput() is called when the user clicks the button

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
  if (document.getElementById('input').value.toLowerCase() === randomHira.answer) {
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