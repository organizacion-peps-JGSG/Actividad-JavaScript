/**
 * Calcula la media de los valores
 * @param {Array} v
 * @returns media
 * @author: Autor/a
 */
function calcularMedia(v) {
    if (v.length > 0) {
        const sum = v.reduce((accumulator, currentValue) => accumulator + currentValue);
        // IMPLEMENTA TU CODIGO AQUÍ
        return sum / v.length;
    }
    return 0;
}

/**
 * Obtiene la nota mínima
 * @param {Array} v
 * @returns minima
 */
function calcularMinimo(v) {
    if (v.length > 0) {
        let minima = 10; // <-- CORRIGE E IMPLEMENTA EL CODIGO
        minima = v.reduce((accumulator, currentValue) => {
            return Math.min(accumulator, currentValue);
        }, v[0]);
        return minima;
    }
    return 0;
}

/**
 * Obtiene la nota Máxima
 * @param {Array} v
 * @returns number
 */
function calcularMaximo(v) {
    if (v.length > 0) {
        let maxima = 0;

        maxima = v.reduce((accumulator, currentValue) => {
            return Math.max(accumulator, currentValue);
        }, v[0]);

        return maxima;
    }
    return 0;

}

/**
 * Cuenta el número de aprobados
 * @param {Array} v
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v) {
    let aprobados = 0;
    aprobados = v.filter(function (x) {
        return x >= 5
    });

    return aprobados.length;
}

/**
 * Cuenta el número de suspensos
 * @param {Array} v
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v) {
    let suspensos = 0;

    suspensos = v.filter(function (x) {
        return x < 5
    });

    return suspensos.length;
}


/**
 * Aplicacion principal Ejercicio14
 * @author: Mario Davó Asensio
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
    calcularMedia, calcularMaximo, calcularMinimo, contarAprobados, contarSuspensos,
};