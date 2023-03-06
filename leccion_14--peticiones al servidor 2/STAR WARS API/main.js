'use strict'

// Ahora que conocemos mejor el API de Star Wars vamos a hacer una sencilla web usándolo. En la web aparece una caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.

const input = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btnSearch');
const list = document.querySelector('.js-list');
let characters = []

function render() {
  list.innerHTML = '';
  for (const eachCharacter of characters) {
    list.innerHTML += `<li>${eachCharacter.name} - ${eachCharacter.gender}</li>`
  }
}

const savedCharacters = localStorage.getItem('character')


function handleClickSearch() {
  if (input.value === '') {
    list.innerHTML = `<li>Busca un personaje de Star Wars</li>`
  } else {
    if (savedCharacters) {
      console.log('saved')
      render()
    } else {
      fetch(`https://swapi.py4e.com/api/people/?search=${input.value}`)
        .then(response => response.json())
        .then((data) => {
          characters = data.results.map((person) => ({
            name: person.name,
            gender: person.gender
          }))
          render()
          console.log('new');
          localStorage.setItem('character', JSON.stringify(characters))
        }
        )
    }
  }
}

btnSearch.addEventListener('click', handleClickSearch)

/////////////////////////////

// VOY A INTENTAR PINTAR TODAS LAS PÁGINAS A LA VEZ

// const allList = document.querySelector('.js-allList')
// let allCharacters = []

// for (let i = 1; i < 10; i++) {
//   fetch(`https://swapi.py4e.com/api/people/?page=${i}`)
//     .then(response => response.json())
//     .then((data) => {
//       allCharacters = data.results.map((person) => ({
//         name: person.name,
//         birth: person.birth_year
//       }))
//       console.log(allCharacters);
//       allCharacters.sort((a, b) => a.name.localeCompare(b.name))
//       for (const eachCharacter of allCharacters) {
//         allList.innerHTML += `<li>${eachCharacter.name} - ${eachCharacter.birth_year}</li>`
//       }
//     })
// }