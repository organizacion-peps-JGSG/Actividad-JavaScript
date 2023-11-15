/**
 * Simula la tirada de un dado de seis caras.
 * @returns entero entre 1 y 6.
 */
function tirarDado() {
    return Math.floor(Math.random() * 11); // Genera un número aleatorio entre 0 y 10
}
/**
 * Devuelve un número aleatorio entre min y max.
 * @param {*} min: Mínimo. 
 * @param {*} max: Máximo.
 * @returns n: Número aleatorio
 */
function obtenerNumeroSecreto(min,max)
{
    let secretNumb = Math.floor(Math.random() * (max - min + 1)) + min;
    return secretNumb;
}

var intentos = parseInt(prompt('Introduce el número de intentos: '));
var secretNumb = obtenerNumeroSecreto(0,10);
do {

    let num = tirarDado();
    if (num === secretNumb){
        alert("Has averiguado el número!!");
        break;
    }


    document.getElementById("intentos").innerHTML = intentos;
    intentos--;


} while (intentos > 0)



