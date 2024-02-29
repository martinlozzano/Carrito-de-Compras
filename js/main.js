let total = 0;

function calcularTotal(precio){
    return total += precio
}
do {
    
    opcionTipo = parseInt(prompt("Seleccione que tipo de prenda desea comprar (ingrese número): \n1- Pantalón. \n2- Bermuda. \n3- Remera. \n4- Camisa. \n5- Campera. \n\n8- Pagar. \n9- Resetear carrito de compras. \n0- Salir. \n\nSUBTOTAL: $" + total));

    switch(opcionTipo){
        case 1:
            let opcionPantalon = prompt("Seleccione que pantalón desea comprar (ingrese número):   \n1. Jean Gris c/ rotura - ($13.000). \n2. Jogger Bali - ($17.950). \n3.  Cargo Rainbow - ($19.800). \n4. Babucha Rústica - ($6.500).")
            
            switch(opcionPantalon){
                case "1":
                    calcularTotal(13000)
                    alert("Se agregó 'Jean Gris c/ rotura' a su carrito de compras.");
                    break;
                case "2":
                    calcularTotal(17950);
                    alert("Se agregó 'Jogger Bali' a su carrito de compras.");
                    break;
                case "3":
                    calcularTotal(19800);
                    alert("Se agregó 'Cargo Rainbow' a su carrito de compras.");
                    break;
                case "4":
                    calcularTotal(6500);
                    alert("Se agregó 'Babucha Rústica' a su carrito de compras.");
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
                    calcularTotal(8500);
                    alert("Se agregó 'Bermuda China' a su carrito de compras.");
                    break;
                case "2":
                    calcularTotal(3500);
                    alert("Se agregó 'Short Rústico Liso' a su carrito de compras.");
                    break;
                case "3":
                    calcularTotal(17900);
                    alert("Se agregó 'Bermuda Doja Cargo' a su carrito de compras.");
                    break;
                case "4":
                    calcularTotal(11700);
                    alert("Se agregó 'Short Bitter' a su carrito de compras.");
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
                    calcularTotal(8650);
                    alert("Se agregó 'Top Joplin' a su carrito de compras.");
                    break;
                case "2":
                    calcularTotal(7900);
                    alert("Se agregó 'Remera Peeping' a su carrito de compras.");
                    break;
                case "3":
                    calcularTotal(3500);
                    alert("Se agregó 'Remera Básica' a su carrito de compras.");
                    break;
                case "4":
                    calcularTotal(8650);
                    alert("Se agregó 'Remera Cambria' a su carrito de compras.");
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
                    calcularTotal(27350);
                    alert("Se agregó 'Camisa Ollie' a su carrito de compras.");
                    break;
                case "2":
                    calcularTotal(9500);
                    alert("Se agregó 'Camisa Elastizada Lisa' a su carrito de compras.");
                    break;
                case "3":
                    calcularTotal(7500);
                    alert("Se agregó 'Camisa Entallada' a su carrito de compras.");
                    break;
                case "4":
                    calcularTotal(19100);
                    alert("Se agregó 'Camisa Gore' a su carrito de compras.");
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
                    calcularTotal(21850);
                    alert("Se agregó 'Campera Crop Fossilize' a su carrito de compras.");
                    break;
                case "2":
                    calcularTotal(7500);
                    alert("Se agregó 'Campera Deportiva 1/2 Estacion' a su carrito de compras.");
                    break;
                case "3":
                    calcularTotal(7500);
                    alert("Se agregó 'Campera Rústica' a su carrito de compras.");
                    break;
                case "4":
                    calcularTotal(17050);
                    alert("Se agregó 'Campera Over Rosemary' a su carrito de compras.");
                    break;
                default:
                    alert("Opción inválida.");
                    break;
            }

            break;
        
        case 8:
            let opcionEntrega = prompt("Elija la forma de entrega \n1- Retiro en el local. \n2- Envío a domicilio ($2000).");
            
            switch (opcionEntrega){
                case "1":
                    break;
                case "2":
                    calcularTotal(2000);
                    break;
            }
        
            let opcionPago = prompt("Elija un método de pago \n1- Crédito. \n2- Débito/Transferencia bancaria. \n3- Efectivo en el local (15% de descuento). \n\n0- Salir.");

            switch (opcionPago) {
                case "1":             
                    let opcionCuotas = prompt("¿En cuantas cuotas desea abonar? \n1. 3(tres) cuotas - ( 17% interés). \n2. 6(seis) cuotas - ( 24% interés). \n3. 12(doce) cuotas - ( 46% interés).");

                    switch (opcionCuotas) {
                        case "1":
                            total *= 1.17;
                                alert("Total a pagar en 3 cuotas: $" + total)
                            break;
                        case "2":
                            total *= 1.24;
                                alert("Total a pagar en 6 cuotas: $" + total)
                            break;
                        case "3":
                            total *= 1.46;
                                alert("Total a pagar en 12 cuotas: $" + total)
                            break;
                        default:
                            alert("Opción inválida.")
                            break;
                    }
                case "2":
                    alert("Total a pagar con tarjeta de debito o transferencia bancaria: $" + total)
                    break;
                case "3":
                    total *= 0.85;
                    alert("Total a pagar en efectivo: $" + total);
                    break;
                case "0":
                    break;
            }

            let opcionContinuar = prompt("¿Desea continuar? \n1- Si. \n2- No.")

            switch (opcionContinuar){
                case "1":
                    alert("¡Compra exitosa! Gracias por comprar.");
                    total = 0;
                    break;
                case "2":
                    total = 0;
                    break;
            }
            break;
        
        case 9:
            total = 0;
            break;

        case 0:
            break;
        
        default:
            alert("Opción inválida.");
            break;
    }

} while (opcionTipo !== 0)
