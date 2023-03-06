'use strict';

//Haz un array de cadenas (strings) movies con un listado de 3 películas que te gusten.

const movies = ['Jojo', 'Avatar', 'La vida es bella'];

// Añade al array anterior otra película más que te guste. No vale modificar la declaración del array, sino que añadiremos la nueva película en la posición 3 del array (recordad que se empiezan a numerar desde el 0). Para comprobar que funciona, tienes que mostrar el array completo en la consola.

movies[3] = 'Coco';
console.log(movies);

// Modifica la película que menos te guste de las que hay en el array por el nombre de otra que te guste más. Para comprobar que funciona, tienes que mostrar el array completo en la consola.

movies[1] = 'Soy leyenda'
console.log(movies)

// Para terminar este ejercicio, vamos a encapsular todo el código que hemos creado en una función que no toma parámetros y que llamaremos workWithMovies. Ejecuta la función para comprobar que se muestran los mensajes en la consola correspondientes.

function workWithMovies() {
  const movies = ['Jojo', 'Avatar', 'La vida es bella'];
  movies[3] = 'Coco';
  movies[1] = 'Soy leyenda';
  return movies
};

console.log(workWithMovies())