'use strict';

//Crea una página HTML con un botón. El objetivo es cambiar el diseño del botón al darle clic, por ejemplo que cambie el color de fondo. Haz que cada vez que la usuaria pulse el botón:
//añade la clase de css que cambia el estilo del botón si no la tiene
//quita la clase de css que cambia el estilo del botón si la tiene
//Nota: para facilitar añadir y quitar clases de CSS, os recomendamos usar classList.toggle

const btn = document.querySelector('.js-button')

btn.addEventListener('click', () => {
  btn.classList.toggle('button_click')
})

console.log('Good job')