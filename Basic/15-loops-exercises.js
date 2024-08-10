/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
/*for (var i = 0; i <= 20; i++) {
    console.log(i);
}*/
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0; // Inicializa la variable suma

// Usa un bucle for para iterar del 1 al 100
for (let numero = 1; numero <= 100; numero++) {
    suma += numero; // Suma cada número a la variable suma
}

console.log(suma); // Muestra el resultado final

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 0; i <= 50; i += 2) {
    console.log(i); // Imprimirá 0, 2, 4, 6, 8, 10
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["felipe", "claudia", "arami", "francisca", "crishnna", "jennifer", "renata"]; 

/*for (let i = 0; i < nombres.length; i++) {
    console.log(`el nombre es: ${nombres[i]}`)
}
*/
/*let i = 0
while (i < nombres.length) {
    console.log(`Hola ${nombres[i]}`)
    i++
}*/

for (let nombre of nombres) {
    console.log(nombre)
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
// La cadena de texto a evaluar
const texto = "Hola, ¿cómo estás?";

// Variable para contar las vocales
let contador = 0;

// Array de vocales
const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// Bucle para recorrer cada carácter de la cadena
for (let i = 0; i < texto.length; i++) {
    // Verificar si el carácter actual es una vocal
    if (vocales.includes(texto[i])) {
        contador++;
    }
}
console.log(`El número de vocales en la cadena es: ${contador}`);// Imprime el número de vocales

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let mynumbers = [1,2,3,4,5];
let multiplicacion = 1;
for (let i = 0; i < mynumbers.length ; i++) {
    multiplicacion *= mynumbers[i] 
    //console.log(multiplicacion);
}
console.log(multiplicacion);
/*for (let numero = 1; numero <= 100; numero++) {
    suma += numero; // Suma cada número a la variable suma
}
*/    
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tablaMultiplicar = 5;
let resultado = 0;
for (let i = 0; i <= 10; i++){
    resultado = i * tablaMultiplicar;
    console.log(resultado)
}
// 8. Usa un bucle para invertir una cadena de texto
const despedida = " hasta luego!"
let resultado2 = " "
for (let i = despedida.length - 1; i >= 0; i--) {
    resultado2 += despedida[i];
}
console.log(resultado2);
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0; // Primer número de Fibonacci
let b = 1; // Segundo número de Fibonacci

console.log(a); // Imprime el primer número de Fibonacci
console.log(b); // Imprime el segundo número de Fibonacci

for (let i = 2; i < 10; i++) {
    let c = a + b; // Calcula el siguiente número en la secuencia
    console.log(c); // Imprime el siguiente número de Fibonacci
    a = b; // Actualiza 'a' para ser el número anterior
    b = c; // Actualiza 'b' para ser el número actual
}
/* variante con funcion
function fibonacci(n) {
    if (n === 0) return 0; // Caso base: si n es 0, el resultado es 0
    if (n === 1) return 1; // Caso base: si n es 1, el resultado es 1
    
    let a = 0; // Primer número de Fibonacci
    let b = 1; // Segundo número de Fibonacci
    let c;     // Variable para almacenar el siguiente número en la secuencia
    
    for (let i = 2; i <= n; i++) {
        c = a + b; // Calcula el siguiente número en la secuencia
        a = b;     // Mueve el valor de 'b' a 'a'
        b = c;     // Mueve el valor de 'c' a 'b'
    }
    
    return b; // 'b' contiene el n-ésimo número de Fibonacci
}
console.log(fibonacci(10)); // Imprime 55
*/ 

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosmainkra = [5, 10, 15, 20, 25];
let numerosmayores = [];

for (let i = 0; i < numerosmainkra.length; i++) {
    if (numerosmainkra[i] > 10) { // Verifica si el valor en el array es mayor a 10
        numerosmayores.push(numerosmainkra[i]); // Agrega el valor al nuevo array
    }
}

console.log(numerosmayores); // Imprime el array de números mayores a 10

