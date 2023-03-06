'use strict'

// 14.2 EJERCICIO 1 y BONUS

//Escribir datos en formularios es muy tedioso para los usuarios. ¡Vamos a cachearlos para facilitarles la vida!
// Prepara un input de texto para el nombre, un input de texto para los apellidos y un párrafo vacío
// Cada vez que la usuaria escriba su nombre y apellidos (keyUp) tenemos que pintar el valor en el párrafo y guardarlo en localStorage.
// Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.
// Mejora la forma de guardar los datos, queremos tener nuestros datos agrupaditos. El reto es guardar y recoger del localStorage un objeto con dos propiedades, nombre y apellido.

const inputName = document.querySelectorAll('.js-name');
const firstName = document.querySelector('.js-first');
const lastName = document.querySelector('.js-last');
const result = document.querySelector('.js-result');
let fullName = {
  name: '',
  lastName: ''
}

function handleInput() {
  result.innerHTML = `${firstName.value} ${lastName.value}`
  fullName.name = firstName.value
  fullName.lastName = lastName.value
  localStorage.setItem('allName', JSON.stringify(fullName))
  console.log(fullName);
}

const savedName = JSON.parse(localStorage.getItem('allName'))
console.log(savedName);
if (savedName !== null) {
  console.log('funciona?');
  firstName.value = savedName.name
  lastName.value = savedName.lastName
  result.innerHTML = savedName.name + ' ' + savedName.lastName
}

for (const eachInput of inputName) {
  eachInput.addEventListener('keyup', handleInput)
}

// 14.2 EJERCICIO 2

//Vamos a preparar una página sencilla, con un título, un par de párrafos y un selector de tema. Para hacer el selector:
// Añadiremos dos radio buttons para poder elegir entre claro y oscuro.
// Prepararemos dos clases de css: una pondrá el fondo claro y el texto oscuro, y la otra pondrá el fondo oscuro y el texto claro.
// Aplicaremos a nuestra página una clase u otra según la selección de la usuaria, apoyándonos en el value del input seleccionado.
// Paralelamente cada vez que la usuaria elija un tema, guardaremos esta información en localStorage.
// Al cargar la página buscaremos en localStorage el tema seleccionado en la última visita y lo aplicaremos sin que la usuaria tenga que realizar ninguna acción.

const radioInput = document.querySelectorAll('.js-radio');
const radio1 = document.querySelector('.js-radio1');
const radio2 = document.querySelector('.js-radio2');
const body = document.querySelector('.js-body');

function handleRadio(event) {
  if (event.target.id === "1") {
    body.classList.add('light')
    body.classList.remove('dark')
  } else if (event.target.id === "2") {
    body.classList.remove('light')
    body.classList.add('dark')
  }
  localStorage.setItem('theme', event.target.id)
}

const savedTheme = localStorage.getItem('theme')
if (savedTheme) {
  if (savedTheme === '1') {
    radio1.checked = true
    body.classList.add('light')
    body.classList.remove('dark')
  } else if (savedTheme === '2') {
    radio2.checked = true
    body.classList.remove('light')
    body.classList.add('dark')
  }
}
for (const eachInput of radioInput) {
  eachInput.addEventListener('click', handleRadio)
}

// 14.3 EJERCICIO 1

//Hay una api genial thecatapi.com de imágenes de gatetes, como estos seres son muy particulares y no se juntan con cualquiera tenemos que autenticarnos siempre que hacemos una petición. Pero es una autenticación sencilla, solo tenemos que registrarnos en la web, y nos mandarán al email un token que nos identifica, y que tendremos que añadir en todas las peticiones que hagamos.
// Registrarse en la web y generar un token personal para sustituirlo por el de Adalab, que eso de impersonar a otros no es bonito.
// Pintar la imagen aleatoria del gato que nos devuelve la petición.
// ¡Espera! ¿Esto no iba de gifs? Vamos a ver si podemos hacer que la imagen que nos devuelve sea un gif. (?mime_types=gif añadiendo esto a la URL ya solo me devuelve gits)

const img = document.querySelector('.js-img');

fetch(`https://api.thecatapi.com/v1/images/search?mime_types=gif`, {
  headers: { "x-api-key": 'live_JgpAT3kgtjfNzNiFvvaQcVPmItabUezAYfHgBfRGrB4GnPEM1R6WfaLoFRdo8pNU' }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    img.src = data[0].url
  })
