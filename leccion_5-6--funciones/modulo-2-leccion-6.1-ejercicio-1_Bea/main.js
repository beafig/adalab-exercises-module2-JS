'use strict';

//Realiza una calculadora al que le pasaremos 4 parámetros y nos devolverá el ancho del contenido, y el ancho total de la caja en una cadena como esta: El ancho del contenido es: 30px y el ancho total de la caja es: 34px.

//La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border-box o no.
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.
// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.

const btn = document.querySelector('.js-btn');
const box = document.querySelector('.js-inputBox');
const width = document.querySelector('.js-inputWidth');
const padding = document.querySelector('.js-inputPadding');
const border = document.querySelector('.js-inputBorder');
const text = document.querySelector('.js-text');

function handleClick(event) {
  event.preventDefault();
  calculate(parseInt(width.value), parseInt(padding.value), parseInt(border.value));
};

function calculate(wid, pad, bor) {
  if (box.value.toLowerCase() === 'borderbox') {
    text.innerHTML = `El ancho del contenido es: ${wid - pad * 2 - bor * 2} y el ancho total de la caja es: ${wid}.`;
  } else if (box.value.toLowerCase() === 'contentbox') {
    text.innerHTML = `El ancho del contenido es: ${wid} y el ancho total de la caja es: ${wid + pad * 2 + bor * 2}.`;
  }
};

btn.addEventListener('click', handleClick)