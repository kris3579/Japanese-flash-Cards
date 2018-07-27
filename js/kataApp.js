'use strict';

// Declare an array for all objects, or "characters" to push themselves into
var kataArray = [];

// Declare an array for previously answered pictures to reference
var noRepeat = [];

var rightCount = 0;
var wrongCount = 0;

// Contructor for "character" objects, including a name to be referenced for the validation comment,
// a src for the relavent image, and a answer to check the form input against.
function Img(name, src, answer) {
  this.name = name;
  this.src = src;
  this.answer = answer;

  // All characters push themselves into the array
  kataArray.push(this);
}

// Images for validation of the User's answer
var check = new Image();
check.src = 'assets/check.png';

var cross = new Image();
cross.src = 'assets/cross.png';

var wrongCountImg = new Image();
wrongCountImg.src = 'assets/cross.png';

var rightCountImg = new Image();
rightCountImg.src = 'assets/check.png';

// Declaration of "character" objects
new Img('a', 'kataimgs/a.png', 'a');
new Img('i', 'kataimgs/i.png', 'i');
new Img('u', 'kataimgs/u.png', 'u');
new Img('e', 'kataimgs/e.png', 'e');
new Img('o', 'kataimgs/o.png', 'o');
new Img('ka', 'kataimgs/ka.png', 'ka');
new Img('ki', 'kataimgs/ki.png', 'ki');
new Img('ku', 'kataimgs/ku.png', 'ku');
new Img('ke', 'kataimgs/ke.png', 'ke');
new Img('ko', 'kataimgs/ko.png', 'ko');
new Img('sa', 'kataimgs/sa.png', 'sa');
new Img('shi', 'kataimgs/shi.png', 'shi');
new Img('su', 'kataimgs/su.png', 'su');
new Img('se', 'kataimgs/se.png', 'se');
new Img('so', 'kataimgs/so.png', 'so');
new Img('ta', 'kataimgs/ta.png', 'ta');
new Img('chi', 'kataimgs/chi.png', 'chi');
new Img('tsu', 'kataimgs/tsu.png', 'tsu');
new Img('te', 'kataimgs/te.png', 'te');
new Img('to', 'kataimgs/to.png', 'to');
new Img('na', 'kataimgs/na.png', 'na');
new Img('ni', 'kataimgs/ni.png', 'ni');
new Img('nu', 'kataimgs/nu.png', 'nu');
new Img('ne', 'kataimgs/ne.png', 'ne');
new Img('no', 'kataimgs/no.png', 'no');
new Img('ha', 'kataimgs/ha.png', 'ha');
new Img('hi', 'kataimgs/hi.png', 'hi');
new Img('fu', 'kataimgs/fu.png', ['fu', 'hu']);
new Img('he', 'kataimgs/he.png', 'he');
new Img('ho', 'kataimgs/ho.png', 'ho');
new Img('ma', 'kataimgs/ma.png', 'ma');
new Img('mi', 'kataimgs/mi.png', 'mi');
new Img('mu', 'kataimgs/mu.png', 'mu');
new Img('me', 'kataimgs/me.png', 'me');
new Img('mo', 'kataimgs/mo.png', 'mo');
new Img('ya', 'kataimgs/ya.png', 'ya');
new Img('yu', 'kataimgs/yu.png', 'yu');
new Img('yo', 'kataimgs/yo.png', 'yo');
new Img('ra', 'kataimgs/ra.png', 'ra');
new Img('ri', 'kataimgs/ri.png', 'ri');
new Img('ru', 'kataimgs/ru.png', 'ru');
new Img('re', 'kataimgs/re.png', 're');
new Img('ro', 'kataimgs/ro.png', 'ro');
new Img('wa', 'kataimgs/wa.png', 'wa');
new Img('n', 'kataimgs/n.png', 'n');
new Img('ga', 'kataimgs/ga.png', 'ga');
new Img('gi', 'kataimgs/gi.png', 'gi');
new Img('gu', 'kataimgs/gu.png', 'gu');
new Img('ge', 'kataimgs/ge.png', 'ge');
new Img('go', 'kataimgs/go.png', 'go');
new Img('za', 'kataimgs/za.png', 'za');
new Img('ji', 'kataimgs/shi-ji.png', 'ji');
new Img('zu', 'kataimgs/su-zu.png', 'zu');
new Img('ze', 'kataimgs/ze.png', 'ze');
new Img('zo', 'kataimgs/zo.png', 'zo');
new Img('da', 'kataimgs/da.png', 'da');
new Img('ji', 'kataimgs/chi-ji.png', 'ji');
new Img('zu', 'kataimgs/tsu-zu.png', 'zu');
new Img('de', 'kataimgs/de.png', 'de');
new Img('do', 'kataimgs/do.png', 'do');
new Img('ba', 'kataimgs/ba.png', 'ba');
new Img('bi', 'kataimgs/bi.png', 'bi');
new Img('bu', 'kataimgs/bu.png', 'bu');
new Img('be', 'kataimgs/be.png', 'be');
new Img('bo', 'kataimgs/bo.png', 'bo');
new Img('pa', 'kataimgs/pa.png', 'pa');
new Img('pi', 'kataimgs/pi.png', 'pi');
new Img('pu', 'kataimgs/pu.png', 'pu');
new Img('pe', 'kataimgs/pe.png', 'pe');
new Img('po', 'kataimgs/po.png', 'po');


// Function picking random "character" object from the array
function imgRandom(imgArr) {
  checkNoRepeat();
  var random = imgArr[Math.floor(Math.random() * imgArr.length)];
  while (noRepeat.includes(random.name)) {
    random = imgArr[Math.floor(Math.random() * imgArr.length)];
  }
  return random;
}


function checkNoRepeat() {
  if (noRepeat.length = 26) {
    noRepeat.shift();
  }
}


// Assign said "character" object to randomKata variable
var randomKata = imgRandom(kataArray);
// Create a img and set id of charImage to find later
var characterImage = document.createElement('img');
characterImage.setAttribute('id', 'charImage');


// This function replaces the flash card, called once immediatly then every time the form is submited
function image() {
  // Set variable as the div in order to check if the div is there
  var location = document.getElementById('imgSection');
  // If an image IS there
  if (document.getElementById('charImage')) {
    // Remove the current character image from the div
    location.removeChild(characterImage);
  }
  // Get a random character image
  randomKata = imgRandom(kataArray);
  // Set new img element's src as the "character" image src
  characterImage.src = randomKata.src;
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

    // Remove the section from the footer body tag
    document.getElementById('footer').removeChild(validationSection);
  }
  // Append the section to the footer body tag
  document.getElementById('footer').appendChild(validationSection);
  // Append the aside fot the validator image
  document.getElementById('validationSection').appendChild(validationAside);
  // Run the append funtion
  append();
  nukeMakeCountAside();
}


var countAside = document.createElement('aside');
countAside.setAttribute('id', 'countAside');
var appendRightCount = document.createElement('p');
appendRightCount.setAttribute('class', 'rightP');
var appendWrongCount = document.createElement('p');
appendWrongCount.setAttribute('class', 'wrongP');

function nukeMakeCountAside() {
  if (ranOnce > 0) {
    countAside.removeChild(appendWrongCount);
    countAside.removeChild(wrongCountImg);
    countAside.removeChild(appendRightCount);
    countAside.removeChild(rightCountImg);
    document.getElementById('footer').removeChild(countAside);
  }
  var ranOnce;

  countAside.appendChild(rightCountImg);
  appendRightCount.textContent = rightCount;
  countAside.appendChild(appendRightCount);
  countAside.appendChild(wrongCountImg);
  appendWrongCount.textContent = wrongCount;
  countAside.appendChild(appendWrongCount);
  document.getElementById('footer').appendChild(countAside);
}


// Sets variable to make a note validating the User's answer
var note = document.createElement('p');


//This function appends an image and a note validation the User's answer
function append() {
  // If the character IS "fu"
  if (randomKata.name === 'fu') {

    // If the User's input does not equal either "fu" or "hu"
    if (document.getElementById('input').value.toLowerCase() !== randomKata.answer[0] && document.getElementById('input').value.toLowerCase() !== randomKata.answer[1]) {
      wrongCount++;
      // Assign the validator to a negative image and append it to the validation section
      validator = cross;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's class to wrongP to style it as negative validation
      // fill the note with negative validation text, and append it to the validation section.
      note.setAttribute('class', 'wrongP');
      note.textContent = 'The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      // Push name of randomKata into noRepeat array
      noRepeat.push(randomKata.name);
      // Run the image funtion
      image();

      // Else if the User's input DOES equal either "fu" OR "hu"
    } else if (document.getElementById('input').value.toLowerCase() === randomKata.answer[0] || document.getElementById('input').value.toLowerCase() === randomKata.answer[1]) {
      rightCount++;
      // Assign the validator to a positive image and append it to the validation section
      validator = check;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's class to wrongP to style it as positive validation
      // fill the note with positive validation text, and append it to the validation section.
      note.setAttribute('class', 'rightP');
      note.textContent = 'Correct! The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      // Push name of randomKata into noRepeat array
      noRepeat.push(randomKata.name);
      // Run the image funtion
      image();
    }

  // Else if the character is NOT "fu"
  } else {

    //If the User's input turned into lower case Does equal the "character's" answer
    if (document.getElementById('input').value.toLowerCase() === randomKata.answer) {
      rightCount++;
      // Assign the validator to a positive image and append it to the validation section
      validator = check;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's class to wrongP to style it as positive validation
      // fill the note with positive validation text, and append it to the validation section.
      note.setAttribute('class', 'rightP');
      note.textContent = 'Correct!';
      document.getElementById('validationSection').appendChild(note);
      // Push name of randomKata into noRepeat array
      noRepeat.push(randomKata.name);
      // Run the image funtion
      image();

    // Else if the User's input turned into lower case does NOT equal the "character's" answer
    } else {
      wrongCount++;
      // Assign the validator to a positive image and append it to the validation section
      validator = cross;
      document.getElementById('checklocation').appendChild(validator);
      // Set the note's class to wrongP to style it as negative validation
      // fill the note with negative validation text, and append it to the validation section.
      note.setAttribute('class', 'wrongP');
      note.textContent = 'The correct romanji was ' + randomKata.answer + '.';
      document.getElementById('validationSection').appendChild(note);
      // Push name of randomKata into noRepeat array
      noRepeat.push(randomKata.name);
      // Run the image funtion
      image();
    }
  }
}

image();