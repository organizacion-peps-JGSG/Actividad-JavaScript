/**
 * Comprueba la mayoría de edad
 * @param {*} edad 
 * @returns true | false;
 */

function esMayorEdad(edad)
{
    var boolEdad;
    
    if (edad >= 18 ){boolEdad=true}
                else{boolEdad=false};
        
    return boolEdad;
}
/**
 * Obtiene la calificación equivalente a la nota numérica
 * @param {*} nota: integer. 
 * @returns  cadena: Calificación
 */
function obtenerCalificacion(nota)
{
            var calificacion="Incorrecta";

            // Estructura de control *** switch(nota) ***
            // Completa el código de la función
            if(nota < 0){calificacion="Incorrecta"}
            if(nota < 3 && nota >= 0){calificacion="Muy deficiente"}
            else if(nota >= 3 && nota <5){calificacion = "Insuficiente"}
            else if(nota >= 5 && nota <6){calificacion = "Suficiente"}
            else if(nota >= 6 && nota <7){calificacion = "Bien"}
            else if(nota >= 7 && nota <9){calificacion = "Notable"}
            else if(nota >= 9 && nota <=10){calificacion = "Sobresaliente"}
            else{calificacion="Incorrecta"}
            return calificacion;
}
/**
 * Comprueba la mayoria de edad en la página HTML.
 */
function comprobarEdad()
{
    var edad=Number.parseInt(document.getElementById("edad").value);
    console.log('Edad: '+edad);
    console.log('Mayoría de edad?: '+esMayorEdad(edad));
    txtEdad=esMayorEdad(edad)
    
    document.getElementById("txtEdad").innerHTML=txtEdad;
    
}
/**
 * Escribe la calificación asociada a la nota en la página HTML.
 */
function averiguarCalificacion()
{
    var nota=Number.parseInt(document.getElementById("nota").value);
    console.log('Nota: '+nota);
    console.log('Calificación: '+obtenerCalificacion(nota));
    
        
    document.getElementById("txtCalificacion").innerHTML="Calificación: "+obtenerCalificacion(nota);
}

module.exports={
    esMayorEdad,
    obtenerCalificacion,
};