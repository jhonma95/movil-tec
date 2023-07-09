class Reserva {
    constructor(paquete, costo,) {
        this.paquete = paquete;
        this.costo = costo;

    }
    }

        const movil = [];
    movil.push(new Reserva("samsung A23", 30000, "se adapta a tu mano 50px de cam"));
    movil.push(new Reserva("moto Edge Pro 40", 150000, "diseño en color negro para que se adapte mejor"));
    movil.push(new Reserva("huawei P20 Lite", 90000, "Procesador Kirin 659 Octa Core (hasta 2.36GHz)"));

    console.log(movil);

    function buscarPaquete(buscarPaquete) {
        return movil.find((dato) => dato.paquete == buscarPaquete);
}

        function cotizarPaquete(paquete, cuota) {
    let precio;

    switch (paquete) {
    case 1:
        precio = 30000;
        break;
    case 2:
        precio = 150000;
        break;
    case 3:
        precio = 90000;
        break;
    default:
        alert("No ingresó un número de paquete válido");
        return;
    }

    switch (cuota) {
    case 1:
        alert(`El precio es de $${precio}`);
        break;
    case 3:
    case 6:
    case 12:
            alert(`El precio es de $${precio / cuota} por mes`);
            break;
    default:
        alert("No ingresó un número de cuota válido");
        }
    }

    do {
    const paquete = parseInt(prompt("Ingrese el número del paquete turístico deseado:\n" +
        "1- Samsung A23\n" +
        "2- Moto Edge Pro 40\n" +
        "3- Huawei P20 Lite"
    ));
    const cuota = parseInt(prompt("Ingrese el número de cuotas en las que desea pagar (1, 3, 6, 12):"));

        cotizarPaquete(paquete, cuota);
    } while (confirm("¿Desea hacer otra cotización?"));

    do {
    var opcion = parseInt(prompt(
        "Modelos disponibles:\n" +
        "1. Samsung A23\n" +
        "2. Moto Edge Pro 40\n" +
        "3. Huawei P20 Lite\n" +
        "Ingresa el número de la opción que deseas elegir:"
    ));

    
    switch (opcion) {
    case 1:
        
        alert("Has elegido Samsung A23");
        break;
    case 2:
        
        alert("Has elegido Moto Edge Pro 40");
        break;
    case 3:
        
        alert("Has elegido Huawei P20 Lite");
        break;
    default:


        alert("Opción inválida");
        break;
    }
} while (isNaN(opcion) || opcion < 1 || opcion > 3);
