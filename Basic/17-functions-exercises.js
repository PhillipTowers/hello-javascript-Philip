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
const vocalesMainkra = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
function mayusculas(array1) {
    let nuevoArray = [];
    

    for (let i = 0; i < array1.length; i++) {
        nuevoArray.push(array1[i].toUpperCase()); // Convierte a mayúsculas y añade al nuevo array
    }

    return nuevoArray; // Devuelve el nuevo array con todas las cadenas en mayúsculas
}
console.log(mayusculas(vocalesMainkra)); // Llama a la función y muestra el array en mayúsculas

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(7));  // true
console.log(esPrimo(8));  // false
console.log(esPrimo(11)); // true
console.log(esPrimo(12)); // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const arrayP = ["a", "b", "c", "1", "e", "f", "p", "h", "i"];
const arrayS = ["a", "b", "c", "d", "e", "f", "g"];

function comparacion(arra1, arra2) {
    let listadoNuevo = [];
    for (let i = 0; i < arra1.length; i++) {
        for (let j = 0; j < arra2.length; j++) {
            if (arra1[i] === arra2[j]) {
                listadoNuevo.push(arra1[i]);
                break; // evita los duplicados y que se repita
            }
        }
    }
    return listadoNuevo;
}

console.log(comparacion(arrayP, arrayS)); // Debería devolver ["a", "b", "c", "e", "f"]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const arraNumero = [1, 2, 3, 4, 5, 6];

function numpar(n) {
    let sumaPar = 0; // Inicializa la variable para acumular la suma

    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) { // Verifica si el número es par
            sumaPar += n[i]; // Suma el número par a la acumulación
        }
    }

    return sumaPar; // Devuelve la suma total de los números pares
}

console.log(numpar(arraNumero)); // Debería devolver 12 (2 + 4 + 6)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevado(a){
    let elevado = [];
    for (let i = 0; i < a.length; i++) {
        elevado.push(a[i] ** 2);
        
    }
    return elevado;
}

console.log(elevado(arraNumero));
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function revertirCadena(cadena) {
    // Paso 1: Convertir la cadena en un array de caracteres
    // Paso 2: Invertir el array
    // Paso 3: Unir el array de nuevo en una cadena
    return cadena.split('').reverse().join('');
}

const texto = "ejemplo"; // Cadena de texto en una variable
console.log(revertirCadena(texto)); // Debería devolver "olpmje"

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) { // Empezamos en 2 porque multiplicar por 1 no cambia el resultado
        resultado *= i; // Multiplica el resultado por i en cada iteración
    }
    return resultado; // Devuelve el factorial calculado
}

console.log(factorial(5)); // Debería devolver 120
console.log(factorial(0)); // Debería devolver 1, ya que 0! es 1 por definición
