'use strict';

//Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. Estos son sus datos:

// María, 29 años, diseñadora
// Lucía, 31 años, ingeniera química
// Susana, 34 años, periodista
// Rocío, 25 años, actriz
// Inmaculada, 21 años, diseñadora

// 1.Crea una estructura de datos en JavaScript para manejar estos datos, usa arrays y objetos para crearla.

const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera'
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista'
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora'
  }
]
//2. Crea varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers. Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.

//Una función countAdalabers que devuelve el número de adalabers en el listado.

function countAdalabers(ada) {
  return ada.length
}

console.log(countAdalabers(adalabers))

//Una función averageAge que devuelve la media de edad de listado

let average = 0;

function averageAge(ada) {
  for (let i = 0; i < ada.length; i++) {
    average += ada[i].age
  }
  //const average = (ada[0].age + ada[1].age + ada[2].age + ada[3].age + ada[4].age) / ada.length
  return average / ada.length;
}


console.log(parseInt(averageAge(adalabers)))

// Una función theYoungest que devuelve el nombre de la adalaber más joven.


function theYoungest(ada) {
  let minAge = ada[0].age;
  for (let i = 1; i < ada.length; i++) {
    if (ada[i].age < ada[0].age) {
      let minAge = ada[i].age
    }
    console.log(i)
    return ada[i].name
  }
}
console.log(theYoungest(adalabers))

// Una función countDesigners que devuelve el número de adalabers que son diseñadoras.

let countDesign = 0

function countDesigners(ada) {
  for (let i = 0; i < ada.length; i++) {
    if (ada[i].job === 'diseñadora') {
      countDesign += 1
    }
    return countDesign
  }
}

console.log(countDesigners(adalabers))