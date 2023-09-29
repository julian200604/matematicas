//ejercicio 1


/*let edad = prompt("Ingrese su edad");

let mayoredad = 18;

if (edad >= mayoredad) {
    alert("Eres mayor de edad");
}
else {
    alert("Eres menor de edad");
}*/


//ejercicio 2

/*let nota1 = parseFloat(prompt("Ingrese su calificación del 1 al 10"));
let nota2 = parseFloat(prompt("Ingrese su calificación del 1 al 10"));
let nota3 = parseFloat(prompt("Ingrese su calificación del 1 al 10"));

let promedio = parseInt(nota1 + nota2 + nota3)/3;

if (promedio > 6){
    alert("Aprobaste con un promedio de " +promedio)
}
else{
    alert("Reprobaste con un promedio de " +promedio)
}*/


//ejercicio 3 

/*let numeroA = parseFloat(prompt("ingrese un número del 1 al 100"));
let numeroB = parseFloat(prompt("ingrese un número del 1 al 100"));

if (numeroA < numeroB) {
    alert(numeroA + " es menor que " + numeroB );
}
else if(numeroA <= numeroB){
    alert(numeroA + " es igual que " + numeroB);
}
else {
    alert(numeroA + " es mayor que " + numeroB);
}*/


//ejercico 4

/*let numero1 = parseFloat(prompt("ingresa el primer número"));
let numero2 = parseFloat(prompt("ingresa el segundo número"));

if (numero1<numero2){
    alert("en orden ascendente " + numero1 + "," + numero2);
}
else if(numero1>numero2){
    alert("en orden ascendente " + numero2 + "," + numero1);
}
else{
    alert("los numeros son iguales " + numero1);
}*/


//ejercicio 5

/*let peso = prompt("ingrese su peso");

pesoN = 40;

if(peso<=40){
    alert("persona baja de peso")
}
else if(peso>71){
    alert("persona con sobrepreso")
}
else{
    alert("persona peso promedio")
}*/


//ejercicio 6

/*let numero = prompt("escriba un número");
 
numero = parseInt(numero)

switch (numero) {

    case 1: 
    alert("Día "+numero+": lunes" );
    break;
    case 2: 
    alert("Día "+numero+": martes" );
    break;
    case 3: 
    alert("Día "+numero+": miercoles" );
    break;
    case 4: 
    alert("Día "+numero+": jueves" );
    break;
    case 5: 
    alert("Día "+numero+": viernes" );
    break;
    case 6: 
    alert("Día "+numero+": sabado" );
    break;
    case 7: 
    alert("Día "+numero+": domingo" );
    break;
    default:
        alert("escribio un número fuera del rango, escriba un número entre 1 y 7")


}*/


//ejercicio 7

/*let montocompra = prompt("ingrese el valor de su compra");

montocompra = parseFloat(montocompra);

let montofinal;

if(montocompra > 1000){
    montofinal = montocompra * 0.80;
}
else{
    montofinal = montocompra * 0.95;
}
alert("el monto final a pagar es: $"+montofinal)*/



//ejercicio 8

/*let horas = parseInt(prompt("Ingrese la cantidad de horas que trabajadas en la semana"));

if(horas<=40){
    salario=horas*16000;
}
else{
    salario = horas*20000
}


alert("su salario semanal es: $"+salario);*/


//ejercicio 9
/*let nombre1n = prompt("ingrese nombre");
let nombre1 = parseInt(prompt("edad"));
let nombre2n = prompt("Ingrese nombre");
let nombre2 = parseInt(prompt("edad"));

if (nombre1>nombre2){
    alert(nombre1 + " " + nombre1n + " Es mayor que " + nombre2 + " " + nombre2n);
}
else{
    alert(nombre2 + " " + nombre2n + " Es mayor que " + nombre1 +" "+nombre1n);
}*/

//ejercicio 10

/*let compra = prompt("Ingrese cuantas camisas compro");

let camisas = 3;

if (compra > 3){
    alert("Total de descuento: " + 20 + "%")
}
else {
    alert("Total de descuento: " +10 + "%")
}*/


//ejercicio 11

/*let numero1 = parseInt(prompt("ingrese 1 número"));
let numero2 = parseInt(prompt("ingrese 1 número"));

let multiplicación = parseInt(numero1=numero2);
let resta = parseInt()



if(numeros =){
    alert("persona baja de peso")
}
else if(peso>71){
    alert("persona con sobrepreso")
}
else{
    alert("persona peso promedio")*/

    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
    
    let resultado;
    
    if (operacion === "+") {
      resultado = numero1 + numero2;
    } 
    else if (operacion === "-") {
      resultado = numero1 - numero2;
    } 
    else if (operacion === "*") {
      resultado = numero1 * numero2;
    } 
    else if (operacion === "/") {
      resultado = numero1 / numero2;
    } 
    else {
      
      alert("Operación no válida");
    }
    
    
    if (resultado !== undefined) {
      alert("El resultado es: " + resultado);
    }