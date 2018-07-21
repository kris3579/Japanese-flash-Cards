'use strict';

// Use ths form with Image objects?
// function hiragana(src, answer) {
//   this.src = src;
//   this.answer = answer;
// }

var hiraA = new Image();
hiraA.alphabet = 'hiragana';
hiraA.src = 'a.png';
hiraA.answer = 'a';

var hiraI = new Image();
hiraI.alphabet = 'hiragana';
hiraI.src = 'i.png';
hiraI.answer = 'i';

var hiraU = new Image();
hiraU.alphabet = 'hiragana';
hiraU.src = 'u.png';
hiraU.answer = 'u';

var hiraE = new Image();
hiraE.alphabet = 'hiragana';
hiraE.src = 'e.png';
hiraE.answer = 'e';

var hiraO = new Image();
hiraO.alphabet = 'hiragana';
hiraO.src = 'o.png';
hiraO.answer = 'o';

var hiraKa = new Image();
hiraKa.alphabet = 'hiragana';
hiraKa.src = 'ka.png';
hiraKa.answer = 'ka';

// Arrays to store each of the characters as objects
var hiraArray = [hiraA, hiraI, hiraU, hiraE, hiraO, hiraKa];
var kataArray = [];

//Function pulling random image object from the array
function imgRandom(imgArr) {
		        return imgArr[Math.floor(Math.random() * imgArr.length)];
}

//Assign said image object to randomHira variable
var randomHira = imgRandom(hiraArray);
var randomKata = imgRandom(kataArray);

//Send the image to the div with kanaLocation id
document.getElementById('hiraLocation').appendChild(randomHira);
document.getElementById('kanaLocation').appendChild(randomKata);

//Create the variable which will be used to append text validating user's answer, and a variable for the form it will be appended to
// var validation = document.getElementById('validity');
var form = document.getElementById('form1');

//Check whether User input is correct, formInput() is called when the user clicks the button
function hiraFormInput() {
  if (document.getElementById('input').value.toLowerCase() === randomHira.answer) {
    // if (validation) {
    //   form.removeChild(validation);
    // }
    document.getElementById('validity').src = 'correct.png';
    // form.appendChild(validation);
  } else {
    if (validation) {
      form.removeChild(validation);
    }
    validation.textContent = 'Try Again!';
    form.appendChild(validation);
  }
}

function kataFormInput() {
  if (document.getElementById('input').value.toLowerCase() === randomKata.answer) {
    if (validation) {
      form.removeChild(validation);
    }
    validation.textContent = 'Correct!';
    form.appendChild(validation);
  } else {
    if (validation) {
      form.removeChild(validation);
    }
    validation.textContent = 'Try Again!';
    form.appendChild(validation);
  }
}

form.addEventListener('submit', function (event) {
  if (event.target.document.documentElement = 'hiragana-flash.html') {
    hiraFormInput();
  } else {
    kataFormInput();
  }
});