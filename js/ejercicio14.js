/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Autor/a
 */
function calcularMedia(v)
{
    // IMPLEMENTA TU CODIGO AQUÍ
    var media=0, i,  suma=0;
    if (v.length>0){
    for (i=0; i< v.length;i++){
        suma=suma + v[i];
        
    }
    media=suma/v.length;
    }
    else {
        media=0;
    }
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
    
    if (notas.length>0){

    while(i< arraylen){
       if  (minima > notas[i]){
        minima=notas[i];
       }
        i++;
        }
    }
    else {
        minima=0;
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
    let maxima=Number.MIN_VALUE
    ,i=0
    ,arraylen=notas.length; // <-- CORRIGE E IMPLEMENTA EL CODIGO
    
    if (notas.length>0){
        while(i< arraylen){
            if  (maxima < notas[i]){
            maxima=notas[i];
                }
            i++;
        }
    }
    else {
        maxima =0;
        }
    return maxima;
}
/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(notas)
{
    let aprobados=0
    ,i=0
    ,arraylen=notas.length; // <-- CORRIGE E IMPLEMENTA EL CODIGO
    
        while(i< arraylen){
            if  (notas[i]>=5){
                aprobados++;
                }
            i++;
        }
   // COMPLETA TU CODIGO
    return aprobados;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(notas)
{
    let suspensos=0
    ,i=0
    ,arraylen=notas.length; // <-- CORRIGE E IMPLEMENTA EL CODIGO
    
        while(i< arraylen){
            if  (notas[i]<5){
                suspensos++;
                }
            i++;
        }
    // COMPLETA TU CODIGO
    return suspensos;
}



/**
 * Aplicacion principal Ejercicio14
 * @author: Diego Gonzalo De Maio
 */

function appMain(){

    // Indique cuantas notas desea introducir
    do{
        var numeroNotas=prompt("¿Cuantas notas desea introdurcir?");
    }while (isNaN(numeroNotas) || numeroNotas.trim() =='' || numeroNotas<=0);
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