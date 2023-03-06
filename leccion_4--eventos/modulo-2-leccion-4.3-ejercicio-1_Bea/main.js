'use strict';

//Crea una página con un input de texto y un párrafo vacío. Cada vez que la usuaria escriba una letra tenemos que recoger el valor del input al que le pusimos el listener y escribirlo en el párrafo.
//Nota: el objetivo es hacerlo utilizando event.currentTarget

const inputName = document.querySelector('.js-name')
const text = document.querySelector('.js-text')

inputName.addEventListener('keydown', (event) => {
  const inName = event.currentTarget
  text.innerHTML = `${inName.value}`;
})