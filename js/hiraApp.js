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

// var hiraA =
new Img('a', 'hiraimgs/a.png', 'a');
// hiraA.src = 'hiraimgs/a.png';
// hiraA.answer = 'a';
// var hiraI =
new Img('i', 'hiraimgs/i.png', 'i');
// hiraI.src = 'hiraimgs/i.png';
// hiraI.answer = 'i';
// var hiraU =
new Img('u', 'hiraimgs/u.png', 'u');
// hiraU.src = 'hiraimgs/u.png';
// hiraU.answer = 'u';
// var hiraE =
new Img('e', 'hiraimgs/e.png', 'e');
// hiraE.src = 'hiraimgs/e.png';
// hiraE.answer = 'e';
// var hiraO =
new Img('o', 'hiraimgs/o.png', 'o');
// hiraO.src = 'hiraimgs/o.png';
// hiraO.answer = 'o';
// var hiraKa = new Img();
// hiraKa.src = 'hiraimgs/ka.png';
// hiraKa.answer = 'ka';
// var hiraKi = new Img();
// hiraKi.src = 'hiraimgs/ki.png';
// hiraKi.answer = 'ki';
// var hiraKu = new Img();
// hiraKu.src = 'hiraimgs/ku.png';
// hiraKu.answer = 'ku';
// var hiraKe = new Img();
// hiraKe.src = 'hiraimgs/ke.png';
// hiraKe.answer = 'ke';
// var hiraKo = new Img();
// hiraKo.src = 'hiraimgs/ko.png';
// hiraKo.answer = 'ko';
// var hiraSa = new Img();
// hiraSa.src = 'hiraimgs/sa.png';
// hiraSa.answer = 'sa';
// var hiraShi = new Img();
// hiraShi.src = 'hiraimgs/shi.png';
// hiraShi.answer = 'shi';
// var hiraSu = new Img();
// hiraSu.src = 'hiraimgs/su.png';
// hiraSu.answer = 'su';
// var hiraSe = new Img();
// hiraSe.src = 'hiraimgs/se.png';
// hiraSe.answer = 'se';
// var hiraSo = new Img();
// hiraSo.src = 'hiraimgs/so.png';
// hiraSo.answer = 'so';
// var hiraTa = new Img();
// hiraTa.src = 'hiraimgs/ta.png';
// hiraTa.answer = 'ta';
// var hiraChi = new Img();
// hiraChi.src = 'hiraimgs/chi.png';
// hiraChi.answer = 'chi';
// var hiraTsu = new Img();
// hiraTsu.src = 'hiraimgs/tsu.png';
// hiraTsu.answer = 'tsu';
// var hiraTe = new Img();
// hiraTe.src = 'hiraimgs/te.png';
// hiraTe.answer = 'te';
// var hiraTo = new Img();
// hiraTo.src = 'hiraimgs/to.png';
// hiraTo.answer = 'to';
// var hiraNa = new Img();
// hiraNa.src = 'hiraimgs/na.png';
// hiraNa.answer = 'na';
// var hiraNi = new Img();
// hiraNi.src = 'hiraimgs/ni.png';
// hiraNi.answer = 'ni';
// var hiraNu = new Img();
// hiraNu.src = 'hiraimgs/nu.png';
// hiraNu.answer = 'nu';
// var hiraNe = new Img();
// hiraNe.src = 'hiraimgs/ne.png';
// hiraNe.answer = 'ne';
// var hiraNo = new Img();
// hiraNo.src = 'hiraimgs/no.png';
// hiraNo.answer = 'no';
// var hiraHa = new Img();
// hiraHa.src = 'hiraimgs/ha.png';
// hiraHa.answer = 'ha';
// var hiraHi = new Img();
// hiraHi.src = 'hiraimgs/hi.png';
// hiraHi.answer = 'hi';
// var hiraFu = new Img();
// hiraFu.src = 'hiraimgs/fu.png';
// hiraFu.answer = ['fu', 'hu'];
// var hiraHe = new Img();
// hiraHe.src = 'hiraimgs/he.png';
// hiraHe.answer = 'he';
// var hiraHo = new Img();
// hiraHo.src = 'hiraimgs/ho.png';
// hiraHo.answer = 'ho';
// var hiraMa = new Img();
// hiraMa.src = 'hiraimgs/ma.png';
// hiraMa.answer = 'ma';
// var hiraMi = new Img();
// hiraMi.src = 'hiraimgs/mi.png';
// hiraMi.answer = 'mi';
// var hiraMu = new Img();
// hiraMu.src = 'hiraimgs/mu.png';
// hiraMu.answer = 'mu';
// var hiraMe = new Img();
// hiraMe.src = 'hiraimgs/me.png';
// hiraMe.answer = 'me';
// var hiraMo = new Img();
// hiraMo.src = 'hiraimgs/mo.png';
// hiraMo.answer = 'mo';
// var hiraYa = new Img();
// hiraYa.src = 'hiraimgs/ya.png';
// hiraYa.answer = 'ya';
// var hiraYu = new Img();
// hiraYu.src = 'hiraimgs/yu.png';
// hiraYu.answer = 'yu';
// var hiraYo = new Img();
// hiraYo.src = 'hiraimgs/yo.png';
// hiraYo.answer = 'yo';
// var hiraRa = new Img();
// hiraRa.src = 'hiraimgs/ra.png';
// hiraRa.answer = 'ra';
// var hiraRi = new Img();
// hiraRi.src = 'hiraimgs/ri.png';
// hiraRi.answer = 'ri';
// var hiraRu = new Img();
// hiraRu.src = 'hiraimgs/ru.png';
// hiraRu.answer = 'ru';
// var hiraRe = new Img();
// hiraRe.src = 'hiraimgs/re.png';
// hiraRe.answer = 're';
// var hiraRo = new Img();
// hiraRo.src = 'hiraimgs/ro.png';
// hiraRo.answer = 'ro';
// var hiraWa = new Img();
// hiraWa.src = 'hiraimgs/wa.png';
// hiraWa.answer = 'wa';
// var hiraN = new Img();
// hiraN.src = 'hiraimgs/n.png';
// hiraN.answer = 'n';

// var hiraArray = [hiraA, hiraI, hiraU, hiraE, hiraO, hiraKa, hiraKi, hiraKu, hiraKe, hiraKo, hiraSa, hiraShi, hiraSu, hiraSe, hiraSo, hiraTa, hiraChi, hiraTsu, hiraTe, hiraTo, hiraNa, hiraNi, hiraNu, hiraNe, hiraNo, hiraHa, hiraHi, hiraFu, hiraHe, hiraHo, hiraMa, hiraMi, hiraMu, hiraMe, hiraMo, hiraYa, hiraYu, hiraYo, hiraRa, hiraRi, hiraRu, hiraRe, hiraRo, hiraWa, hiraN];


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
  // if (randomHira === hiraFu) {

  //   if (document.getElementById('input').value.toLowerCase() !== randomHira.answer[0] && document.getElementById('input').value.toLowerCase() !== randomHira.answer[1]) {
  //     validator = cross;
  //     document.getElementById('checklocation').appendChild(validator);
  //     note.setAttribute('id', 'wrongP');
  //     note.textContent = 'The correct romanji could have been fu or hu.';
  //     document.getElementById('validationSection').appendChild(note);
  //     image();
  //   } else if(document.getElementById('input').value.toLowerCase() === randomHira.answer[0] || document.getElementById('input').value.toLowerCase() === randomHira.answer[1]) {
  //     validator = check;
  //     document.getElementById('checklocation').appendChild(validator);
  //     note.setAttribute('id', 'rightP');
  //     note.textContent = 'Correct! The correct romanji could have been fu or hu.';
  //     document.getElementById('validationSection').appendChild(note);
  //     image();
  //   }

  // } else {

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
  // }
}

image();