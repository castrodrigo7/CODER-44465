class productos {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = Number(precio);
        this.stock = stock;
    }
}

alert("Sistema de ingreso de productos")

const arrayProductos = [];

do{
    var comprobacion = prompt("Ingrese la letra P para agregar un producto o cualquier otra acción en caso contrario").toLowerCase();
    if (comprobacion === "p"){
        let nombreP = prompt("Ingrese el nombre del producto");
        let idP = prompt("Ingrese el código del producto");
        let precioP = prompt("Ingrese el precio del producto");
        let stockP = prompt("Ingrese la cantidad de productos disponibles");
        arrayProductos.push(new productos(idP, nombreP, precioP, stockP));
        
    }else{
        break;
    }
}while(comprobacion === "p");

do{
var opcion = parseInt(prompt(`Ingrese la opcion que desee:\n 1-Mostrar producto\n 2-Filtrar producto\n 3-Actualizar precios\n 4-Eliminar producto\n 0-Salir`));

switch(opcion){
    case 1:
        let nombre = prompt("Ingrese el nombre del producto a mostrar");
        let encontrado = arrayProductos.find((producto) => producto.nombre === nombre);
        if (encontrado != undefined){
        let mostrar = `
        Código: ${encontrado.id}
        Producto: ${encontrado.nombre}
        $${encontrado.precio}
        Cantidad: ${encontrado.stock}
        `;
        alert(mostrar);
        }else{
            alert("producto no encontrado")
        }
        break;
    case 2:
        let precio = parseInt(prompt("Ingrese el valor minimo"));
        const filtrados = arrayProductos.filter((producto) => producto.precio > precio);
        if (filtrados != undefined){
        filtrados.forEach((item) => {
        let mostrar = `
        Código: ${item.id}
        nombre: ${item.nombre}
        $${item.precio}
        Cantidad: ${item.stock}
        `;
        alert(mostrar);
        });
        }else{
            alert("producto no encontrado")
        }
        break;
    case 3:
        let prod = prompt("Ingrese el producto a aumentar")
        let aumento = Number(prompt("Ingrese el porcentaje a aumentar sobre 100, ej.: 50% => 0.5"));
        if (aumento > 0 && aumento <= 1){
        let precioActualizado = arrayProductos.map(item => {
            return {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio * (1 + aumento)
            };
        });
        alert(precioActualizado);
        }else{
            alert("ingresar un numero entre 0 y 1")
        }
        break;
    case 4: 
        let name = prompt("Ingrese el producto a eliminar")
        let indice = arrayProductos.indexOf(name);
        if(indice != -1){
            arrayProductos.splice(indice, 1);
            alert("el producto se elimino correctamente");
        }else{
            alert("producto no encontrado")
        }
        break;
    case 0:
        break;
    default:
        alert("Ingrese una opcion de la lista por favor");
        break;

}
}while(opcion != 0);