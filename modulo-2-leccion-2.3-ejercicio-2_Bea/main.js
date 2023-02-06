'use strict'

// Haz el código necesario para crear un programa que pinte en HTML lo siguiente:
// El nombre de mi compañera es Leticia Fernández Sánchez, y está compuesto por 23 caracteres,
// remplazando Leticia Fernández Sánchez por el nombre de nuestra compañera y 23 por la longitud de la cadena con su nombre.

console.log('holi')

const myName = 'Bea Figueroa Tielas'
const text = document.querySelector('.text')

text.innerHTML = `Mi nombre es ${myName} y está compuesto por ${myName.length} caracteres.`