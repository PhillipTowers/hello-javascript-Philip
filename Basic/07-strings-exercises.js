/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto
let saludo = "heyy!!"
let tarkusgreetings = saludo + " el caballero tarkus esta aqui para usted"
console.log(tarkusgreetings)

// 2. Muestra la longitud de una cadena de texto
console.log(tarkusgreetings.length)
// 3. Muestra el primer y último carácter de un string
console.log(tarkusgreetings[0])
console.log(tarkusgreetings[46])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(tarkusgreetings.toUpperCase())
console.log(tarkusgreetings.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let mainkra = ` esto
es una 
cadena de texto mainkra
`
console.log(mainkra)
// 6. Interpola el valor de una variable en un string
let sexygirl = "panchaFapera"
let mensajeApancha = "deja de gatillarte araña"
console.log(`fran, ¡${mensajeApancha}! ¡${sexygirl}!`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(mensajeApancha.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(mensajeApancha.includes("araña"))
// 9. Comprueba si dos strings son iguales
console.log(mensajeApancha == tarkusgreetings)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(mensajeApancha.length == tarkusgreetings.length)
