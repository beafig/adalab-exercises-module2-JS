'use strict';

//Crea una página con dos botones, cada vez que la usuaria de clic en un botón debe cambiar el estilo solo del botón pulsado. Utiliza una única función manejadora para el evento click de los botones

const btn1 = document.querySelector('.js-btn1')
const btn2 = document.querySelector('.js-btn2')

btn1.addEventListener('click', (event) => {
  const btn = event.currentTarget;
  btn.classList.toggle('button')
})

btn2.addEventListener('click', (event) => {
  const btn = event.currentTarget;
  btn.classList.toggle('button')
})

//no sé como hacerlo con una sola función