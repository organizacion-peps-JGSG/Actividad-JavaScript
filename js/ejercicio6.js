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
   var suerte = Math.random()* (max - min +1) + min;
   return Math.floor(suerte);
}
function adiviniarNumeroSecreto(intentos){
    var numeroSecreto = obtenerNumeroSecreto(0,10);
    var adininaza;

    for (var i = 0; i<intentos;i++){
        adininaza =window.prompt('Intenta adivinar el numero secreto entre 0 y 10: ');
        if (adininaza == null){
            break;
        }
        adininaza =Number.parseInt(adininaza);

        if (adininaza == numeroSecreto){
            alert('Enorabuena has acertado el numero secreto. ');
            break;
        }else{
            alert('Intento fallido. Intentalo de nuevo. Te quedan '  +(intentos -i -1)+ 'intentos' );
        }
    }
    alert('El numero secreto era: ' + numeroSecreto)
}
adiviniarNumeroSecreto(3);