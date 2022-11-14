/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Autor/a
 */
function calcularMedia(notas)
{
    // IMPLEMENTA TU CODIGO AQUÍ
    var media=0, i=0, arraylen=notas.length, suma=0;

    while(i< arraylen){
        suma=suma + notas[i];
        i++;
    }
    media=suma/arraylen;
    
    return media;
}
/**
 * Obtiene la nota mínima
 * @param {Array} v 
 * @returns minima
 */
function calcularMinimo(notas)
{
    let minima=Number.MAX_VALUE,i=0, arraylen=notas.length; // <-- CORRIGE E IMPLEMENTA EL CODIGO
    while(i< arraylen){
       if  (minima > notas[i]){
        minima=notas[i];
       }
        i++;
    }
    return minima;
}
/**
 * Obtiene la nota Máxima
 * @param {Array} v 
 * @returns maxima
 */
function calcularMaximo(notas)
{
    let maxima=Number.MIN_VALUE,i=0, arraylen=notas.length; // <-- CORRIGE E IMPLEMENTA EL CODIGO
    while(i< arraylen){
        if  (maxima < notas[i]){
            maxima=notas[i];
        }
         i++;
     }
    return maxima;
}
/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v)
{
    let aprobados=0;

    // COMPLETA TU CODIGO

    return aprobados;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v)
{
    let suspensos=0;
    
    // COMPLETA TU CODIGO

    return suspensos;
}



/**
 * Aplicacion principal Ejercicio14
 * @author: José Gaspar Sánchez García
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