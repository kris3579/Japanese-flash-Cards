'use strict';

var kataArray = [];

function Img(name, src, answer) {
  this.name = name;
  this.src = src;
  this.answer = answer;

  kataArray.push(this);
}

var check = new Image();
check.src = 'assets/check.png';

var cross = new Image();
cross.src = 'assets/cross.png';

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


// Function pulling random image object from the array
function imgRandom(imgArr) {
  return imgArr[Math.floor(Math.random() * imgArr.length)];
}


// Assign said image object to randomKata variable
var randomKata = imgRandom(kataArray);
// Create a div and set id of kataLocation to append the image to later
var locationDiv = document.createElement('div');
locationDiv.setAttribute('id', 'kataLocation');
var characterImage = document.createElement('img');


// This function replaces the flash card, called once immediatly then every time the form is submited
function image() {
  // Set variable as the div in order to check if the div is there
  var location = document.getElementById('kataLocation');
  // If the div IS there
  if (location) {
    // Remove the current character image from the div
    // document.getElementById('kataLocation').removeChild(randomKata);
    // Remove the div from the section
    document.getElementById('imgSection').removeChild(characterImage);
  }
  // Append the kataLocation div to the section
  // Get a random character image
  randomKata = imgRandom(kataArray);
  characterImage.src = randomKata.src;
  document.getElementById('imgSection').appendChild(characterImage);
  // Append image to the div with kataLocation id
  // document.getElementById('kataLocation').appendChild(randomKata);
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
  if (randomKata.name === 'fu') {

    if (document.getElementById('input').value.toLowerCase() !== randomKata.answer[0] && document.getElementById('input').value.toLowerCase() !== randomKata.answer[1]) {
      validator = cross;
      document.getElementById('checklocation').appendChild(validator);
      note.setAttribute('id', 'wrongP');
      note.textContent = 'The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      image();
    } else if (document.getElementById('input').value.toLowerCase() === randomKata.answer[0] || document.getElementById('input').value.toLowerCase() === randomKata.answer[1]) {
      validator = check;
      document.getElementById('checklocation').appendChild(validator);
      note.setAttribute('id', 'rightP');
      note.textContent = 'Correct! The correct romanji could have been fu or hu.';
      document.getElementById('validationSection').appendChild(note);
      image();
    }

  } else {

    if (document.getElementById('input').value.toLowerCase() === randomKata.answer) {
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
      note.textContent = 'The correct romanji was ' + randomKata.answer + '.';
      document.getElementById('validationSection').appendChild(note);
      image();
    }
  }
}

image();