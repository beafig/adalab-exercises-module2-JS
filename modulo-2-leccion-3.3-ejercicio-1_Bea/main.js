'use strict';

//Crea un programa de control de acceso al sistema que solo permita el acceso a las usuarias Maria y Luisa.
//1. Para ello crea una variable que almacene uno de los nombres.
// 2.Posteriormente, si el nombre es Maria o Luisa muestra el mensaje "Bienvenida, (el nombre aquí)".
//3. Si el nombre es diferente deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".

const userName = document.querySelector('.name').value

console.log(userName)

const text = document.querySelector('.text')

if (userName === 'Maria' || userName === 'Luisa') {
  text.innerHTML = `Bienvenida, ${userName}`
} else { text.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado' }




