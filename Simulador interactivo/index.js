alert("Simulador de precio FOB")

function validar (num){
    while(isNaN(num) || num == null || num == ""){
        num = Number(prompt("ingrese un valor numerico válido"));
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
    alert(`Su precio FOB es : $ ${sumaGastos}`)
}






