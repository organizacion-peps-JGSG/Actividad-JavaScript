/**
 * Implementa la serie de Fibonacci
 * @param {*} n: número de elementos de la serie.
 * @returns vector con la serie de Fibonacci.
 * @author: Sustituye tu nombre y apellidos aquí
 */
function fibonacci(n)
{
    let vector=new Array(); // Creamos un vector para alamcenar el cálculo
    
    if (n <= 0){
        return vector;
    } else if (n == 1){
        vector.push(0);
    }else if (n == 2){
        vector.push(0,1);
    }else{
        vector = [0,1];
        for (let i=2; i <n; i++){
            vector.push(vector[i -1] + vector[i-2]);
        }
    }
  
    
    return vector; // Retorno de la función
}

/**
 * Aplicación principal Ejercicio 7
 * @author: Manuel Felipe Sánchez Córdoba
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