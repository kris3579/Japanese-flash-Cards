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
// Create a div and set id of hira location to append the image to later
var locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'kataLocation');

// This function replaces the flash card, called once immediatly then every time the form is submited
function image() {
  // Set variable as the div in order to check if the div is there
  var location = document.getElementById('kataLocation');
  // If the div IS there
  if (location) {
    // Remove the current character image from the div
    document.getElementById('kataLocation').removeChild(randomKata);
    // Remove the div from the section
    document.getElementById('imgSection').removeChild(location);
  }
  // Append the kataLocation div to the section
  document.getElementById('imgSection').appendChild(locationDiv);
  // Get a random character image
  randomKata = imgRandom(kataArray);
  // Append image to the div with kataLocation id
  document.getElementById('kataLocation').appendChild(randomKata);
  // Clear the text entry box of the User's previous answer
  document.forms['form1'].reset();
}

// Declare validator variable for global use, it will be assigned the image used to validate the User's answer
var validator;
// Create a new section for content that validates the User's answer
var validationSection = document.createElement('section');
validationSection.setAttribute('id', 'validationSection');
// Create an aside for the validator image
var validationAside = document.createElement('aside');
validationAside.setAttribute('id', 'checklocation');

// This function gets rid of the validation section if it exists, and remakes a new one
// This function gets called upon the submit of the button, and starts the chain of functions providing the full answer
function nukeMakeSection() {
  // Create variable to reference the new section
  var validation = document.getElementById('validationSection');
  // If the section IS there
  if (validation) {
    // Remove the section from the main body tag
    document.getElementById('main').removeChild(validationSection);
  }
  // Append the section to the main body tag
  document.getElementById('main').appendChild(validationSection);
  // Append the aside fot the validator image
  document.getElementById('validationSection').appendChild(validationAside);
  // Run the append funtion
  append();
}

// Sets variable to make a note validating the User's answer
var note = document.createElement('p');
note.textContent = 'The correct romanji was ' + randomKata.answer + '.';

//This function appends an image and a note validation the User's answer
function append() {
  var wrong = document.getElementById('wrongP');
  if (wrong) {
    note.textContent = 'The correct romanji was ' + randomKata.answer + '.';
    document.getElementById('validationSection').removeChild(wrong);
  }
  if (randomKata.answer === 'fu' && document.getElementById('input').value.toLowerCase() !== randomKata.answer) {
    validator = cross;
    document.getElementById('checklocation').appendChild(validator);
    note.setAttribute('id', 'wrongP');
    note.textContent = 'The correct romanji could have been fu or hu.';
    document.getElementById('validationSection').appendChild(note);
    image();
  } else if (randomKata.answer === 'fu' && document.getElementById('input').value.toLowerCase() === randomKata.answer) {
    validator = check;
    document.getElementById('checklocation').appendChild(validator);
    note.setAttribute('id', 'rightP');
    note.textContent = 'Correct! The correct romanji could have been fu or hu.';
    document.getElementById('validationSection').appendChild(note);
    image();
  } else if (document.getElementById('input').value.toLowerCase() === randomKata.answer) {
    validator = check;
    document.getElementById('checklocation').appendChild(validator);
    note.setAttribute('id', 'rightP');
    note.textContent = 'Correct!';
    document.getElementById('validationSection').appendChild(note);
    image();
  } else {
    validator = cross;
    document.getElementById('checklocation').appendChild(validator);
    note.setAttribute('id', 'wrongP');
    document.getElementById('validationSection').appendChild(note);
    image();
  }
}

image();