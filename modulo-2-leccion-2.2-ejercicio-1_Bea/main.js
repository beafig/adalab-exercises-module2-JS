'use strict';

// 2 kilos de kiwis a 5€ / kg
// 3 kilos de peras conferencia a 2€ / kg
// Medio kilo de uvas a 4€ / kg

// Calcula el precio total como si lo hiciésemos en una hoja de papel de toda la vida pero de manera mucho más guay. El resultado debe mostrarse en la consola del navegador.

const kiwis = 5;
const peras = 2;
const uvas = 4;

console.log(kiwis)
console.log(peras)
console.log(uvas)

const title = document.querySelector('.main__title');
title.innerHTML = title.innerHTML + ' ' + ((kiwis * 2) + (peras * 3) + (uvas * 0.5)) + ' ' + '€';

// es correcto añadir un espacio con ' ' ¿?