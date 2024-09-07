/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
let animales = ["cocodrilo", "gato", "condor", "serpiente", "escorpión"];
// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("water monitor")
animales.push("tortuga")
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(3, 1)
console.log(animales)
// 4. Crea un set que almacene cinco libros
libros = new Set(["El señor de los anillos","Harry Potter","Mein Kampf","Star Wars Darth Plagueis","El hobbit", "Crepúsculo" ])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add("Narnia")
libros.add("Narnia")

for (let libro of libros) {
    console.log(libro);
  }
// 6. Elimina uno concreto a tu elección
libros.delete("Crepúsculo")

/*for (let libro of libros) {
    console.log(libro);
  }
*/    
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  ["1", "enero"],
  ["2", "febrero"],
  ["3", "marzo"],
  ["4", "abril"],
  ["5", "mayo"], // Corregido a "mayo"
]);
console.log(meses);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has("5")) {
  console.log(meses.get("5")); // Imprime "mayo"
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myMesesVerano = ["diciembre", "enero", "febrero"];
meses.set('myMesesVerano', myMesesVerano);
console.log(meses.get('myMesesVerano'));
console.log(meses);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let listado = ["comida", "agua", "luz"];

let mySet = new Set(listado);
console.log(mySet);

let mapa = new Map();
mapa.set("recursos", mySet); // Guarda el Set
console.log(mapa);