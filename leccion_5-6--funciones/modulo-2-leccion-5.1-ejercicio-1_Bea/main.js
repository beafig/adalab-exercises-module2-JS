'use strict';

//Crea una función que reciba como argumentos dos valores y devuelva como valor de retorno la multiplicación de ambos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola usando console.log().
// Crea una función con 4 parámetros numéricos que devuelva como valor la media de todos ellos. Haz tres pruebas con distintos números para comprobar que funciona correctamente y muestra el resultado en la consola.
//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar. Ejecútala e imprime el resultado para comprobar que funciona.

function suma(a, b) {
  return a * b
}
console.log(suma(3, 2))
console.log(suma(50, 5))
console.log(suma(587, 368))

function media(a, b, c, d) {
  return (a + b + c + d) / 4
}

console.log(media(4, 5, 6, 5))
console.log(media(87, 55, 13, 97))
console.log(media(12, 987, 587, 2578))

function par(a) {
  return (a % 2) === 0
}
// % 2 => si el número es divisible entre 2 

console.log(par(6))
console.log(par(9))
console.log(par(-57))
console.log(par(-200))
