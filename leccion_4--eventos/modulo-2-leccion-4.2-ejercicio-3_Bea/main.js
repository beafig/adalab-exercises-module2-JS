'use strict';

// Crea una página HTML con un párrafo con lorem ipsum. Al dar click sobre el párrafo, añade un nuevo párrafo a la página con lorem ipsum.

const text = document.querySelector('.js-text')

text.addEventListener('click', () => {
  text.innerHTML += 'Suspendisse non tortor nisi. Nulla urna metus, porttitor quis enim non, convallis semper lacus. Nulla quis euismod sapien. Quisque eget tellus non mauris ultrices blandit. Nullam turpis sapien, interdum sit amet nisi a, lacinia varius ante. Praesent bibendum lobortis nunc vitae tristique. Etiam enim nunc, lacinia finibus est sed, interdum convallis ex. Donec vehicula malesuada varius. Morbi pulvinar consequat justo, eget ultricies augue efficitur id.'
})

console.log('yeah!!')