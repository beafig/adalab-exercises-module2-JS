'use strict'

// probando ejemplo del temario

function getEmoji() {
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('.js-result').innerHTML = data.result;
    });
}
document.querySelector('.js-emoji').addEventListener('click', getEmoji);

///

function getDogImage() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-dog');
btn.addEventListener('click', getDogImage);

// 13.1 EJERCICIO 1

//Crea una aplicación que me genere un número aleatorio entero utilizando el API 'rand.fun'.
// Obtén el número aleatorio haciendo una petición a la siguiente URL https://api.rand.fun/number/integer

// NOTA: al recibir la respuesta del servidor como data, este es un objeto, debes hacer un console.log, con él para saber sus propiedades y cual de ellas en la que te interesa, en este caso es result

fetch(`https://api.rand.fun/number/integer`)
  .then((response) => response.json())
  .then((data) => console.log(data.result));

// Añade parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por &, por ejemplo si quisieras pedir un integer entre diferentes valores, la url quedaría así https://api.rand.fun/number/integer?min=0&max=10000

fetch(`https://api.rand.fun/number/integer?min=30&max=50`)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data.result)
  });

// 13.2 EJERCICIO 1

//Sigamos trabajando con el API que muestra una imagen aleatoria de un perrito Dog API para crear una página que muestre fotos sólo de perros de la raza chihuahua
// Consulta la documentación de esta API específicamente puedes hacer la petición a la siguiente url: https://dog.ceo/api/breed/chihuahua/images/random. Primero verifica en tu navegador que devuelve esta petición.

//Añade un botón a la página con el título 'Enséñame un Chihuahua' que al pulsarlo se haga una petición al servidor de una imagen aleatoria y aparezca una imagen de un Chihuahua. Añade una nueva función getChihuahua() que incluya esta petición(puedes basarte en el ejemplo de la clase).

const img = document.querySelector('.js-chihuahuaPic');
const btnDog = document.querySelector('.js-chihuahua');

function handleClick() {
  fetch(`https://dog.ceo/api/breed/chihuahua/images/random`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      img.src = data.message
    })
}

btnDog.addEventListener('click', handleClick)

// 13.2 EJERCICIO 2

//Ahora vamos a explorar un nuevo API: el API de usuarios de GitHub. La URL de este API es https://api.github.com/users/{username}, donde {username} es el nombre del usuario en GitHub. Por ejemplo, aquí tenéis la URL para obtener información del usuario de Isra https://api.github.com/users/gootyfer. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
// Vamos a crear una página en la que haya un input de texto y un botón de buscar. El usuario escribirá en el input un nombre de usuario de GitHub. Prepararemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición al API para obtener información de ese usuario y así mostrarla en nuestra página:

const inputSearch = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btnSearch');
const nameResult = document.querySelector('.js-nameGit');
const picResult = document.querySelector('.js-imgGit');
const repoResult = document.querySelector('.js-repoGit');

function handleClickSearch(event) {
  if (inputSearch.value === '') {
    nameResult.innerHTML = `Introduce un nombre de usuario valido`
  } else {
    fetch(`https://api.github.com/users/${inputSearch.value}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        nameResult.innerHTML = data.name;
        picResult.src = data.avatar_url;
        repoResult.innerHTML = data.public_repos;
      })
  }
}

btnSearch.addEventListener('click', handleClickSearch)

// 13.3 EJERCICIO 1

//Partiendo el ejemplo anterior, vamos a modificarlo para que en lugar de pedir 2 imágenes en paralelo pida 10, y el resultado sólo se pinte en la pantalla cuando las 10 imágenes hayan llegado del servidor. Ahora sí que se nota el efecto de que se pintan todas a la vez, ¿verdad? Vamos a probar también con 25 imágenes, para ver bien este efecto.

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise()];
  Promise.all(promises)
    .then((responses) => {
      for (let i = 0; i < responses.length; i++) {
        const img = document.querySelector('.dog' + (i + 1));
        img.src = responses[i].message;
      }
    });
}
const btnBreeds = document.querySelector('.js-btn');
btnBreeds.addEventListener('click', getBreedImages);