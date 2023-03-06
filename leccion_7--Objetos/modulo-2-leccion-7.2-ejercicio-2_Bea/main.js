'use strict';

// Crea un objeto que sea una cesta de peras y que debe tener varias propiedades:
// Número máximo de peras
// Número mínimo de peras
// Número actual de peras
// Número inicial de peras
// Y varios métodos que hagan:
// Añadir al cesto una pera
// Sacar del cesto una pera
// Restablecer el número de peras al valor inicial.

const basket = {
  max: 100,
  min: 1,
  act: 28,
  inic: 7,
  add: () => basket.act + 1,
  remove: () => basket.act - 1,
  reset: () => basket.inic,
}

basket.add()

console.log(basket.add())
console.log(basket.add())
console.log()
console.log()
console.log()
console.log()