'use strict';

// Crea una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar sobre el botón, imprimir en la consola el mensaje 'Hola {nombre}', con el nombre que aparece en el input de texto.

const inputName = document.querySelector('.js-name')

const btn = document.querySelector('.js-button')

console.log(btn)

btn.addEventListener('click', () => {
  console.log(`Hola ${inputName.value}`)
})