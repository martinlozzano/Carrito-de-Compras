let total = 0;
let cantidad = 1;

let carrito = [];

let pantalones = [
    { nombre: "Jean Gris c/ rotura", precio: 13000, cantidad: 0 },
    { nombre: "Jogger Bali", precio: 17950, cantidad: 0 },
    { nombre: "Cargo Rainbow", precio: 19800, cantidad: 0 },
    { nombre: "Babucha Rústica", precio: 6500, cantidad: 0 },
];

let bermudas = [
    { nombre: "Bermuda China", precio: 8500, cantidad: 0 },
    { nombre: "Short Rústico Liso", precio: 3500, cantidad: 0 },
    { nombre: "Bermuda Doja Cargo", precio: 17900, cantidad: 0 },
    { nombre: "Short Bitter", precio: 11700, cantidad: 0 },
];

let remeras = [
    { nombre: "Top Joplin", precio: 8650, cantidad: 0 },
    { nombre: "Remera Peeping", precio: 7900, cantidad: 0 },
    { nombre: "Remera Básica", precio: 3500, cantidad: 0 },
    { nombre: "Remera Cambria", precio: 8650, cantidad: 0 },
];

let camisas = [
    { nombre: "Camisa Ollie", precio: 27350, cantidad: 0 },
    { nombre: "Camisa Elastizada Lisa", precio: 9500, cantidad: 0 },
    { nombre: "Camisa Entallada", precio: 7500, cantidad: 0 },
    { nombre: "Camisa Gore", precio: 19100, cantidad: 0 },
];

let camperas = [
    { nombre: "Campera Crop Fossilize", precio: 21850, cantidad: 0 },
    { nombre: "Campera Deportiva 1/2 Estacion", precio: 7500, cantidad: 0 },
    { nombre: "Campera Rústica", precio: 7500, cantidad: 0 },
    { nombre: "Campera Over Rosemary", precio: 17050, cantidad: 0 },
];

function calcularTotal(precio, cantidad){
    return total += (precio * cantidad)
}

function agregarCarrito(prenda, posicion){
    let agregarCantidad = parseInt(prompt("Cantidad a agregar:"))

    if (agregarCantidad > 0){
        if (!carrito.includes(prenda[posicion])){
            carrito.push(prenda[posicion])
        }
        
        prenda[posicion].cantidad += agregarCantidad
    
        calcularTotal(prenda[posicion].precio, agregarCantidad)
        alert("Se agregó '" + prenda[posicion].nombre + "' (x" + agregarCantidad + ") a su carrito de compras.");
    }else if(agregarCantidad === 0){
        alert("No se agregó ningún elemento al carrito.")
    }else{
        alert("Opción inválida.");
    }    
}

function mostrarCarrito(){
    let cadena = "SUBTOTAL: $" + total + "\n\n";
    for (const producto of carrito){
        cadena += producto.nombre + "     (x" + producto.cantidad + ")        " + producto.precio + "\n" + "_".repeat(60) + "\n";
    }

    return cadena
}

function cadenaEliminar(){
    cadena = "¿Que producto desea eliminar? \n\n";
    let i = 1
    for (const producto of carrito) {
        cadena += i + "- " + producto.nombre + " (x" + producto.cantidad + ")\n";
        i++;
    }
    return cadena
}

function eliminarDeCarrito(indice){
    let cantidadEliminar = parseInt(prompt("¿Cuántos desea eliminar?"))

    if(cantidadEliminar > carrito[indice-1].cantidad){
        alert("No puede eliminar más de la cantidad total del producto en el carrito.")
    } else if (cantidadEliminar <= 0){
        alert("No puede eliminar 0 o menos productos del carrito.")
    } else if(cantidadEliminar < carrito[indice-1].cantidad){
        carrito[indice-1].cantidad -= cantidadEliminar
        total -= (carrito[indice-1].precio * cantidadEliminar)

        alert("Se han eliminado " + cantidadEliminar + " " + carrito[indice-1].nombre + "' del carrito.")
    } else if (cantidadEliminar == carrito[indice-1].cantidad){
        carrito[indice-1].cantidad = 0
        total -= (carrito[indice-1].precio * cantidadEliminar)

        alert("El producto '" + carrito[indice-1].nombre + "' se ha eliminado del carrito")

        carrito.splice(indice-1, 1)
    }

    return carrito
}

do {
    let hayCuotas = false
    let esEfectivo = false
    let cantidadCuotas = 0

    opcionTipo = parseInt(prompt("Seleccione que tipo de prenda desea comprar (ingrese número): \n1- Pantalón. \n2- Bermuda. \n3- Remera. \n4- Camisa. \n5- Campera. \n\n8- Ingresar al Carrito \n0- Salir. \n\nSUBTOTAL: $" + Math.round(total)));

    switch(opcionTipo){
        case 1:
            let opcionPantalon = prompt("Seleccione que pantalón desea comprar (ingrese número):   \n1. Jean Gris c/ rotura - ($13.000). \n2. Jogger Bali - ($17.950). \n3. Cargo Rainbow - ($19.800). \n4. Babucha Rústica - ($6.500).")
            
            switch(opcionPantalon){
                case "1":
                    agregarCarrito(pantalones, opcionPantalon - 1);
                    break;
                case "2":
                    agregarCarrito(pantalones, opcionPantalon - 1);
                    break;
                case "3":
                    agregarCarrito(pantalones, opcionPantalon - 1);
                    break;
                case "4":
                    agregarCarrito(pantalones, opcionPantalon - 1);
                    break;
                default:
                    alert("Opción inválida.");
                    break;
            }

            break;

        case 2:
            let opcionBermuda = prompt("Seleccione que bermuda desea comprar (ingrese número):     \n1. Bermuda China - ($8.500). \n2. Short Rústico Liso - ($3.500). \n3. Bermuda Doja Cargo - ($17.900). \n4. Short Bitter - ($11.700).")

            switch(opcionBermuda){
                case "1":
                    agregarCarrito(bermudas, opcionBermuda - 1);
                    break;
                case "2":
                    agregarCarrito(bermudas, opcionBermuda - 1);
                    break;
                case "3":
                    agregarCarrito(bermudas, opcionBermuda - 1);
                    break;
                case "4":
                    agregarCarrito(bermudas, opcionBermuda - 1);
                    break;
                default:
                    alert("Opción inválida.");
                    break;
            }

            break;

        case 3:
            let opcionRemera = prompt("Seleccione que remera desea comprar (ingrese número):       \n1. Top Joplin - ($8.650). \n2. Remera Peeping - ($7.900). \n3. Remera Básica - ($3.500). \n4. Remera Cambria - ($8.650).")
            
            switch(opcionRemera){
                case "1":
                    agregarCarrito(remeras, opcionRemera - 1);
                    break;
                case "2":
                    agregarCarrito(remeras, opcionRemera - 1);
                    break;
                case "3":
                    agregarCarrito(remeras, opcionRemera - 1);
                    break;
                case "4":
                    agregarCarrito(remeras, opcionRemera - 1);
                    break;
                default:
                    alert("Opción inválida.");
                    break;
            }

            break;

        case 4:
            let opcionCamisa = prompt("Seleccione que camisa desea comprar (ingrese número):       \n1. Camisa Ollie - ($27.350). \n2. Camisa Elastizada Lisa - ($9.500). \n3. Camisa Entallada - ($7.500). \n4. Camisa Gore - ($19.100).")
            
            switch(opcionCamisa){
                case "1":
                    agregarCarrito(camisas, opcionCamisa - 1);
                    break;
                case "2":
                    agregarCarrito(camisas, opcionCamisa - 1);
                    break;
                case "3":
                    agregarCarrito(camisas, opcionCamisa - 1);
                    break;
                case "4":
                    agregarCarrito(camisas, opcionCamisa - 1);
                    break;
                default:
                    alert("Opción inválida.");
                    break;
            }

            break;

        case 5:
            let opcionCampera = prompt("Seleccione que campera desea comprar (ingrese número):     \n1. Campera Crop Fossilize - ($21.850). \n2. Campera Deportiva 1/2 Estacion - ($7.500). \n3. Campera Rústica - ($7.500). \n4. Campera Over Rosemary - ($17.050).")
            
            switch(opcionCampera){
                case "1":
                    agregarCarrito(camperas, opcionCampera - 1);
                    break;
                case "2":
                    agregarCarrito(camperas, opcionCampera - 1);
                    break;
                case "3":
                    agregarCarrito(camperas, opcionCampera - 1);
                    break;
                case "4":
                    agregarCarrito(camperas, opcionCampera - 1);
                    break;
                default:
                    alert("Opción inválida.");
                    break;
            }

            break;
        
        case 8:
            alert(mostrarCarrito())

            if (carrito.length > 0){
                let opcionCarrito = prompt("SUBTOTAL: $"+ Math.round(total) + "\n\n¿Cómo desea continuar? \n1- Eliminar producto. \n2- Pagar. \n3- Volver.")
                switch(opcionCarrito){
                    case "1":
                        let productoEliminar = prompt(cadenaEliminar())
                        eliminarDeCarrito(productoEliminar)
                        break;
                    case "2":
                        let opcionEntrega = prompt("Elija la forma de entrega \n1- Retiro en el local. \n2- Envío a domicilio ($2000).");
                
                        switch (opcionEntrega){
                            case "1":
                                break;
                            case "2":
                                total += 2000;
                                break;
                            default:
                                alert("Opción inválida.");
                                break;
                        }
                    
                        if ((opcionEntrega == "1") || (opcionEntrega == "2")){
                            let opcionPago = prompt("Elija un método de pago \n1- Crédito. \n2- Débito/Transferencia bancaria. \n3- Efectivo en el local (15% de descuento). \n\n0- Volver.");
            
                            switch (opcionPago) {
                                case "1":             
                                    let opcionCuotas = prompt("¿En cuantas cuotas desea abonar? \n1. 3(tres) cuotas - ( 17% interés). \n2. 6(seis) cuotas - ( 24% interés). \n3. 12(doce) cuotas - ( 46% interés). \n\n0. Volver.");

                                    cantidadCuotas = opcionCuotas
                                    
                                    switch (opcionCuotas) {
                                        case "1":
                                            total *= 1.17;
                                                alert("Total a pagar en 3 cuotas: $" + Math.round(total))
                                                hayCuotas = true
                                            break;
                                        case "2":
                                            total *= 1.24;
                                                alert("Total a pagar en 6 cuotas: $" + Math.round(total))
                                                hayCuotas = true
                                            break;
                                        case "3":
                                            total *= 1.46;
                                                alert("Total a pagar en 12 cuotas: $" + Math.round(total))
                                                hayCuotas = true
                                            break;
                                        case "0":
                                            break;
                                        default:
                                            alert("Opción inválida.");
                                            break;
                                    }
                                    break;

                                case "2":
                                    alert("Total a pagar con tarjeta de debito o transferencia bancaria: $" + Math.round(total));
                                    break;

                                case "3":
                                    total *= 0.85;
                                    esEfectivo = true
                                    alert("Total a pagar en efectivo: $" + Math.round(total));
                                    break;

                                case "0":
                                    if (opcionEntrega == "2"){
                                        total -= 2000;
                                    }
                                    break;
                                    
                                default:
                                    alert("Opción inválida.");
                                    break;
                            }

                            if ((opcionPago < 4) && (opcionPago > 0)){
                                let opcionContinuar = prompt("¿Desea continuar? \n1- Si. \n2- No.")
                
                                switch (opcionContinuar){
                                    case "1":
                                        alert("¡Compra exitosa! Gracias por comprar.");
                                        total = 0;
                                        carrito = [];
                                        break;

                                    case "2":
                                        if (hayCuotas){
                                            switch (cantidadCuotas) {
                                                case "1":
                                                    total /= 1.17;
                                                    break;
                                                case "2":
                                                    total /= 1.24;
                                                    break;
                                                case "3":
                                                    total /= 1.46;
                                                    break;
                                            }
                                        }
                                        if (esEfectivo){
                                            total /= 0.85
                                        }

                                        if (opcionEntrega == "2"){
                                            total -= 2000;
                                        }
                                        break;

                                    default:
                                        alert("Opción inválida.");
                                        break;
                                }  
                            }
                        }
                        break;      

                    case "3":
                        break;

                    default:
                        alert("Opción inválida.");
                        break;
                }
            }
        case 0:
            break;
        
        default:
            alert("Opción inválida.");
            break;
    }

} while (opcionTipo !== 0)
