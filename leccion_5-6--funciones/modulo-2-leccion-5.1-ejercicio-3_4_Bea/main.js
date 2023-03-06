'use strict';

//Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
// Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:
// const btnEl = getEl('.btn');

// function getEl(clas) {
//   const get = document.querySelector(clas);
//   return get
// };

const text = getEl('.text');
console.log(text)

const text1 = getEl('.text1')
console.log(text1)

// Nos hemos dado cuenta de que cuando llamamos a getEl a veces nos equivocamos escribiendo el selector (se nos olvida el punto de la clase, nos comemos una letra...), a partir de ahí todo falla y nos cuesta encontrar dónde está el error. Vamos a mejorar nuestra función para que nos avise cuando esto ocurre. Dentro de ella:

// Al recoger el elemento de HTML vamos a guardarlo en una constante.

const text3 = document.querySelector('.text3');


// Con un condicional vamos a comprobar si la constante no tiene ningún valor, y en ese caso vamos a imprimir un error en la consola que diga No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}

function getEl(clas) {
  //const get = document.querySelector(clas);
  if (clas === '') {
    console.log('No existe ningún elemento con clase, id o tag llamado')
  } else {
    const get = document.querySelector('.clas');
  }
  const get = document.querySelector('.clas')
  return get
};

const text4 = getEl('.text4')
console.log(text4)
console.log(getEl(''))

// Finalmente tras nuestro condicional retornaremos la constante con el elemento.