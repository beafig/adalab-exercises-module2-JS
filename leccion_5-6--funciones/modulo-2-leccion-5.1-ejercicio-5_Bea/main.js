'use strict';

//Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicio 5). Sin modificar estas dos funciones, vamos a hacer lo siguiente:

function getEl(clas) {
  const get = document.querySelector(clas);
  return get
};

function par(a) {
  return (a % 2) === 0
}

// 1. usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)

const text = getEl('.text');
const textInn = text.innerHTML;
console.log(textInn);
console.log(typeof textInn);

//2.  convertimos ese valor a número y lo asignamos a una constante

console.log(parseInt(textInn));
const number = parseInt(textInn);
console.log(number);

// 3. usamos nuestra función del ejercicio 4 para saber si es par o impar

console.log(par(number))

// 4. escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

if (par(number) === false) {
  console.log('Este es un número impar')
}
else {
  console.log('Este es un número par')
};