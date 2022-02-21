// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevenNewTab(e) {
  e.preventDefault();
  console.log(e.target);
}

HREF_LINK.addEventListener('click', prevenNewTab);

function preventCheck(e) {
  e.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', preventCheck);

function acceptOnlyA(e) {
  if (e.key !== 'a') {
    e.preventDefault();
    console.log(e.key);
  }
}

INPUT_TEXT.addEventListener('keypress', acceptOnlyA);