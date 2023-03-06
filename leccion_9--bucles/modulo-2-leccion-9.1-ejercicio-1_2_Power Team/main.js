'use strict';

// Crea un bucle que muestre 10 veces, en la consola, el texto Voy por la vuelta X siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

for (let i = 1; i <= 10; i++) {
  console.log(`Voy por la vuelta ${i}`);
}

// Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.

let acc = 0;

for (let i = 1; i <= 10; i++) {
  acc = acc + 2;
  console.log(`El resultado es ${acc}`);
}

// NOTA: Este tipo de variables como acc que se va actualizando y al final tiene el resultado de varias operaciones se llama acumulador. Puede ser de tipo numérico pero también de tipo cadena si vamos acumulando una cadena cada vez más larga.

//---------------------------------------------

//a) Crea un nuevo array numbers que contendrá 5 números cualesquiera y recorre el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitas una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, loguealo en la consola.

const numbers = [8, 3, 17, 13, 19];
// numbers[numbers.length] = 32;
let accc = 0

// for (let i = 0; i < numbers.length; i++) {
//   accc += numbers[i];
//   console.log(accc)
// }

// console.log(accc)

// accc = accc / numbers.length;

// console.log(accc)

// b) Añade un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.


// c) Crea una función average, que toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) y devuelve la media. Para trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

accc = 0

function average(array) {
  for (let i = 0; i < array.length; i++) {
    accc += array[i];
  }
  accc = accc / array.length;
  return accc
}

const media = average(numbers)
console.log(media)
console.log(numbers)