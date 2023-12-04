/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Aarón Caselles Casanova
 */
function calcularMedia(v) {
    let sum = 0;
    /**comprobamos si el vector esta vacio */
    if (v.length == 0)
    {
        return 0
    }
    /**calcualmos la media */
    for (let i = 0; i < v.length; i++) {
        sum += v[i];
    }
    let media = sum / v.length;
    return media;
}

/**
 * Obtiene la nota mínima
 * @param {Array} v 
 * @returns minima
 */
function calcularMinimo(v) {
    let minima = Number.MAX_VALUE;
    /**comprobamos si el vector esta vacio */
    if (v.length == 0)
    {
        return 0
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] < minima) {
            minima = v[i];
        }
    }
    return minima;
}

/**
 * Obtiene la nota Máxima
 * @param {Array} v 
 * @returns maxima
 */
function calcularMaximo(v) {
    let maxima = Number.MIN_VALUE;
    /**comprobamos si el vector esta vacio */
    if (v.length == 0)
    {
        return 0
    }
    for (let i = 0; i < v.length; i++) {
        if (v[i] > maxima) {
            maxima = v[i];
        }
    }
    return maxima;
}

/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v) {
    let aprobados = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] >= 5) {
            aprobados++;
        }
    }
    return aprobados;
}

/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v) {
    let suspensos = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i] < 5) {
            suspensos++;
        }
    }
    return suspensos;
}

/**
 * Aplicacion principal Ejercicio14
 * @author: Aarón Caselles Casanova
 */
function appMain() {
    // Indique cuantas notas desea introducir
    let numeroNotas = parseInt(prompt("¿Cuantas notas desea introdurcir?"));
    let notas = new Array();
    var n = -1;
    // Leemos notas desde teclado
    console.info(`Leemos ${numeroNotas} Notas desde teclado.`)
    for (let i = 0; i < numeroNotas; i++) {
        do {
            n = parseFloat(prompt("Introduzca la nota número " + (i + 1) + ": "));
        } while (n < 0 || n > 10)
        notas[i] = n;
        console.log(`notas[${i}]: ${notas[i]}`);
    }

    console.log("La nota media es " + calcularMedia(notas));
    console.log("La nota mínima es " + calcularMinimo(notas));
    console.log("La nota máxima es " + calcularMaximo(notas));
    console.log("Aprobados: " + contarAprobados(notas));
    console.log("Suspensos: " + contarSuspensos(notas));
    return 0;
}

// Exportamos las funciones para poder realizar el Testing
module.exports = {
    calcularMedia,
    calcularMaximo,
    calcularMinimo,
    contarAprobados,
    contarSuspensos,
};
