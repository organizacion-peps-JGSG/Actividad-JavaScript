/**
 * Ejercicio 13. Cadenas en Javascript
 * @author: Sustituye tu nombre y apellidos
 */

/**
 * Completa la función Procesar Cadedenas
 * @author: José Gaspar Sánchez García.
 */
function procesarCadenas()
{

    // Elemento HTML
    const mayusculasHTML=document.getElementById("mayusculas");
    const fullNameHTML=document.getElementById("fullName");

    // Obtenemos el nombre que se ha introducido en el formulario
    let nombre=document.getElementById("nombre").value;
    console.log(`Nombre: ${nombre}`);

    // Obtenemos los APELLIDOS que se han introducido en el formulario
    let apellidos=document.getElementById("apellidos").value;
    console.log("Apellidos: "+apellidos);

    // Convertimos el nombre a MAYÚSCULAS

    console.log('nombre: '+nombre.toUpperCase());
    mayusculasHTML.innerHTML=nombre.toUpperCase();

    // Convertimos el nombre a minusculas
    console.log('nombre: '+nombre.toLowerCase()); // <-- CORRIGE ESTE CÓDIGO

    
    // Obtenemos la longitud del nombre
    var longitud=nombre.length; // <-- CORRIGE ESTE CÓDIGO
    console.log("La longitud de "+nombre+" es "+longitud);

    // Concatena el Nombre y los Apellidos con concat(). 
    var fullName=""; // <-- NO SUMES ¡¡¡ CONCATENA CON UNA FUNCIÓN !!!
    // Obtén la longitud de la nueva cadena.
    var longitudFull= nombre.concat(" ",apellidos); // <-- COMPLETA EL CÓDIGO CORRECTO
    console.log(`Nombre completo: ${fullName} (${longitudFull})`);
    fullNameHTML.innerHTML=fullName+" ("+longitudFull+")";
    
    // Del Nombre completo extrae la subcadena comprendida entre las posiciones 5 y 10.
    var extracto=longitudFull.slice(5,10); // <-- CORRIGE Y COMPLETA EL CODIGO
    console.log("Extracto [5 a 10]: "+extracto);

    // Del Nombre completo extrae los 3 primeros carácteres.
    extracto=longitudFull.slice(0,3); // <-- CORRIGE Y COMPLETA EL CÓDIGO
    console.log("Tres primeros carácteres: "+extracto);

    // En el Nombre completo remplaza Pedro por Antonio
    var nuevoNombre= longitudFull.replace("Pedro","Antonio"); // <-- CORRIGE Y COMPLETA EL CÓDIGO
    console.log("Nuevo nombre: "+nuevoNombre);



}