"use strict";

// Crea una página HTML con un solo div, y usando JavaScript, añadir un h1 con el texto "Lorem ipsum", una imagen con el src http://via.placeholder.com/350x150 y un párrafo con el texto "Lorem ipsum dolor sit amet, consectetur adipisicing elit".

const container = document.querySelector(".container");

container.innerHTML =
  '<h1>Lorem ipsum</h1><img src="http://via.placeholder.com/350x150" alt="placehoder"/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
