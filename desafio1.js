"use string"
/*console.log("mensaje en consola");
document.write("mensaje en interfaz de usuario");
alert("mensaje en mensaje de emergencia");*/

//hacer un programa que salude 
/*console.log("hola");
document.write("hola");*/

//hacer un programa que salude por nombre si no recibe nombre solo saludar 
/*const nombreUsuario= prompt( "ingrese su nombre de usuario")
switch (nombreUsuario){
    case "":
        document.write("hola" )
      break;
      default:
        document.write("hola "+ nombreUsuario)
      break;
}*/

// como colocar el codigo y numero del pais
/*let telefono =3128201532;
let codigo=57;
console.log=(telefono);
console.log=(typeof telefono);
telefono= String(telefono);
console.log(telefono);
console.log(typeof telefono);
codigoPais = codigoPais.toString()*/

//hacer un programa que pida dos numeros al usuario y los sume
/*let numero1= prompt ("ingrese numero 1");
let numero2= prompt("ingrese numero 2");
numero1= +numero1;
numero2= +numero2;

let resultado= numero1 + numero2;
document.write(resultado);
console.log (resultado);*/

//otra forma 
/*const numero1 = Number(prompt('Ingrese el primer número'));
const numero2 = parseInt(prompt('Ingrese el segundo número'));
console.log(numero1 + numero2);
document.write(numero1 + numero2);
document.write(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`);*/





// hacer un programa que pida aparte nombre y a parte el apellido y muestre el nombre completo.
/*const nombre= prompt ("ingrese su nombre ");
const apellido= prompt("ingrese su apellido ");
const nombreCompleto = nombre + " " + apellido ;
document.write(nombreCompleto);
console.log(nombreCompleto);*/
// otra forma 

/*const nombre= prompt ("ingrese su nombre ");
const apellido= prompt("ingrese su apellido ");
console.log(nombre + " " + apellido);
//document.write(nombre + " " + apellido );*/

// interpolacion de variables 
/*document.write(´${nombre} ${apellido}´);*/

//hacer un programa que reciba del usuario un numero y muestre si el numero ingresado  es cero  de otra manera que muestre  si es positivo o si es negativo 

/*const numero =prompt ("ingrese un numero");
console.log(numero);

if(numero == 0){
  document.write("el numero es cero");
} else if (numero > 0) {
  document.write("el numero es positivo");
} else {
  document.write("el numero es negativo");
}*/

// Hacer un programa que reciba del usuario dos numeros y muestre cual es el numero mayor y cual es el numero mayor 

/*const numero1 = prompt ( " ingrese un numero 1 ");
const numero2 = prompt ( " ingrese un numero  2");
if (numero1 > numero2){
document.write(" el numero mayor es: " +  numero1);
document.write("el numero es menor: " + numero2);
} else if (numero1 < numero2) {
  document.write("el numero es menor:"  + numero2);
  document.write("el numero es mayor:"  + numero1);
} else{
  document.write("los numeros son iguales"  + numero1);
}*/
 
//Hacer un programa que reciba del usuario un número y muestre si el número ingresado es cero, de otra manera que muestre si es positivo o si es negativo.
/*let numero = Number(prompt('Ingrese un número'));*/
//console.log(isNaN(numero));
/*console.log(numero);
if (isNaN(numero)) {
  document.write('El valor ingresado no es un número');
} else {
  if (numero == 0) {
    document.write('El número ingresado es cero');
  } else if (numero > 0) {
    document.write('El número ingresado es positivo');
  } else {
    document.write('El número ingresado es negativo');
  }
}*/


/*const nombreUsuario= prompt( "ingrese su nombre de usuario");
switch (nombreUsuario){
    case "":
        document.write("hola" )
      break;
      default:
        document.write("hola "+ nombreUsuario)
      break;
}*/

//hacer un programa que salude por nombre si no recibe nombre solo saludar 
/*const nombreUsuario= prompt( "ingrese su nombre de usuario");
document.write("hola"+ " " + nombreUsuario);
if (isNaN(nombreUsuario)){
  document.write("hola");
}else if (isNaN(nombreUsuario )){
  document.write("error");
} else {
  document.write("error escriba su nombre de nuevo");
}*/



const nombreUsuario= prompt( "ingrese su nombre de usuario");
if (nombreUsuario);
if (!isNaN(nombreUsuario)){
  document.write("el nombre ingresado no es un nombre ")
}else {
  document.write("hola"+ nombreUsuario );
}
if ("")  {
document.write("hola");
}


//hacer un programa que salude por nombre si no recibe nombre solo saludar 
/*const nombreUsuario= prompt( "ingrese su nombre de usuario")
switch (nombreUsuario){
    case "":
        document.write("hola" )
      break;
      default:
        document.write("hola "+ nombreUsuario)
      break;
}*/

let nombre1 = prompt("Ingrese su  primer nombre");
console.log(isNan(nombre1));
if (isNaN(nombre1)){
  document.write('Los caracteres que ingreso no coinciden');
}