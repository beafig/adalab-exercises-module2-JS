'use strict';

// Conversor de edad de perro a humano
// El primer año de un perro equivale a 15 años de humano
// El segundo año de un perro equivale a nueve años de humano
// A partir del tercero, cada año de perro equivale a 5 años de humano.

const firstAge = 15;
const secondAge = 9;
const thirdAge = 5;

const age = document.querySelector('.age').value;
console.log(age);

const text = document.querySelector('.text');
console.log(text);

if (age === '1') {
  text.innerHTML = `${text.innerHTML} ${firstAge} años.`
} else if (age === '2') {
  text.innerHTML = `${text.innerHTML} ${firstAge + secondAge} años.`
} else if (age > '2') {
  text.innerHTML = `${text.innerHTML} ${(firstAge + secondAge) + (thirdAge * (age - 2))} años.`
};