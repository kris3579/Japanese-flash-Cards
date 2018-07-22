'use strict';

// function Image(name, src, answer) {
//   this.name = name;
//   this.src = src;
//   this.answer = answer;

//   hiraArray.push(this);
// }

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
var hiraKi = new Image();
hiraKi.src = 'hiraimgs/ki.png';
hiraKi.answer = 'ki';
var hiraKu = new Image();
hiraKu.src = 'hiraimgs/ku.png';
hiraKu.answer = 'ku';
var hiraKe = new Image();
hiraKe.src = 'hiraimgs/ke.png';
hiraKe.answer = 'ke';
var hiraKo = new Image();
hiraKo.src = 'hiraimgs/ko.png';
hiraKo.answer = 'ko';
var hiraSa = new Image();
hiraSa.src = 'hiraimgs/sa.png';
hiraSa.answer = 'sa';
var hiraShi = new Image();
hiraShi.src = 'hiraimgs/shi.png';
hiraShi.answer = 'shi';
var hiraSu = new Image();
hiraSu.src = 'hiraimgs/su.png';
hiraSu.answer = 'su';
var hiraSe = new Image();
hiraSe.src = 'hiraimgs/se.png';
hiraSe.answer = 'se';
var hiraSo = new Image();
hiraSo.src = 'hiraimgs/so.png';
hiraSo.answer = 'so';
var hiraTa = new Image();
hiraTa.src = 'hiraimgs/ta.png';
hiraTa.answer = 'ta';
var hiraChi = new Image();
hiraChi.src = 'hiraimgs/chi.png';
hiraChi.answer = 'chi';
var hiraTsu = new Image();
hiraTsu.src = 'hiraimgs/tsu.png';
hiraTsu.answer = 'tsu';
var hiraTe = new Image();
hiraTe.src = 'hiraimgs/te.png';
hiraTe.answer = 'te';
var hiraTo = new Image();
hiraTo.src = 'hiraimgs/to.png';
hiraTo.answer = 'to';
var hiraNa = new Image();
hiraNa.src = 'hiraimgs/na.png';
hiraNa.answer = 'na';
var hiraNi = new Image();
hiraNi.src = 'hiraimgs/ni.png';
hiraNi.answer = 'ni';
var hiraNu = new Image();
hiraNu.src = 'hiraimgs/nu.png';
hiraNu.answer = 'nu';
var hiraNe = new Image();
hiraNe.src = 'hiraimgs/ne.png';
hiraNe.answer = 'ne';
var hiraNo = new Image();
hiraNo.src = 'hiraimgs/no.png';
hiraNo.answer = 'no';
var hiraHa = new Image();
hiraHa.src = 'hiraimgs/ha.png';
hiraHa.answer = 'ha';
var hiraHi = new Image();
hiraHi.src = 'hiraimgs/hi.png';
hiraHi.answer = 'hi';
var hiraFu = new Image();
hiraFu.src = 'hiraimgs/fu.png';
hiraFu.answer = 'fu' || 'hu';
var hiraHe = new Image();
hiraHe.src = 'hiraimgs/he.png';
hiraHe.answer = 'he';
var hiraHo = new Image();
hiraHo.src = 'hiraimgs/ho.png';
hiraHo.answer = 'ho';
var hiraMa = new Image();
hiraMa.src = 'hiraimgs/ma.png';
hiraMa.answer = 'ma';
var hiraMi = new Image();
hiraMi.src = 'hiraimgs/mi.png';
hiraMi.answer = 'mi';
var hiraMu = new Image();
hiraMu.src = 'hiraimgs/mu.png';
hiraMu.answer = 'mu';
var hiraMe = new Image();
hiraMe.src = 'hiraimgs/me.png';
hiraMe.answer = 'me';
var hiraMo = new Image();
hiraMo.src = 'hiraimgs/mo.png';
hiraMo.answer = 'mo';
var hiraYa = new Image();
hiraYa.src = 'hiraimgs/ya.png';
hiraYa.answer = 'ya';
var hiraYu = new Image();
hiraYu.src = 'hiraimgs/yu.png';
hiraYu.answer = 'yu';
var hiraYo = new Image();
hiraYo.src = 'hiraimgs/yo.png';
hiraYo.answer = 'yo';
var hiraRa = new Image();
hiraRa.src = 'hiraimgs/ra.png';
hiraRa.answer = 'ra';
var hiraRi = new Image();
hiraRi.src = 'hiraimgs/ri.png';
hiraRi.answer = 'ri';
var hiraRu = new Image();
hiraRu.src = 'hiraimgs/ru.png';
hiraRu.answer = 'ru';
var hiraRe = new Image();
hiraRe.src = 'hiraimgs/re.png';
hiraRe.answer = 're';
var hiraRo = new Image();
hiraRo.src = 'hiraimgs/ro.png';
hiraRo.answer = 'ro';
var hiraWa = new Image();
hiraWa.src = 'hiraimgs/wa.png';
hiraWa.answer = 'wa';
var hiraN = new Image();
hiraN.src = 'hiraimgs/n.png';
hiraN.answer = 'n';

var hiraArray = [hiraA, hiraI, hiraU, hiraE, hiraO, hiraKa, hiraKi, hiraKu, hiraKe, hiraKo, hiraSa, hiraShi, hiraSu, hiraSe, hiraSo, hiraTa, hiraChi, hiraTsu, hiraTe, hiraTo, hiraNa, hiraNi, hiraNu, hiraNe, hiraNo, hiraHa, hiraHi, hiraFu, hiraHe, hiraHo, hiraMa, hiraMi, hiraMu, hiraMe, hiraMo, hiraYa, hiraYu, hiraYo, hiraRa, hiraRi, hiraRu, hiraRe, hiraRo, hiraWa, hiraN];


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

var note = document.createElement('p');
note.textContent = 'The correct romanji was ' + randomHira.answer.bold() + '.';


function append() {
  // if (Make text.content reset and disapear)
  if  (randomHira.answer === 'fu' && document.getElementById('input').value.toLowerCase() !== randomHira.answer) {
    validator = cross;
    document.getElementById('validation').appendChild(validator);
    note.setAttribute('id', 'wrongP');
    note.textContent = 'The correct romanji could have been fu or hu.';
    document.getElementById('div').appendChild(note);
    image();
  } else if (randomHira.answer === 'fu' && document.getElementById('input').value.toLowerCase() === randomHira.answer) {
    validator = check;
    document.getElementById('validation').appendChild(validator);
    note.setAttribute('id', 'rightP');
    note.textContent = 'The correct romanji could have been fu or hu.';
    document.getElementById('div').appendChild(note);
    image();
  } else if (document.getElementById('input').value.toLowerCase() === randomHira.answer) {
    validator = check;
    document.getElementById('validation').appendChild(validator);
    image();
  } else {
    validator = cross;
    document.getElementById('validation').appendChild(validator);
    note.setAttribute('id', 'wrongP');
    document.getElementById('div').appendChild(note);
    image();
  }
}

image();