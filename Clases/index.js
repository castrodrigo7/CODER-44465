/* var nombre = "camila";
let edad = 45;
const ALTURA = 180;
let numeroUno;

console.log("aca va la altura ",ALTURA); */
/* 
let nombre = "andres"
let saludo = "Hola"

let mensaje = saludo + " " + nombre + " todo bien que haces?"
console.log(mensaje)

let mensaje1 = `${saludo} ${nombre} todo bien que haces?`
console.log(mensaje1); */

/* let nombre = prompt("ingrese su nombre");
console.log(nombre);
alert(nombre); */

/* let number1 = parseFloat(prompt("ingrese un numero"));
let number2 = parseFloat(prompt("ingrese otro numero"));

let suma = number1 + number2;

alert(suma); */

/* let numero = parseFloat(prompt("ingrese un numero"));

for(let index = 0; index < 8; index ++){
    let resultado = numero * index;
    let mensaje = `${numero} * ${index} = ${resultado}`;
    alert(mensaje);

} */
/* 
for(let turno = 1; turno <= 7: turno++){
    let nombre = prompt("ingrese su nombre")
} */
/* let usuario = prompt("Ingrese el usuario");
let password = prompt("Ingrese la contraseña");
while ((usuario != "pepito") || (password != "contraseña")) {
    alert("Acceso incorrecto");
    usuario = prompt("Ingrese el usuario");
    password = prompt("Ingrese contraseña");
} 
alert("Acceso correcto"); */


/* let suma = (a, b) => { return a + b };
let resta = (a, b) => { return a - b };
console.log( suma(15,20) );
console.log( resta(15,5) ); */


/* 
let producto = Number(prompt("ingrese el precio del producto"));
let envio = Number(prompt("ingrese el costo del envio"));
function calculaCosto(){
    
}
switch (){
    case "e" || "E":

} */

alert("Simulador de precio FOB")

/* function validar(valor) {
    let intentos = 0;

    while (isNaN(valor) && intentos <= 1) {
        valor = prompt("ingrese nuevo valor");
        intentos++;
        if (!isNaN(valor)) {
            return Number(valor);
        }
        if (intentos == 2) {
            return false;
        }
    }
    return Number(valor);
} 
 */
/* function validar(num) {
    while(isNaN(num) || num == null || num == ""){
        num = prompt("ingrese un valor numerico válido");
        if(!isNaN(num) && num != null && num != ""){
            return Number(num);
        }else{
            alert("no es un dato válido");
        }
    }
    return Number(num);
}

let precioProd = validar(Number(prompt("ingrese el precio del producto")));
let envioInt = validar(Number(prompt("ingrese el costo del envio interno")));
let gastoAd = validar(Number(prompt("ingrese los gastos aduaneros")));

let suma = (a,b,c) => a + b + c;
let sumaGastos = suma(precioProd,envioInt,gastoAd);

let costoSeg = (a) => a * 1.1;

let opcion = prompt("¿Existen gastos de seguro? \n Digite cualquier caracter si existen o aceptar en caso contrario");

if(opcion != ""){
    let precioFob = costoSeg(sumaGastos);
    alert(`Su precio FOB es : $ ${precioFob}`)
}else{
    alert(`Su precio FOB es : $ ${sumaGastos}`) */
}






