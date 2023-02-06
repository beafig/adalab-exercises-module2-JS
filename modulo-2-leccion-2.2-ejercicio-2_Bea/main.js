'use strict';

// Crea un programa que nos diga cuántas horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, este código debería mostrar un mensaje con el número 525600.

const titleHours = document.querySelector('.title')
const age = document.querySelector('.age').value
titleHours.innerHTML = titleHours.innerHTML + ' ' + (age * 365 * 24) + ' ' + 'horas'

const titleMinuts = document.querySelector('.title2')
titleMinuts.innerHTML = titleMinuts.innerHTML + ' ' + (age * 365 * 24 * 60) + ' ' + 'minutos'

const titleSegs = document.querySelector('.title3')
titleSegs.innerHTML = titleSegs.innerHTML + ' ' + (age * 365 * 24 * 60 * 60) + ' ' + 'segundos'

console.log(age)
