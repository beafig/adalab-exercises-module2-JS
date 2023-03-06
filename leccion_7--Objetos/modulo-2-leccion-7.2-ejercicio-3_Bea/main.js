'use strict';

// Crea un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación sigue los siguiente pasos:

const user = {};
const job = 'developer';

// Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):
// Añades una propiedad llamada firstName y dale un valor.
user.firstName = 'Bea';

// Añade una propiedad llamada lastName y le dale un valor.
user.lastName = 'Figueroa';

// Añade una propiedad llamada age y le dale un valor numérico.
user.age = 33;

// Añade una propiedad job a la que dale el valor de la constante job.
user.job = job

// Comprueba que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto.
console.log(user)

// Cambia el nombre del usuario por otro distinto.
user.firstName = 'Marta';

// Aumenta en 1 la edad del usuario.
user.age = user.age + 1

// Comprueba de nuevo que todo sigue funcionando correctamente

console.log(user)