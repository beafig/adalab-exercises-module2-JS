'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = "https://elcomercio.pe/resizer/7u44o7-Xp343p_f1ZdPU4YXj6VA=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5V37O2MCDBFA5HXD5EOHBKEIRQ.jpg";

//1.Hagamos la lógica para añadir, desde javascript, la imagen userAvatar a la etiqueta de HTML img.

const avatar = document.querySelector('.user__avatar');
avatar.innerHTML = `${avatar.innerHTML}  src=${userAvatar}`;

console.log(avatar)

// 2. Ahora vamos a plantear que userAvatar pueda no contener una URL porque, por ejemplo, cuando el usuario se registró no encontraba ninguna foto molona y decidió que la subiría en otro momento. Para ello tenemos que cambiar el contenido de userAvatar a comillas vacías let userAvatar = '';. ¡Ahora no debería verse ninguna imagen en la página!

// 3. Vamos a mejorar nuestro programa para que la ficha de usuario tenga una imagen sí o sí, de manera que:
//si tenemos el avatar del usuario se muestre este.
//si no tenemos datos del avatar del usuario, se muestre el avatar por defecto