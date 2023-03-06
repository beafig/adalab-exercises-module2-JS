'use strict';

//Crea un bucle que muestre 10 veces, en la consola, el texto Voy por la vuelta X siendo el número de vueltas desde 1 hasta 10 (no desde 0 hasta 9).

for (let i = 1; i < 11; i++) {
  console.log('Voy por la vuelta' + i)
};

//Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.
//NOTA: Este tipo de variables como acc que se va actualizando y al final tiene el resultado de varias operaciones se llama acumulador. Puede ser de tipo numérico pero también de tipo cadena si vamos acumulando una cadena cada vez más larga.

let acc = 0;

for (let i = 1; i < 11; i++) {
  acc = i * 2
}

console.log(`El resultado es ${acc}`)

//////////////////////////////////////////////////////

// a) Crea un nuevo array numbers que contendrá 5 números cualesquiera y recorre el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitas una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, loguealo en la consola.

const numbers = [3, 13, 27, 65, 88]
let digit = 0

// for (let i = 0; i < numbers.length; i++) {
//   digit += numbers[i] / numbers.length
// }
// console.log(`La media es ${digit}`)

//b) Añade un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.

numbers.push(42)
console.log(numbers)

// for (let i = 0; i < numbers.length; i++) {
//   digit += numbers[i] / numbers.length
// }

// console.log(`La media es ${numbers.length}`)
// console.log(`La media es ${digit}`)

//c)Crea una función average, que toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) y devuelve la media. Para trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.

function average(array) {
  for (let i = 0; i < array.length; i++) {
    digit += array[i] / array.length
  }
  return digit
};

console.log(average(numbers));

//Usando for...of haz un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const btn = document.querySelector('.js-btn');
const book1 = document.querySelector('.js-book1');
const book2 = document.querySelector('.js-book2');
const text1 = document.querySelector('.js-text1');
const text2 = document.querySelector('.js-text2');

btn.addEventListener('click', () => {
  const books = [book1.value, book2.value];
  for (const read of books) {
    text1.innerHTML = `¡A mí también me encantó ${books[0]}`
    text2.innerHTML = `¡A mí también me encantó ${books[1]}`
  }
})

//Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. Esta luna es conocida como la “Luna del cazador”. En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

// bucle de 15 vueltas
// en cada vuelta suma 3 años 

let year = 2017;

for (let i = 1; i <= 15; i++) {
  console.log(`Las próximas 'Luna del Cazador' serán: 5 de octubre de ${year + (i * 3)}`)
}

//Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:

// María, 29 años, diseñadora
// Lucía, 31 años, ingeniera química
// Susana, 34 años, periodista
// Rocío, 25 años, actriz
// Inmaculada, 21 años, diseñadora

// 1.Crea una estructura de datos en JavaScript para manejar estos datos, usa arrays y objetos para crearla.

const adalabers = [
  {
    name: 'María',
    age: 28,
    job: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera'
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora'
  }
]
//2. Crea varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.

//Una función countAdalabers que devuelve el número de adalabers en el listado.

let counter = 0

function countAdalabers(array) {
  for (let i = 0; i < array.length; i++) {
    counter++
  }
  return counter
}

console.log(countAdalabers(adalabers))

// Una función averageAge que devuelve la media de edad de listado.

let ages = 0

function averageAge(array) {
  for (const each of array) {
    ages += each.age / array.length
  }
  return ages
}
console.log(averageAge(adalabers))

//Una función theYoungest que devuelve el nombre de la adalaber más joven.
//NO FUNCIONA




function theYoungest(ada) {
  let min = ada[0].age
  for (const eachAdalaber of ada) {
    if (eachAdalaber.age < min) {
      min = eachAdalaber.age
      console.log(min)
    } else if (eachAdalaber.age > min) {
      min = ada[0].age
      console.log(min)
    }
  }
}

theYoungest(adalabers)

const nameYounger = adalabers.find((eachAdalaber) => eachAdalaber.age === 21)
console.log(nameYounger.name)

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

function countDesigners(ada) {
  for (let i = 0; i < ada.length; i++) {
    if (ada[i].job === 'diseñadora') {
      console.log(ada[i].name)
    }
  }
}

countDesigners(adalabers)

// Muestra en consola el tipo datos que hay en un array. Dado el siguiente array:
// Escribe un script que recorra los datos de este array y pinte en consola por cada elemento: "El dato VALOR está en la posición X y es de tipo TIPO".

const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron',
  },
];

for (let i = 0; i < items.length; i++) {
  console.log(`El dato ${items[i]} está en la posición ${i} y es de tipo ${typeof (items[i])}`)
}

/////////////////////////////

/////  bucar el nº más pequeño de un array

const numeros = [67, 6, 23, 11, 100, 8, 3, 93, 0, 17, 24, 7, -2, 33, 45, 28, 33, 23, -12, 99, 100];

let min3 = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < min3) {
    min3 = numeros[i];
  }
}
console.log('Valor mínimo: ' + min3);
