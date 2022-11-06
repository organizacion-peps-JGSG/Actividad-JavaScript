/**
 * Simula la tirada de un dado de seis caras.
 * @returns entero entre 1 y 6.
 */
function tirarDado()
{
    do{
        var suerte=Math.random()*6;
        var dado=Number.parseInt(suerte)+1;
    }while(dado<=0 || dado>6)
    return dado;    
}
/**
 * Devuelve un número aleatorio entre min y max.
 * @param {*} min: Mínimo. 
 * @param {*} max: Máximo.
 * @returns n: Número aleatorio
 */
function obtenerNumeroSecreto(min,max)
{
    var suerte=0;
    var secreto=0;
    do{
        suerte=Math.random()*max;
        var secreto=Number.parseInt(suerte)+max;
    }while(secreto<min || secreto>max)
    return secreto;
}