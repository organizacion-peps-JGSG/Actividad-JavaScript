/**
 * Calcula la media de los valores
 * @param {Array} v 
 * @returns media
 * @author: Autor/a
 */
 function getTotal(acc, act) {
    return acc + act;
  }
  function getMin(acc, act) {
    if (act < acc ){acc = act}
    return acc;
  }
  function getMax(acc, act) {
    if (act > acc ){acc = act}
    return acc;
  }
  function checkAprovado(nota) {
    return nota >= 5;
  }
  function checkSuspendido(nota) {
    return nota < 5;
  }
function calcularMedia(v)
{
    if (v.length <= 0){return v}
    let resultado= v.reduce(getTotal) / v.length
    return resultado;
}
/**
 * Obtiene la nota mínima
 * @param {Array} v 
 * @returns minima
 */
function calcularMinimo(v)
{
  if (v.length <= 0){return v}
    let resultado = v.reduce(getMin)
    return resultado;
}
/**
 * Obtiene la nota Máxima
 * @param {Array} v 
 * @returns maxima
 */
function calcularMaximo(v)
{
  if (v.length <= 0){return v}
    let resultado = v.reduce(getMax)
    return resultado;
}
/**
 * Cuenta el número de aprobados
 * @param {Array} v 
 * @returns aprobados: número de aprobados.
 */
function contarAprobados(v)
{
  if (v.length <= 0){return v}
    let resultado = v.filter(checkAprovado).length
    return resultado;
}
/**
 * Cuenta el número de suspensos
 * @param {Array} v 
 * @returns suspensos: número de suspensos.
 */
function contarSuspensos(v)
{
  if (v.length <= 0){return v}
    let resultado = v.filter(checkSuspendido).length
    return resultado;;
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
    if (numeroNotas >0){
    for(let i=0; i<numeroNotas;i++)
    {
        do{
            n=parseFloat(prompt("Introduzca la nota número "+(i+1)+": "));
        }while(n<0 || n>10)
        notas[i]=n;
        console.log(`notas[${i}]: ${notas[i]}`);
    }
  }
  
  console.log(notas)
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