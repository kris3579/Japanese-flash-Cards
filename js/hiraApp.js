'use strict';

// Declare an array for all objects, or "characters" to push themselves into
var hiraArray = [];

// Contructor for "character" objects, including a name to be referenced for the validation comment,
// a src for the relavent image, and a answer to check the form input against.
function Img(name, src, answer) {
  this.name = name;
  this.src = src;
  this.answer = answer;

  // All characters push themselves into the array
  hiraArray.push(this);
}

// Images for validation of the User's answer
var check = new Image();
check.src = 'assets/check.png';

var cross = new Image();
cross.src = 'assets/cross.png';

// Declaration of "character" objects
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
new Img('ga', 'hiraimgs/ga.png', 'ga');
new Img('gi', 'hiraimgs/gi.png', 'gi');
new Img('gu', 'hiraimgs/gu.png', 'gu');
new Img('ge', 'hiraimgs/ge.png', 'ge');
new Img('go', 'hiraimgs/go.png', 'go');
new Img('za', 'hiraimgs/za.png', 'za');
new Img('ji', 'hiraimgs/shi-ji.png', 'ji');
new Img('zu', 'hiraimgs/su-zu.png', 'zu');
new Img('ze', 'hiraimgs/ze.png', 'ze');
new Img('zo', 'hiraimgs/zo.png', 'zo');
new Img('da', 'hiraimgs/da.png', 'da');
// new Img('ji', 'hiraimgs/chi-ji.png', 'ji');
new Img('zu', 'hiraimgs/tsu-zu.png', 'zu');
new Img('de', 'hiraimgs/de.png', 'de');
new Img('do', 'hiraimgs/do.png', 'do');
new Img('ba', 'hiraimgs/ba.png', 'ba');
new Img('bi', 'hiraimgs/bi.png', 'bi');
new Img('bu', 'hiraimgs/bu.png', 'bu');
new Img('be', 'hiraimgs/be.png', 'be');
new Img('bo', 'hiraimgs/bo.png', 'bo');
new Img('pa', 'hiraimgs/pa.png', 'pa');
new Img('pi', 'hiraimgs/pi.png', 'pi');
new Img('pu', 'hiraimgs/pu.png', 'pu');
new Img('pe', 'hiraimgs/pe.png', 'pe');
new Img('po', 'hiraimgs/po.png', 'po');


// Function picking random "character" object from the array
function imgRandom(imgArr) {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}


// Assign a "character" object to randomHira variable
var randomHira = imgRandom(hiraArray);
// Create a img and set id of charImage to find later
var characterImage = document.createElement('img');
characterImage.setAttribute('id', 'charImage');


// This function replaces the flash card, called once immediatly then every time the form is submitted
function image() {
  // Set variable as the div in order to check if the div is there
  var location = document.getElementById('imgSection');
  // If an image IS there
  if (document.getElementById('charImage')) {
    // Remove the current character image from the div
    location.removeChild(characterImage);
  }
  // Get a random character image
  randomHira = imgRandom(hiraArray);
  // Set new img element's src as the "character" image src
  characterImage.src = randomHira.src;
  // Append img to page
  location.appendChild(characterImage);
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

    // If the note IS there, remove it
    if (note) {
      document.getElementById('validationSection').removeChild(note);
    }

    // If the validator Is there, remove it
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
  // If the character IS "fu"
  if (randomHira.name === 'fu') {

    // If the User's input does not equal either "fu" or "hu"
    if (document.getElementById('input').value.toLowerCase() !== randomHira.answer[0] && document.getElementById('input').value.toLowerCase() !== randomHira.answer[1]) {
      // Assign the validator to a negative image and append it to the validation section
      validator = cross;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's id to wrongP to style it as negative validation
      // fill the note with negative validation text, and append it to the validation section.
      note.setAttribute('id', 'wrongP');
      note.textContent = 'The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      // Run the image funtion
      image();

      // Else if the User's input DOES equal either "fu" OR "hu"
    } else if (document.getElementById('input').value.toLowerCase() === randomHira.answer[0] || document.getElementById('input').value.toLowerCase() === randomHira.answer[1]) {
      // Assign the validator to a positive image and append it to the validation section
      validator = check;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's id to wrongP to style it as positive validation
      // fill the note with positive validation text, and append it to the validation section.
      note.setAttribute('id', 'rightP');
      note.textContent = 'Correct! The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      // Run the image funtion
      image();
    }

  // Else if the character is NOT "fu"
  } else {

    //If the User's input turned into lower case Does equal the "character's" answer
    if (document.getElementById('input').value.toLowerCase() === randomHira.answer) {
      // Assign the validator to a positive image and append it to the validation section
      validator = check;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's id to wrongP to style it as positive validation
      // fill the note with positive validation text, and append it to the validation section.
      note.setAttribute('id', 'rightP');
      note.textContent = 'Correct!';
      document.getElementById('validationSection').appendChild(note);
      // Run the image funtion
      image();

    // Else if the User's input turned into lower case does NOT equal the "character's" answer
    } else {
      // Assign the validator to a positive image and append it to the validation section
      validator = cross;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's id to wrongP to style it as negative validation
      // fill the note with negative validation text, and append it to the validation section.
      note.setAttribute('id', 'wrongP');
      note.textContent = 'The correct romanji was ' + randomHira.answer + '.';
      document.getElementById('validationSection').appendChild(note);
      // Run the image funtion
      image();
    }
  }
}

image();