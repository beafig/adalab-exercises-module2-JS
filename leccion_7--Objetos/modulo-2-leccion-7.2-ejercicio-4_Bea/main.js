'use strict';

// Prepara un botón con un listener para loguear el objeto event en la consola. Investiga si la clave type que encontramos en él es una propiedad o un método.

const btn = document.querySelector('.js-btn');

btn.addEventListener('click', (event) => console.log(event))

//Prepara un input de tipo texto, a recogerlo desde JavaScript y a imprimirlo en la consola con console.dir para investigarlo y comentar con la compañera estas propiedades: value, nodeNamey required.

const input = document.querySelector('.js-input');

console.dir(input)