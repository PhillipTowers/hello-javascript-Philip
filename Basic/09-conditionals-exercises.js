/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myage = 26
let edadAdulta = 18
let edadFaltante = 18 - edadAdulta
if (myage == 26 ) {
    console.log("has perdido tiempo felipe")
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let username = "killsan"
let password = "thichondriuz"
if (password == "thichondriuz" && username == "killsan") {
    console.log("inicio de sesion exitoso")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -1

if (numero >  0){
    console.log("el numero es positivo")
} else if (numero < 0){
    console.log("el numero es negativo")
} else 
    console.log("el numero es 0")

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
if (edadAdulta >= 18) {
    console.log("eres mayor de edad");
} else {
    console.log("eres menor de edad");
    console.log("te falta " + edadFaltante);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const persona = myage >= edadAdulta ? "adulto" : "menor"
console.log(persona)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 2; 

if (mes >= 3 && mes <= 5) {
    estacion = "Otoño";
} else if (mes >= 6 && mes <= 8) {
    estacion = "Invierno";
} else if (mes >= 9 && mes <= 11) {
    estacion = "Primavera";
} else if ((mes >= 1 && mes <= 2) || mes === 12) {
    estacion = "Verano";
} else {
    estacion = "Número de mes incorrecto";
}

console.log(estacion);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dias;

if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    dias = 31;
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    dias = 30;
} else if (mes === 2) {
    let year = 2024; 
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        dias = 29; // Año bisiesto
    } else {
        dias = 28; // Año no bisiesto
    }
} else {
    dias = "Número de mes incorrecto";
}

console.log(dias);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = ""
switch (idioma) { 
    case "deutsch":
        console.log("Hallo, wie geht es dir ?")
        break;
    case "english":
        console.log("hello, how are you ?")
        break;
    case "italian":
        console.log("Ciao, come stai?")
        break;
    default:
        console.log("Hola, ¿Como estas?")
               
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 3:
    case 4:
    case 5:
        estacion = "Otoño";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Invierno";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Primavera";
        break;
    case 12:
    case 1:
    case 2:
        estacion = "Verano";
        break;
    default:
        estacion = "Número de mes incorrecto";
}

console.log(estacion);
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let año = 2024; 
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dias = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dias = 30;
        break;
    case 2:
        if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
            dias = 29; // Año bisiesto
        } else {
            dias = 28; // Año no bisiesto
        }
        break;
    default:
        dias = "Número de mes incorrecto";
}

console.log(dias);
