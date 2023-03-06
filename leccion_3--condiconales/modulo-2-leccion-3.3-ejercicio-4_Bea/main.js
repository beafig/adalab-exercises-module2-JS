'use strict';

//Usando JavaScript, haremos que:
//Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
//Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
//Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'

const container = document.querySelector('.js-container')
const title = document.querySelector('.js-title')
const text = document.querySelector('.js-text')

if (container.classList.contains('warning')) {
  title.innerHTML = 'AVISO'
  text.innerHTML = 'Tenga cuidado'
}

if (container.classList.contains('error')) {
  title.innerHTML = 'ERROR'
  text.innerHTML = 'Ha surgido un error'
}
if (container.classList.contains('success')) {
  title.innerHTML = 'CORRECTO'
  text.innerHTML = 'Los datos son correctos'
}