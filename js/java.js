// Id's vastleggen
var katKnop = document.querySelector('#kat');
var hondKnop = document.querySelector('#hond');
var latenWachtenKnop = document.querySelector('#btnKat1');
var voerenKnopKat = document.querySelector('#btnKat2');
var roepenKnop = document.querySelector('#btnHond1');

// wisselen van dier en uitvoeringen.
katKnop.addEventListener('click', () => {
  document.body.classList.add('kat');
  document.body.classList.remove('hond');
  document.body.classList.remove('katVoeren');
  document.body.classList.remove('katLatenWachten');
  document.body.classList.remove('btnHond1');
});

hondKnop.addEventListener('click', () => {
  document.body.classList.add('hond');
  document.body.classList.remove('kat');
  document.body.classList.remove('btnKat1');
  document.body.classList.remove('btnKat2');
  document.body.classList.remove('btnHond1');
});

latenWachtenKnop.addEventListener('click', () => {
  document.body.classList.add('btnKat1');
  document.body.classList.remove('kat');
  document.body.classList.remove('hond');
  document.body.classList.remove('btnKat2');
  document.body.classList.remove('btnHond1');
});

voerenKnopKat.addEventListener('click', () => {
  document.body.classList.add('btnKat2');
  document.body.classList.remove('kat');
  document.body.classList.remove('hond');
  document.body.classList.remove('btnKat1');
  document.body.classList.remove('btnHond1');
});

roepenKnop.addEventListener('click', () => {
  document.body.classList.add('btnHond1');
  document.body.classList.remove('kat');
  document.body.classList.remove('hond');
  document.body.classList.remove('btnKat1');
  document.body.classList.remove('btnKat2');
});


// Bronnen:
// https://html-shark.com/HTML/ShowHideSections.htm
// https://stackoverflow.com/questions/25028853/addeventlistener-two-functions

// Knoppen om de uitvoeringen te doen. Elk dier heeft zijn eigen uitvoering. De uitvoering switchen aan de hand van welke dier in beeld is.
function hideSection1() {
  var HideS1 = document.getElementById('section1');
  if (HideS1.style.display === '', 'none') {
    HideS1.style.display = 'none';
  } else {

  }
}

function showSection2() {
  var ShowS2 = document.getElementById('section2');
  if (ShowS2.style.display === '', 'none') {
    ShowS2.style.display = 'block';
  } else {

  }
}

function hideSection2() {
  var HideS2 = document.getElementById('section2');
  if (HideS2.style.display === '','none') {
    HideS2.style.display = 'none';
  } else {

  }
}

function showSection1() {
  var ShowS1 = document.getElementById('section1');
  if (ShowS1.style.display === '', 'none') {
    ShowS1.style.display = 'block';
  } else {

  }
}

//nog een event listener toegevoegd zodat het de hierboven genoemde functies kan uitvoeren.
katKnop.addEventListener('click', () => {
  hideSection2();
  showSection1();
});

hondKnop.addEventListener('click', () => {
  hideSection1();
  showSection2();
});


//bron:
//https://stackoverflow.com/questions/9186346/javascript-onclick-increment-number
//dit is voor de blijheid teller van de hond. hoe vaker je haar roept, hoevaker ze haar staart zwaait.
var SZH = document.getElementById("SZH");
var staartZwaaiHond;
var blijheidHond;

function ZHond() {
  staartZwaaiHond = parseInt(SZH.innerText);
  blijheidHond = staartZwaaiHond + 1;

  function tellerHond() {
    value = blijheidHond++;
    SZH.innerText = value;
  }

  roepenKnop.onclick = tellerHond;
}

window.onload = ZHond;
