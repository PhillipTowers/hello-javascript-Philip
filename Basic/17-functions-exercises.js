/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function numeros(numero1, numero2) {
        console.log(numero1 + numero2);
}
    numeros(2,2);
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let arraynumeros = [1, 2, 3, 4, 5];

function numeroMayor(arraynumeros) {
    let numeroEncontrado = arraynumeros[0]; // Inicializa con el primer número del array

    for (let i = 1; i < arraynumeros.length; i++) { // Empieza desde el segundo elemento
        if (arraynumeros[i] > numeroEncontrado) { // Compara el número actual con numeroEncontrado
            numeroEncontrado = arraynumeros[i]; // Si es mayor, actualiza numeroEncontrado
        }
    }

    return numeroEncontrado; // Devuelve el mayor número encontrado
}

console.log(numeroMayor(arraynumeros)); // Llama a la función y muestra el resultado

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let mensaje = "mainkra";

function vocales(cadenadetexto){
    const vocalesMainkra = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contadorVocales = 0;

    for (let i = 0; i < cadenadetexto.length; i++ ){

        if (vocalesMainkra.includes(cadenadetexto[i]))
            contadorVocales++;
    }
    return contadorVocales
}
console.log(vocales(mensaje))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayusculas(array1) {
    let nuevoArray = [];

    for (let i = 0; i < array1.length; i++) {
        nuevoArray.push(array1[i].toUpperCase()); // Convierte a mayúsculas y añade al nuevo array
    }

    return nuevoArray; // Devuelve el nuevo array con todas las cadenas en mayúsculas
}
console.log(mayusculas(vocalesMainkra)); // Llama a la función y muestra el array en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado