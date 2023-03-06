'use strict';

// Usando for...of haz un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const book1 = document.querySelector('.js-book1')
const book2 = document.querySelector('.js-book2')
const btn = document.querySelector('.js-btn')
const text = document.querySelector('.text')

btn.addEventListener('click', (event) => {
  event.preventDefault()
  const array = [book1.value, book2.value]
  for (const books of array) {
    text.innerHTML += `¡A mí también me encantó ${books}!<br>`
  }
})