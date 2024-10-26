let nivelActual = 1; // Valor inicial de nivel
const niveles = ['Tierra', 'Madera', 'Bronce', 'Plata', 'Oro', 'Diamante', 'Carmesí'];
const imagenes = [
    '../image/rangos/tierra.png',  // Tierra
    '../image/rangos/madera.png',  // Madera
    '../image/rangos/bronce.png',  // Bronce
    '../image/rangos/plata.png',   // Plata
    '../image/rangos/oro.png',     // Oro
    '../image/rangos/diamante.png', // Diamante
    '../image/rangos/carmesi.png'  // Carmesí
];

function subirNivel() {
    if (nivelActual < 100) {
        nivelActual++;
    }
    actualizarNivel();
}

function bajarNivel() {
    if (nivelActual > 1) {
        nivelActual--;
    }
    actualizarNivel();
}

function actualizarNivel() {
    const barra = document.getElementById('barra');
    const textoNivel = document.getElementById('texto-nivel');
    const rango = document.getElementById('rango');
    const imagenRango = document.getElementById('imagen-rango');

    // Calcular el ancho de la barra en porcentaje
    const porcentaje = (nivelActual / 100) * 100;
    barra.style.width = porcentaje + '%';
    
    // Actualizar el texto del nivel
    textoNivel.textContent = 'Nivel: ' + nivelActual;

    // Determinar el rango basado en el nivel
    let rangoActual = '';
    let imagenActual = '';

    if (nivelActual <= 10) {
        rangoActual = niveles[0]; // Tierra
        imagenActual = imagenes[0];
    } else if (nivelActual <= 20) {
        rangoActual = niveles[1]; // Madera
        imagenActual = imagenes[1];
    } else if (nivelActual <= 30) {
        rangoActual = niveles[2]; // Bronce
        imagenActual = imagenes[2];
    } else if (nivelActual <= 40) {
        rangoActual = niveles[3]; // Plata
        imagenActual = imagenes[3];
    } else if (nivelActual <= 60) {
        rangoActual = niveles[4]; // Oro
        imagenActual = imagenes[4];
    } else if (nivelActual <= 80) {
        rangoActual = niveles[5]; // Diamante
        imagenActual = imagenes[5];
    } else {
        rangoActual = niveles[6]; // Carmesí
        imagenActual = imagenes[6];
    }

    // Actualizar rango y la imagen del rango
    rango.textContent = 'Rango: ' + rangoActual;
    imagenRango.src = imagenActual;
}

// Llamar a la función de actualización para mostrar el nivel inicial
actualizarNivel();
