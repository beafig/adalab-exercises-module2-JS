'use strict';

// Haz un programa que te sugiera una receta en función del ingrediente especificado.
//Los ingredientes disponibles son pollo, merluza o espinacas.

let nevera = 'vacía';

//Por defecto si no hay ingrediente pondrá 'Nada en la nevera'.
//Según el ingrediente el programa mostrará un mensaje en consola diciéndo el ingrediente que has elegido y con las siguientes sugerencias de receta:
// Filete con patatas
// Merluzita en salsa verde
// Espinacas rehogadas.


nevera = 'pollo';
nevera = 'MERLUZA';
nevera = 'Espinacas';
nevera = nevera.toLowerCase()


switch (nevera) {
  case 'pollo':
    console.log('Filete con patatas');
    break;
  case 'merluza':
    console.log('Merluzita en salsa verde');
    break;
  case 'espinacas':
    console.log('Espinacas rehogadas');
    break;
  default:
    console.log('Nada en la nevera');
}