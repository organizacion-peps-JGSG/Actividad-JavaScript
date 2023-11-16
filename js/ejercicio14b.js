/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Javier Vinal Costa
 */
function calcularMedia(v)
{
    if (v.length === 0) {
        return 0; // Manejo de array vacío para evitar división por cero
    }

    const suma = v.reduce((acc, curr) => acc + curr, 0);
    const media = suma / v.length;
    return media;
}
/**
 * Obtiene la nota mínima
 * @param {Array} v 
 * @returns minima
 */
 function calcularMinimo(v) {
   if (v.length === 0) {
     return 0; // Manejo de array vacío
   }
 
   const minimo = v.reduce((min, current) => (current < min ? current : min), v[0]);
   return minimo;
 }
/**
 * Obtiene la nota Máxima
 * @param {Array} v 
 * @returns maxima
 */
 function calcularMaximo(v) {
   if (v.length === 0) {
     return 0; // Manejo de array vacío
   }
 
   const maximo = v.reduce((max, current) => (current > max ? current : max), v[0]);
   return maximo;
 }
 
/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v)
{
    const aprobado = 5; // Cambia este valor si el umbral es diferente
    const aprobados = v.filter(calificacion => calificacion >= aprobado).length;
    return aprobados;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v)
{
    const aprobado = 5; // Cambia este valor si el umbral es diferente
    const cantidadSuspensos = v.filter(calificacion => calificacion < aprobado).length;
    return cantidadSuspensos;
}

/**
 * Aplicacion principal Ejercicio14
 * @author: Javier Vinal Costa
 */

function appMain(){

    // Indique cuantas notas desea introducir
    let numeroNotas=parseInt(prompt("¿Cuantas notas desea introdurcir?"));

    let notas=new Array();
    var n=-1;
    // Leemos notas desde teclado
    console.info(`Leemos ${numeroNotas} Notas desde teclado.`)
    for(let i=0; i<numeroNotas;i++)
    {
        do{
            n=parseFloat(prompt("Introduzca la nota número "+(i+1)+": "));
        }while(n<0 || n>10)
        notas[i]=n;
        console.log(`notas[${i}]: ${notas[i]}`);
    }
   


    console.log("La nota media es "+calcularMedia(notas));
    console.log("La nota mínima es "+calcularMinimo(notas));
    console.log("La nota máxima es "+calcularMaximo(notas));
    console.log("Aprobados: "+contarAprobados(notas));
    console.log("Suspensos: "+contarSuspensos(notas));
    return 0;
}

// Exportamos las funciones para poder realizar el Testing
module.exports={
    calcularMedia,
    calcularMaximo,
    calcularMinimo,
    contarAprobados,
    contarSuspensos,
};