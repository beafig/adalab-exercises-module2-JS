'use strict';

//Crea un nuevo objeto en JavaScript adalaber1 que nos sirva para representar (modelar) a una Adalaber. Tenemos estos datos:
// Susana, 34 años, periodista
// Luego muestra en la web una frase como esta, accediendo a los datos del objeto:
// 'Mi nombre es Susana, tengo 34 años y soy periodista'
// Ahora hacemos lo mismo (crear el objeto adalaber2 y mostrar una frase descriptiva) con una nueva Adalaber con estos datos:
// Rocío, 25 años, actriz

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista'
};

const text = document.querySelector('.js-text');

text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}. <br>`;

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz'
};

text.innerHTML += `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

//Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) run que muestre en la consola (lo llamamos loguear) la frase 'Estoy corriendo'.

const adalaber3 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
  run: () => 'Estoy corriendo'
};

adalaber3.run = () => 'Estoy corriendo'

console.log(adalaber3.run())

// Ahora, vamos a añadir un nuevo método runAMarathon que toma un parámetro distance que es un número. Al ejecutarlo, debe mostrarse en la consola el texto 'Estoy corriendo un maratón de 50 kilómetros' siendo 50 el valor del argumento distance que le hemos pasado.

adalaber3.runAMarathon = (distance) => `Estoy corriendo una maratón de ${distance} kilómetros.`

console.log(adalaber3.runAMarathon(50))


//Partiendo del objeto adalaber1 de la seccion anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto

const adalaber4 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
  showBio: function () {
    'Mi nombre es ' + adalaber4.name + ', tengo ' + adalaber4.age + ' años y soy ' + adalaber4.job + '.'
  }
};


console.log(adalaber4.showBio())

// usando una funcion anónima con {} en lugar de arrow function sin llaves {} no funciona, no pinta el mensaje, sale undefined.