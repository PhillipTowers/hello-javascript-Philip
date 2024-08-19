/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "felipe",
    edad: 26,
    carrera: "programador",
    jugar: function() {
        console.log("felipe va a jugar war thunder");
    }
}
// 2. Accede y muestra su valor
console.log(persona.carrera)
// 3. Agrega una nueva propiedad
persona.juegoFav = "skyrim"
console.log(persona)
// 4. Elimina una de las 3 primeras propiedades
delete persona.edad
console.log(persona)
// 5. Agrega una función e invócala
persona.jugar()
// 6. Itera las propiedades del objeto

for (let llave in persona) {
     console.log(llave + ": " + persona[llave])
    
}

// 7. Crea un objeto anidado
let persona2 = {
    name: "hamg",
    age: 27,
    alias: "hamon",
    manocambiada: function () {
        console.log("hamg se va por una mano cambiada")
    },
    utr: {
        rol: "sublider",
        exp: 11,
        tiempo: function () {
            console.log(`hamon tiene ${this.age} ta viejito.`)
        }
    }
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(persona2.utr.exp)
// 9. Comprueba si los dos objetos creados son iguales
console.log(persona == persona2)
console.log(persona === persona2)

console.log(persona.name == persona2.name)

// 10. Comprueba si dos propiedades diferentes son iguales
const persona1 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Santiago"
};

const persona3 = {
    nombre: "Pedro",
    edad: 30,
    ciudad: "Santiago"
};

// Comparando la propiedad 'nombre' de persona1 con la de persona2
console.log(persona1.nombre === persona3.nombre); // Debería devolver false

// Comparando la propiedad 'edad' de persona1 con la de persona2
console.log(persona1.edad === persona3.edad); // Debería devolver true

// Comparando la propiedad 'ciudad' de persona1 con la de persona2
console.log(persona1.ciudad === persona3.ciudad); // Debería devolver true
