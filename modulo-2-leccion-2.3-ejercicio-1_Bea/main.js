'use strict';

// Pinta tres elementos li dentro de una lista ul con la información de gatitos: un nombre y una foto, los obtendremos a partir de los siguientes datos:
//Para añadir cada uno de los elementos utiliza la propiedad innerHTML y la interpolación de cadenas.

console.log('holi')

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogOne = document.querySelector('.dog__one')
const dogTwo = document.querySelector('.dog__two')
const dogThree = document.querySelector('.dog__three')

dogOne.innerHTML = `<img src=${firstDogImage} alt="dog image">` + firstDogName;

dogTwo.innerHTML = `<img src=${secondDogImage} alt="dog image">` + secondDogName;

dogThree.innerHTML = `<img src=${thirdDogImage} alt="dog image">` + thirdDogName;