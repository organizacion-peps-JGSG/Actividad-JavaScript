/**
 * @author: Escriba su nombre y apellidos aquí.
 */

/**
 * Comprueba la mayoría de edad
 * @param {int} edad 
 * @returns true | false;
 */

function esMayorEdad(edad)
{
   
    return (edad >= 18); // Debe escribir el código correcto AQUÍ.
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
            
            var calificacion="";
            var n=Number.parseInt(nota); 
            // Complete el codigo AQUÍ
            switch(n){
                case 0:
                case 1:
                case 2:calificacion="Muy deficiente";
                break;
                case 3:
                case 4:
                calificacion="Insuficiente";
                break;
                case 5:
                calificacion="Suficiente";
                break;
                case 6:
                calificacion="Bien";
                break;
                case 7:
                case 8:
                calificacion="Notable";
                break;
                case 9:
                case 10:
                calificacion="Sobresaliente";
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
    var nota=Number.parseInt(document.getElementById("nota").value);
    console.log('Nota: '+nota);
    console.log('Calificación: '+obtenerCalificacion(nota));
        
    document.getElementById("txtCalificacion").innerHTML="Calificación: "+obtenerCalificacion(nota);
}

module.exports={
    esMayorEdad,
    obtenerCalificacion,
};