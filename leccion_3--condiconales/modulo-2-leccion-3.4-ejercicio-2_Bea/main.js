'use strict';

// Haz un pequeño programa que nos permita saber cuál será el siguiente año bisiesto.
// Los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente.
// La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.
// Pista: Tenemos que escribir el año en el que estamos en una constante

const year = 2023

if (year % 4 === 0) {
  console.log('Este año es bisiesto')
} else if (year % 4 === 1) {
  console.log(`El próximo año bisiesto es ${year + 3}`)
} else if (year % 4 === 2) {
  console.log(`El próximo año bisiesto es ${year + 2}`)
} else if (year % 4 === 3) {
  console.log(`El próximo año bisiesto es ${year + 1}`)
}
