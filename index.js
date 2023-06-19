function confirmarCompra() {
    // mostrando la lista de celular

    let equipo = "Elige un Celular:\n\n1. Samsung A23 - $1000\n2. Motorola EDGE PRO40 - $800\n3. Huawei P20 Lite - $1200\n"; 

    let eleccion = prompt(equipo);

    if (eleccion && (eleccion === "1" || eleccion === "2" || eleccion === "3")) {
        let nombreProducto, precioProducto;

    if (eleccion === "1") {
        nombreProducto = "Samsung A23";
        precioProducto = 1000;
    } else if (eleccion === "2") {
        nombreProducto = "Motorola EDGE PRO40";
        precioProducto = 800;
    } else if (eleccion === "3") {
        nombreProducto = "Huawei P20 Lite";
        precioProducto = 1200;
    }

    let confirmacion = confirm("¿Deseas comprar un " + nombreProducto + " por $" + precioProducto + "?");

    if (confirmacion) {
        alert("Equipo confirmado.");

    } else {
        alert("Equipo cancelado.");

    }
        } else {
    alert("No se ingresó una opción válida.");

    }
        }
  // Llamar a la función
        confirmarCompra();