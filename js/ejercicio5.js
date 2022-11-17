/**
 * @author: Fran Torregrosa
 */

/**
 * Comprueba la mayoría de edad
 * @param {int} edad 
 * @returns true | false;
 */

function esMayorEdad(edad)
{
    if (isNaN(edad)){
       return false;         
    }else{
    
    // Complete el codigo Javascript
        if (edad<18){
            return false;
        }else{
            return true;
        }
     }
}
/**
 * Obtiene la calificación equivalente a la nota numérica
 * @param {int} nota: entero. 
 * @returns  cadena: Calificación
 */
function obtenerCalificacion(nota)
{
    var calificacion="Incorrecta";

    // Estructura de control *** switch(nota) ***
    switch (true) {
        case (nota >=0 && nota < 3):
            calificacion = "Muy deficiente";
            break;
        case (nota >= 3 && nota < 5):
            calificacion = "Insuficiente";
            break;
        case (nota >= 5 && nota < 6):
            calificacion = "Suficiente";
            break;
        case (nota >= 6 && nota < 7):
            calificacion = "Bien";
            break;
        case (nota >= 7 && nota < 9):
            calificacion = "Notable";
            break;
        case (nota >= 9 && nota <= 10):
            calificacion = "Sobresaliente";
            break;
    }
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
    var txtEdad="Usted es menor de edad."
    
    if(esMayorEdad(edad))
        txtEdad="Usted es mayor de edad."
    
    document.getElementById("txtEdad").innerHTML=txtEdad;
    
}
/**
 * Escribe la calificación asociada a la nota en la página HTML.
 */
function averiguarCalificacion()
{
    var nota=Number.parseFloat(document.getElementById("nota").value);
    console.log('Nota: '+nota);
    console.log('Calificación: '+obtenerCalificacion(nota));
        
    document.getElementById("txtCalificacion").innerHTML="Calificación: "+obtenerCalificacion(nota);
}

module.exports={
    esMayorEdad,
    obtenerCalificacion,
};