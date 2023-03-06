'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://dev.adalab.es/gato-siames.webp';

//1.Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.

const avatar = document.querySelector('.user__avatar')

avatar.src = userAvatar

console.log(avatar.src)

//2. Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!

// let userAvatar = '';

//3.Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
//si tenemos el avatar del usuario se muestre este.
//si no tenemos datos del avatar del usuario, se muestre el avatar por defecto

// if (userAvatar === '') {
//   avatar.src = DEFAULT_AVATAR
// } else { avatar.src = userAvatar }

avatar.src = userAvatar || DEFAULT_AVATAR;

//NOTA: En este ejercicio aún no vamos a usar condicionales if/else, tenemos que apoyarnos en el operador OR para asignar al atributo src de la etiqueta img un valor u otro ;)

