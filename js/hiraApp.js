'use strict';

var hiraArray = [];

function Img(name, src, answer) {
  this.name = name;
  this.src = src;
  this.answer = answer;

  hiraArray.push(this);
}

var check = new Image();
check.src = 'assets/check.png';

var cross = new Image();
cross.src = 'assets/cross.png';

new Img('a', 'hiraimgs/a.png', 'a');
new Img('i', 'hiraimgs/i.png', 'i');
new Img('u', 'hiraimgs/u.png', 'u');
new Img('e', 'hiraimgs/e.png', 'e');
new Img('o', 'hiraimgs/o.png', 'o');
new Img('ka', 'hiraimgs/ka.png', 'ka');
new Img('ki', 'hiraimgs/ki.png', 'ki');
new Img('ku', 'hiraimgs/ku.png', 'ku');
new Img('ke', 'hiraimgs/ke.png', 'ke');
new Img('ko', 'hiraimgs/ko.png', 'ko');
new Img('sa', 'hiraimgs/sa.png', 'sa');
new Img('shi', 'hiraimgs/shi.png', 'shi');
new Img('su', 'hiraimgs/su.png', 'su');
new Img('se', 'hiraimgs/se.png', 'se');
new Img('so', 'hiraimgs/so.png', 'so');
new Img('ta', 'hiraimgs/ta.png', 'ta');
new Img('chi', 'hiraimgs/chi.png', 'chi');
new Img('tsu', 'hiraimgs/tsu.png', 'tsu');
new Img('te', 'hiraimgs/te.png', 'te');
new Img('to', 'hiraimgs/to.png', 'to');
new Img('na', 'hiraimgs/na.png', 'na');
new Img('ni', 'hiraimgs/ni.png', 'ni');
new Img('nu', 'hiraimgs/nu.png', 'nu');
new Img('ne', 'hiraimgs/ne.png', 'ne');
new Img('no', 'hiraimgs/no.png', 'no');
new Img('ha', 'hiraimgs/ha.png', 'ha');
new Img('hi', 'hiraimgs/hi.png', 'hi');
new Img('fu', 'hiraimgs/fu.png', ['fu', 'hu']);
new Img('he', 'hiraimgs/he.png', 'he');
new Img('ho', 'hiraimgs/ho.png', 'ho');
new Img('ma', 'hiraimgs/ma.png', 'ma');
new Img('mi', 'hiraimgs/mi.png', 'mi');
new Img('mu', 'hiraimgs/mu.png', 'mu');
new Img('me', 'hiraimgs/me.png', 'me');
new Img('mo', 'hiraimgs/mo.png', 'mo');
new Img('ya', 'hiraimgs/ya.png', 'ya');
new Img('yu', 'hiraimgs/yu.png', 'yu');
new Img('yo', 'hiraimgs/yo.png', 'yo');
new Img('ra', 'hiraimgs/ra.png', 'ra');
new Img('ri', 'hiraimgs/ri.png', 'ri');
new Img('ru', 'hiraimgs/ru.png', 'ru');
new Img('re', 'hiraimgs/re.png', 're');
new Img('ro', 'hiraimgs/ro.png', 'ro');
new Img('wa', 'hiraimgs/wa.png', 'wa');
new Img('n', 'hiraimgs/n.png', 'n');

// Function pulling random image object from the array
function imgRandom(imgArr) {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}

// Assign said image object to randomHira variable
var randomHira = imgRandom(hiraArray);
// Create a div and set id of hira location to append the image to later
var locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'hiraLocation');
var characterImage = document.createElement('img');

// This function replaces the flash card, called once immediatly then every time the form is submitted
function image() {
  // Set variable as the div in order to check if the div is there
  var location = document.getElementById('hiraLocation');
  // If the div IS there
  if (location) {
    // Remove the current character image from the div
    document.getElementById('hiraLocation').removeChild(characterImage);
    // Remove the div from the section
    document.getElementById('imgSection').removeChild(location);
  }
  // Append the hiraLocation div to the section
  document.getElementById('imgSection').appendChild(locationDiv);
  // Get a random character image
  randomHira = imgRandom(hiraArray);
  characterImage.src = randomHira.src;
  // Append image to the div with hiraLocation id
  document.getElementById('hiraLocation').appendChild(characterImage);
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
    if (note) {
      document.getElementById('validationSection').removeChild(note);
    }
    if (validator) {
      document.getElementById('checklocation').removeChild(validator);
    }
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

//This function appends an image and a note validation the User's answer
function append() {
  if (randomHira.name === 'fu') {

    if (document.getElementById('input').value.toLowerCase() !== randomHira.answer[0] && document.getElementById('input').value.toLowerCase() !== randomHira.answer[1]) {
      validator = cross;
      document.getElementById('checklocation').appendChild(validator);
      note.setAttribute('id', 'wrongP');
      note.textContent = 'The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      image();
    } else if (document.getElementById('input').value.toLowerCase() === randomHira.answer[0] || document.getElementById('input').value.toLowerCase() === randomHira.answer[1]) {
      validator = check;
      document.getElementById('checklocation').appendChild(validator);
      note.setAttribute('id', 'rightP');
      note.textContent = 'Correct! The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      image();
    }

  } else {

    if (document.getElementById('input').value.toLowerCase() === randomHira.answer) {
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
      note.textContent = 'The correct romanji was ' + randomHira.answer + '.';
      document.getElementById('validationSection').appendChild(note);
      image();
    }
  }
}

image();