/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Autor/a
 */
function calcularMedia(notas)
{
    // IMPLEMENTA TU CODIGO AQUÍ
    var media=0, i=0, arraylen=notas.length;

  
    if (notas.length>0){
        var suma = notas.reduce(
        (previousValue, currentValue) => previousValue + currentValue);
        media = suma/arraylen;
    }
    else {media=0;
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
   // let minima=Number.MIN_VALUE; // <-- CORRIGE E IMPLEMENTA EL CODIGO
  let minima;
    if (notas.length>0){
        minima = notas.reduce((a, b) => Math.min(a, b));
        }
    else{
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
    let maxima;
    //let maxima=Number.MAX_VALUE; // <-- CORRIGE E IMPLEMENTA EL CODIGO
    if (notas.length>0){
         maxima = notas.reduce((a, b) => Math.max(a, b));
    }
    else{
        maxima=0;
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
    let aprobados=v.filter(apr);
    ;

    function apr(nota) {
      return nota >= 5;
    }

    // COMPLETA TU CODIGO

    return aprobados.length;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v)
{
    let suspensos=v.filter(susp);
    ;

    function susp(nota) {
      return nota < 5;
    }

    // COMPLETA TU CODIGO

    return suspensos.length;
}



/**
 * Aplicacion principal Ejercicio14
 * @author: José Gaspar Sánchez García
 */

function appMain(){

    // Indique cuantas notas desea introducir
    //do{
    var numeroNotas=prompt("¿Cuantas notas desea introdurcir?");
   // }while (isNaN(numeroNotas) || numeroNotas.trim() =='' || numeroNotas<=0);

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
