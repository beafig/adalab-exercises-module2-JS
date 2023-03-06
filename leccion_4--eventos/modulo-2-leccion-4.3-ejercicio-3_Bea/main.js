'use strict';

//Vamos a partir de un HTML con un botón 'Empezar'. Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const btn = document.querySelector('.js-btn')
const list = document.querySelector('.js-list')
const text = document.querySelector('.text')

btn.addEventListener('click', () => {
  list.innerHTML = `<li id="1">${inception}</li>`
  list.innerHTML += `<li id="2">${theButterFlyEffect}</li>`
  list.innerHTML += `<li id="3">${eternalSunshineOfTheSM}</li>`
  list.innerHTML += `<li id="4">${blueVelvet}</li>`
  list.innerHTML += `<li id="5">${split}</li>`
})

//Después vamos a escuchar eventos sobre cada elemento de la lista, de forma que al hacer click sobre el nombre de una película aparezca el nombre de esa película.

list.addEventListener('mouseover', (event) => {
  const target = event.target.id
  if (target === '1') { text.innerHTML = `¿Quieres ver ${inception}?` }
  else if (target === '2') { text.innerHTML = `¿Quieres ver ${theButterFlyEffect}?` }
  else if (target === '3') { text.innerHTML = `¿Quieres ver ${eternalSunshineOfTheSM}?` }
  else if (target === '4') { text.innerHTML = `¿Quieres ver ${blueVelvet}?` }
  else if (target === '5') { text.innerHTML = `¿Quieres ver ${split}?` }
})