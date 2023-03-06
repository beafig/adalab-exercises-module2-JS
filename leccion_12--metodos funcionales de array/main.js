'use strict';


// MAPS

// Ya tenemos las notas del examen! Los profes, como somos así, las hemos metido en un array: const marks = [5, 4, 6, 7, 9];. Casi todo el mundo lo ha hecho bastante bien pero... vamos a hacer un poco de trampa de la buena :) Vamos a modificar las notas de todas para añadirles 1 punto, ¿no? Pues usemos nuestro reciente amigo map para crear un nuevo array inflatedMarks con las notas modificadas. Finalmente, mostraremos en la consola las notas modificadas para ver que funciona correctamente. ¡Al lío!

const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((number) => number + 1)

console.log(inflatedMarks)

// Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const sayHi = names.map((name) => `Bienvenida ${name}`)

console.log(sayHi)

// Seguimos desarrollando nuestra aplicación web que romperá el mercado. Pero antes, queremos agradecer a nuestros usuarios premium (de pago) su ayuda al inicio de la aplicación. Por tanto, a los usuarios premium queremos saludarles así 'Bienvenida Yolanda. Gracias por confiar en nosotros.', y mantener el saludo simple 'Bienvenida Yolanda' para el resto de usuarios.

//Vamos a partir de este array con el listado de usuarios que incluye tanto su nombre como si son usuarios premium o no.

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

// function premium(user) {
//   if (user.isPremium) {
//     console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros`)
//   } else { console.log(`Bienvenida ${user.name}.`) }
// }
// users.map(premium)


// lo mismo pero con arrow function:

const isPremium = users.map((user) => {
  if (user.isPremium) {
    console.log(`Bienvenida ${user.name}. Gracias por confiar en nosotros`)
  } else { console.log(`Bienvenida ${user.name}.`) }
})

// FILTER

// Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Gracias por confiar en nosotros. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?

// function premiumName(user) {
//   if (user.isPremium) {
//     console.log(user.name)
//   }
// }
// const usersPremium = users.filter(premiumName);

// lo mismo pero con arrow function
const usersPremium = users.filter((premiumName) => {
  if (premiumName.isPremium) {
    console.log(premiumName.name)
  }
})

// Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:

const pins = [2389, 2384, 2837, 5232, 8998];

//De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A / B testing. ¿Nos ayudas a encontrar las contraseñas usando filter ?

const pinsEven = pins.filter((number) => number % 2 === 0)

console.log(pinsEven)

//Ya hemos conseguido las contraseñas pertenecientes a cada usuario. ¿Podrías darnos un array con los usuarios que pueden acceder a la aplicación, es decir, los que tienen como PIN un número par?

const users2 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const pinsEvenName = users2.filter((user) => user.pin % 2 === 0)

console.log(pinsEvenName)

// lo mismo pero con función con nombre:
// function isEven(cust) {
//   if (cust.pin % 2 === 0) {
//     return cust.name
//   }
// }

// const usersEntry = users2.filter(isEven)
// console.log(usersEntry)

// FIND & FINDINDEX

//a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.

const users3 = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const errorName = users3.find((user) => user.pin === 5232)

console.log(errorName.name)

//) Resulta que el usuario se ha dado de baja por la incidencia :( ¿Podrías borrarlo del array de usuarios? Usa el método findIndex para encontrar su posición y bórralo usando splice.

const errorInd = users3.findIndex((user) => user.name === 'Rocío')

console.log(errorInd)

users3.splice(3, 1);
console.log(users3)

// REDUCE

//Hemos organizado una carrera de escobas para que podáis exprimir a fondo vuestra flamante Nimbus 2000. Tenemos los tiempos en este array y nos gustaría conocer la media: ¿nos ayudas a calcularla usando reduce?

const times = [56, 9, 45, 28, 35];

const average = times.reduce((acc, time) => acc + time)

console.log(times.length)
console.log(average / times.length)

// Ya hemos conseguido los nombres de los competidores y nos gustaría que usases reduce para averiguar quién ha ganado.
//PISTA: en este caso el acumulador puede ser no sólo un número sino cualquier valor. Por ejemplo un objeto que sea nuestro candidato a ganador :)

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

/// resultado de Laura: 
const result = runners.reduce((acc = { name: '', time: 1000 }, runner) => runner.time < acc.time ? runner : acc);
console.log(result)

/// mi intento, igual que Laura con if normal:
const win = runners.reduce((acc = { name: '', time: 1000 }, runner) => {
  if (runner.time < acc.time) {
    return runner
  } else {
    return acc
  }
})

console.log(win)

// let min = runners[0].time
// for (let i = 0; i < runners.length; i++) {
//   if (runners[i].time < min) {
//     min = runners[i].time
//   }
// }

// console.log(min)

// const winner = runners.find(runner => runner.time === 9)
// console.log(winner.name)

// Como en el ejercicio anterior vamos a averiguar quién ha ganado usando reduce, pero queremos saber el ganador de los estudiantes, por lo que tendremos que filtrar primero quiénes lo son.

const runners2 = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { nastudenme: 'Nymphadora Tonks', time: 9, t: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const runStundent = runners2.filter(runner => runner.student)
console.log(runStundent)

const winStudent = runStundent.reduce((acc = { name: '', time: 1000 }, runner) => {
  if (runner.time < acc.time) {
    return runner
  } else {
    return acc
  }
})

console.log(winStudent)

// let min2 = runStundent[0].time
// for (let i = 0; i < runStundent.length; i++) {
//   if (runStundent[i].time < min2) {
//     min2 = runStundent[i].time
//   }
// }

// console.log(min2)

// const winner2 = runStundent.find(runner => runner.time === 28)
// console.log(winner2.name)

/// SORT

//Volviendo a nuestra carrera de escobas, queremos tener el array del ejercicio 3. El ganador de los estudiantes de la mini lección anterior ordenado para poder tener una clasificación de la carrera: ¿nos ayudar a hacerlo usando sort?
//PISTA: la función que le pasamos a sort toma como parámetros 2 elementos del array, así que para acceder a una propiedad de un objeto en la función podemos hacerlo con el operador punto (a.time), como hemos hecho hasta ahora ;).


const runStundent2 = runners2.filter(runner => runner.student)
runStundent2.sort((a, b) => a.time - b.time)

console.log(runStundent2)

// Vamos a volver al listado de usuarios del ejercicio 1. Encuentra el usuario de la lección 2.4, porque nos ha dado la manía de tenerlos ordenados. ¿Podrías ordenarlos por orden alfabético? ¿Y por su número de PIN?

const customers = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

// para ordenar alfabeticamente un array de objetos se puede de las 2 sig. maneras :
//1.
customers.sort((a, b) => a.name.localeCompare(b.name))

//2.
customers.sort((a, b) => {
  if (a.name > b.name) {
    return 1
  }
  if (a.name < b.name) {
    return -1
  }
})

console.log(customers)

// ordenar por el número pin
customers.sort((b, a) => b.pin - a.pin)



const text = document.querySelector('.js-result')

fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    text.innerHTML = data.result;
  });


// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     document.body.innerHTML = data.result;
//   });