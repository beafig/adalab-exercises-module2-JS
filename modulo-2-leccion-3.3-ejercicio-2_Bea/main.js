'use strict';

//Prepara una variable cuyo valor será un número. Escribe las condiciones para el siguiente ejercicio y utilizando la variable haz pruebas para ver que estas se cumplen.

let number = 0
number = -5
number = 12
number = 17
number = 25
number = 75

if (number === 0) {
  console.log('El número es 0')
} else if (number < 0) {
  console.log('El número es negativo')
} else if (number > 11 && number <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50')
} else {
  console.log('el número no es 123123125')
}


