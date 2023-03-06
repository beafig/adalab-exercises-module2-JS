'use strict';
// PRUEBAS

const newArray = [1, 2, 3, 4, 7, 13, 57, 34, 68];
const extract = newArray.slice(1, 4);

console.log(extract)
console.log(newArray)

const arr = [1, 2, 3, 4, 7, 13];
arr.splice(1, 2);
console.log(arr)


const arr2 = [1, 2, 3, 4, 7, 13];
arr2.splice(0, 3, 5, 11, 17);
console.log(arr2)

const colors = [
  [0, 16, 14],
  [5, 25, 87],
  [7, 15, 3]
];

for (let i = 0; i < colors.length; i++) {
  let color = colors[i];
  for (const eachColor of color) {
    console.log(eachColor)
  };
};

//Crea una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

const numbers = [];

function get100Numbers() {
  for (let i = 1; i < 101; i++)
    numbers.push(i)
  console.log(numbers)
}

get100Numbers()

console.log(numbers)
console.log(numbers[1])
console.log(numbers[8])
console.log(numbers[13])
console.log(numbers[29])
console.log(numbers[110])

// Crea una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

const numbers2 = [];

function getReversed100Numbers() {
  for (let i = 1; i < 101; i++)
    numbers2.push(i)
  numbers2.reverse()
  console.log(numbers2)
}

getReversed100Numbers()

console.log(numbers2[1])
console.log(numbers2[8])
console.log(numbers2[13])
console.log(numbers2[29])
console.log(numbers2[110])

/**********************************************************************/

//Vamos a crear una función bestLostNomber que nos devuelve algunos números del array de los números de la serie Lost que tenemos arriba. La función, debe seguir estos pasos:

const lostNumbers = [4, 8, 15, 16, 23, 42];

//1. Crear un nuevo array que contiene solo los números pares que hay en lostNumbers. Para conseguirlo vamos a crear un nuevo array vacío y recorrer el array lostNumbers para al encontrar un número par, meterlo en el nuevo array.

//2. Crear un nuevo array que contiene solo los números múltiplos de 3 que hay en lostNumbers, de una forma similar al anterior.

// 3. Devolver una concatenación de los 2 arrays anteriores, es decir, que tendrá primero los números pares y luego los múltiplos de 3.

// 4. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.

const lostNumbersEven = []
const lostNumbers3 = []
let newLostNumbers = []

function bestLostNomber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      lostNumbersEven.push(lostNumbers[i])
    } console.log(lostNumbersEven)
  }
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      lostNumbers3.push(lostNumbers[i])
    } console.log(lostNumbers3)
  }
  newLostNumbers = lostNumbersEven.concat(lostNumbers3)
  console.log(newLostNumbers)
}

bestLostNomber()

/***********************************************************************/

//Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
//1. Mostrar una frase que indique cuántas tareas hay.
//2. Pintar todas las tareas en pantalla.
//3. Tachar las ya realizadas.
//4. Permitir marcar una tarea como 'completa' o 'incompleta'.

const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

const list = document.querySelector('.js-list');
const item = document.querySelector('.js-item');

// a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.

//list.innerHTML += `<li class="item"> ${tasks[0].name} </li>`

//b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.

function paintTask() {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      list.innerHTML += `<li class="js-item item"> <input class="js-input" type ="checkbox" checked> ${tasks[i].name}</li>`
    } else {
      list.innerHTML += `<li class="js-item"> <input class="js-input" type ="checkbox"> ${tasks[i].name}</li>`
    }
  }
}

paintTask()

//c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:

const input = document.querySelectorAll('.js-input');

for (const eachInput of input) {
  eachInput.addEventListener('click', () => {
    if (eachInput.checked) {
      tasks.completed = 'true'
    } else {
      tasks.completed = 'false'
    }
  }
  )
}



/********************************************************************/
// Para que no nos pille el toro esta Navidad, vamos a crear un código que muestre en consola un árbol de navidad con triángulos (▲). Nosotros le diremos la altura y creará un triángulo con un número igual de lineas que la altura que le hemos pasado. Por ejemplo si le pasamos 5, creará este árbol:

// ▲
// ▲▲
// ▲▲▲
// ▲▲▲▲
// ▲▲▲▲▲

const christmas = ['▲', '▲▲', '▲▲▲', '▲▲▲▲', '▲▲▲▲▲'];

for (const tree of christmas) {
  console.log(tree)
}

//Intenta ponerle una estrella y un tronco al árbol para que quede mucho más mono.

const christmas2 = ['★', '▲', '▲▲', '▲▲▲', '▲▲▲▲', '▲▲▲▲▲', '|'];

for (const tree of christmas2) {
  console.log(tree)
}

//Intenta cambiar el código para que aparezca el árbol completo.

const christmas3 = ['    ★    ', '    ▲    ', '   ▲▲▲   ', '  ▲▲▲▲▲  ', ' ▲▲▲▲▲▲▲ ', '▲▲▲▲▲▲▲▲▲', '    |    '];

for (const tree of christmas3) {
  console.log(tree)
}