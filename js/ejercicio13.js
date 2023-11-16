/**
 * Ejercicio 13. Cadenas en Javascript
 * @author: Sustituye tu nombre y apellidos
 */

/**
 * Completa la función Procesar Cadedenas
 * @author:Javier Vinal Costa
 */
function procesarCadenas()
{

    // Elemento HTML
    const mayusculasHTML=document.getElementById("mayusculas");
    const fullNameHTML=document.getElementById("fullName");

    // Obtenemos el NOMBRE que se ha introducido en el formulario
    let nombre=document.getElementById("nombre").value;
    console.log(`Nombre: ${nombre}`);

    // Obtenemos los APELLIDOS que se han introducido en el formulario
    let apellidos=document.getElementById("apellidos").value;
    console.log("Apellidos: "+apellidos);

    // Convertimos el NOMBRE a MAYÚSCULAS
    var NOMBRE=nombre.toUpperCase()// <-- SUSTITUYE AQUÍ TU CÓDIGO
    console.log('NOMBRE: '+NOMBRE);
    mayusculasHTML.innerHTML=NOMBRE;

    // Convertimos el NOMBRE a minusculas
    console.log('nombre: '+NOMBRE.toLowerCase()); // <-- CORRIGE ESTE CÓDIGO

    
    // Obtenemos la longitud del NOMBRE
    var longitud=NOMBRE.length; // <-- CORRIGE ESTE CÓDIGO
    console.log("La longitud de "+nombre+" es "+longitud);

    // Concatena el Nombre y los Apellidos con concat(). 
    var fullName=nombre.concat(" ",apellidos) // <-- NO SUMES ¡¡¡ CONCATENA CON UNA FUNCIÓN !!!
    // Obtén la longitud de la nueva cadena.
    var longitudFull=fullName.length; // <-- COMPLETA EL CÓDIGO CORRECTO
    console.log(`Nombre completo: ${fullName} (${longitudFull})`);
    fullNameHTML.innerHTML=fullName+" ("+longitudFull+")";
    
    // Del Nombre completo extrae la subcadena comprendida entre las posiciones 5 y 10.
    var extracto=fullName.substring(5,10); // <-- CORRIGE Y COMPLETA EL CODIGO
    console.log("Extracto [5 a 10]: "+extracto);

    // Del Nombre completo extrae los 3 primeros carácteres.
    extracto=fullName.slice(0,3); // <-- CORRIGE Y COMPLETA EL CÓDIGO
    console.log("Tres primeros carácteres: "+extracto);

    // En el Nombre completo remplaza Pedro por Antonio
    let resultado = fullName.substring(0, fullName.indexOf(' '));
    var nuevoNombre=fullName.replace(resultado,'Antonio'); // <-- CORRIGE Y COMPLETA EL CÓDIGO
    console.log("Nuevo nombre: "+nuevoNombre);



}