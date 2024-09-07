/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/
let numero1 = 10
let numero2 = 20
// 1. Crea una variable para cada operación aritmética
/*console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)
console.log(numero1 % numero2)
console.log(numero1 ** numero2)

numero1++
console.log(numero1)
numero2--
console.log(numero2)*/
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log(numero1 > numero2) // Mayor que
console.log(numero1 < numero2) // Menor que
console.log(numero1 >= numero2) // Mayor o igual que
console.log(numero1 <= numero2) // Menor o igual que
console.log(numero1 == numero2) // Igualdad por valor
console.log(numero1 == 6)
console.log(numero1 == "6")
console.log(numero1 == numero1)
console.log(numero1 === numero1) // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(numero1 === 6)
console.log(numero1 === "6")
console.log(numero1 != 6) // Desigualdad por valor
console.log(numero1 !== "6") // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación
console.log(8 > 4 && 4 > 2)
console.log(2 < 4 && 4 < 8)
console.log(2 < 8 && 8 > 5)
console.log(5 > 3 && 3 > 1)
console.log(6 < 8 && 8 < 10)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(8 < 4 && 4 < 2)
console.log(2 > 4 && 4 > 8)
console.log(2 > 8 && 8 < 5)
console.log(5 < 3 && 3 < 1)
console.log(6 > 8 && 8 > 10)
// 5. Utiliza el operador lógico and
console.log(10 == numero1 && numero1 > 2)
console.log(10 == numero2 && numero1 > 2)
console.log(10 != numero2 && numero1 < numero2)
// 6. Utiliza el operador lógico or
console.log(numero2 != numero1 || numero1 < 2)
console.log(20 == numero1 || numero1 > 2)
console.log(10 != numero2 || numero1 < numero2)
console.log(10 != numero1 || numero1 > numero2)
// 7. Combina ambos operadores lógicos
console.log(7 != 2 || numero2 > 30 && numero1 == numero2)
console.log(12 == numero1 || numero2 > 30 && numero1 == numero2)
// 8. Añade alguna negación
console.log(!(numero1 > 10 && 15 > 10))
console.log(!(5 < 10 || 15 > 20))
// 9. Utiliza el operador ternario
const ismasterskywalker = false
ismasterskywalker ? console.log("tienes el rango de maestro y un puesto en el consejo") : console.log ("tienes un asiento en el consejo pero no te daremos el rango de maestro")
// 10. Combina operadores aritméticos, de comparáción y lógicas
let edad = 18
let añoEstudios = 4
let pazmental = true

if (edad == 18 && añoEstudios >= 4) {
    console.log("Has hecho las cosas perfectamente"); // Mensaje corregido y con punto y coma
    // bloque de código que se ejecuta si la condición es verdadera
} else if (edad >= 18 && añoEstudios <= 4) {
    edad++;
    console.log("Lo estás intentando. Ahora tienes " + edad + ". ¡No pierdas otro año, tú puedes!"); // Mensaje mejorado y con punto y coma
    // bloque de código que se ejecuta si la condición es falsa
} else if (edad < 18 && añoEstudios == 0) {
    console.log("Aún estás libre. Usa tu tiempo con sabiduría."); // Mensaje corregido y con punto y coma
    // bloque de código que se ejecuta si la condición es falsa
}

