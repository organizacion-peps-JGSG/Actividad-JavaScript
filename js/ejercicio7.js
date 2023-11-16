/**
 * Implementa la serie de Fibonacci
 * @param {*} n: número de elementos de la serie.
 * @returns vector con la serie de Fibonacci.
 * @author: Sustituye tu nombre y apellidos aquí
 */
function fibonacci(n)
 {
     let vector=new Array(); // Creamos un vector para alamcenar el cálculo
     let i=0;
     if (n <= 0){return vector}
     do{
         
         console.log(i);
         if (i == 1 || i == 0){vector[i] = 1;i++;continue;};
         vector[i]= vector[i-2]+vector[i-1];
         console.log("v"+vector[i-1]);
         i++;
     }while(i<n)
     
     // ESCRIBE TU CÓDIGO AQUÍ
     
     
     return vector; // Retorno de la función
 }

/**
 * Aplicación principal Ejercicio 7
 * @author: José Gaspar Sánchez García
 */
function appMain()
{
    const salidaHTML=document.getElementById("salida");
    let x=parseInt(prompt("Indique el número de elementos de la serie de Fibonacci: "));
    let v=fibonacci(x);

    console.log(`Fibonacci(${x}) = [ ${v} ]`);
    // alert("Fibonacci: "+v);
    salidaHTML.innerHTML="Fibonacci("+x+") = ["+v+"].";
}

// Exportamos la funcion fibonacci para poder realizar el Testing
module.exports={
    fibonacci,
};