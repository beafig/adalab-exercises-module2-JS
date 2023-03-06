'use strict';

const btn = document.querySelector('.js-btn');
const faces = document.querySelector('.js-faces');
const title = document.querySelector('.js-title');
const main = document.querySelector('.js-main');

function updateFace() {
  if (faces.value === ':)') {
    title.innerHTML = ':)'
  } else if (faces.value === ':(') {
    title.innerHTML = ':('
  }
}
function setRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function setBackgroundColor(number) {
  setRandomNumber(100)
  console.log(number)
  if (number % 2 === 0) {
    main.classList.add('coloryellow')
    main.classList.remove('colororange')
  } else if (number % 2 !== 0) {
    main.classList.remove('coloryellow')
    main.classList.add('colororange')
  }
}

function handleClick(event) {
  event.preventDefault()
  updateFace()
  setBackgroundColor(setRandomNumber(100))

}

btn.addEventListener('click', handleClick)