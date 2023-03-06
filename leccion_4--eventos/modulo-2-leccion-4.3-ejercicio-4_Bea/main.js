'use strict';

// Hemos preparado un HTML con tres tarjetas. Al pinchar en un elemento del listado tenemos que:
// Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
// Modificar el texto del span .favorite sustituyéndolo por 'Quitar' si en ese momento contiene 'Añadir', o por 'Añadir' si contiene 'Quitar'.

const isra = document.querySelector('.isra')
const tuerto = document.querySelector('.tuerto')
const nasi = document.querySelector('.nasi')

isra.addEventListener('click', () => {
  if (isra.classList.contains('teacher--selected')) {
    isra.classList.remove('teacher--selected')
  }
  else { isra.classList.add('teacher--selected') }
})