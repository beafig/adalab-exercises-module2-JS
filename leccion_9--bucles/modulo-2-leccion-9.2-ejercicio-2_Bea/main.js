'use strict';

// Haz un HTML con 3 botones con el texto ALARMA en un fondo blanco. Vamos a hacer que al pulsar en cualquiera de ellos, el fondo de la pantalla se ponga rojo. Si volvemos a pulsar en cualquiera de ellos, el fondo se pondrá blanco. Y así sucesivamente. Vamos a hacer uso de querySelectorAll para evitar repetir mucho código.

const btn = document.querySelectorAll('.js-btn')
const box = document.querySelector('.js-box')


box.addEventListener('click', (event) => {
  event.preventDefault()
  box.classList.toggle('background')
  console.log(event.target)
})

// btn.addEventListener('click', (event) => {
//   event.preventDefault()
//   box.classList.toggle('background')
// })
