/**
 * Ejercicio 13. Cadenas en Javascript
 * @author: Fran Torregrosa

/**
 * Completa la función Procesar Cadedenas
 * @author: José Gaspar Sánchez García.
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
    var NOMBRE=document.getElementById("nombre").value.toUpperCase();
    console.log('NOMBRE: '+NOMBRE);
    mayusculasHTML.innerHTML=NOMBRE;

    // Convertimos el NOMBRE a minusculas
    console.log('nombre: '+NOMBRE.toLowerCase());

    
    // Obtenemos la longitud del NOMBRE
    var longitud=nombre.length;
    console.log("La longitud de "+nombre+" es "+longitud);

    // Concatena el Nombre y los Apellidos con concat(). 
    var fullName=nombre.concat(" ".concat(apellidos));
    // Obtén la longitud de la nueva cadena.
    var longitudFull=fullName.length;
    console.log(`Nombre completo: ${fullName} (${longitudFull})`);
    fullNameHTML.innerHTML=fullName+" ("+longitudFull+")";
    
    // Del Nombre completo extrae la subcadena comprendida entre las posiciones 5 y 10.
    var extracto=fullName.substring(5,10);
    console.log("Extracto [5 a 10]: "+extracto);

    // Del Nombre completo extrae los 3 primeros carácteres.
    extracto=fullName.substring(0,3);
    console.log("Tres primeros carácteres: "+extracto);

    // En el Nombre completo remplaza Pedro por Antonio
    var nuevoNombre=nombre.replace("Pedro","Antonio");
    console.log("Nuevo nombre: "+nuevoNombre);



}