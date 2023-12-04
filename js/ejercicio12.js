/**
 * Ejercicio 12. Calculadora JavaScript
 * Autor: Manuel Felipe Sánchez Córdoba
 */

/**
 * Implementa el Menú 1: Sumar
 * @author: Manuel Felipe Sánchez Córdoba.
 * @return suma
 */
function menu1()
{
    // Implemente la opción de la calculadora que permite sumar.
    console.info("Suma:");
    let sumando1=parseInt(prompt("Introduzca el prmier sumando: ",0));
    let sumando2=parseInt(prompt("Introduzca el segundo sumando: ",0));
    let resultado=sumando1+sumando2;
    console.log("El resultado de la suma "+sumando1+" + "+sumando2+" es "+resultado);
    return resultado;
}

/**
 * Implementa el Menú 2: Restar
 * @author: Manuel Felipe Sánchez Córdoba.
 * @return resta
 */
function menu2()
{
    // Implemente la opción de la calculadora que permite restar.
    console.info("Resta:");
    let minuendo = parseInt(prompt("Introduce el minuendo: ", 0));
    let sustraendo = parseInt(prompt("Introduce el sustraendo: ", 0));

    let resultado = minuendo - sustraendo
   
    console.log("El resultado de la resta "+minuendo+" - "+sustraendo+" es "+resultado);
    return resultado;
}
/**
 * Implementa el Menú 3: Multiplicar
 * @author: Manuel Felipe Sánchez Córdoba.
 * @return multiplicación
 */
function menu3()
{
    // Implemente la opción de la calculadora que permite multiplicar.
    console.info("Multiplica:");
    let numero1= parseInt(prompt("Introduce el primer valor: ",0));
    let numero2= parseInt(prompt("Introduce el segundo valor: ",0));

    let resultado = numero1 * numero2

    console.log("El resultado de la multiplicacion "+numero1+ " * "+numero2+" es "+resultado);
    return resultado;
}

/**
 * Implementa el Menú 4: Dividir
 * @author: Manuel Felipe Sánchez Córdoba.
 * @return división
 */
function menu4()
{
    // Implemente la opción de la calculadora que permite dividir.
    console.info("Divide:");
    let numero1= parseFloat(prompt("Introduce el primer valor: ", 0));
    let numero2= parseFloat(prompt("Introduce el segundo valor: ", 0));

    if (numero2==0){
        console.error("No se puede dividir por cero.");
        return NaN;
    }
   
   
    let resultado = numero1 / numero2
    console.log("El resultado de la division "+numero1+" / "+numero2+" es "+resultado);
    return resultado;

}

/**
 * Menú Aplicación Calculadora
 * @author: Manuel Felipe Sánchez Córdoba.
 */
function appMenu()
{
    let opcion=-1;
    let resultado=0;

    do{
        console.log("\n*** CALCULADORA ***\n");
        console.log("Menú:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("0. Salir");
        opcion=parseInt(prompt("Introduzca opción: "));

        switch (opcion) {
            case 1: 
            resultado = menu1();
            console.log("El resultado de la Suma es: " +resultado);
            break;
            case 2: 
            resultado = menu2(); 
            console.log("El resultado de la Resta es: " +resultado);
            break;
            case 3: 
            resultado = menu3(); 
            console.log("El resultado de la Multiplicacion es: " +resultado);
            break;
            case 4: 
            resultado = menu4(); 
            console.log("El resultado de la Division es: " +resultado);
            break;
            case 0: console.info("Saliendo aplicación calculadora."); break;
            default: 
                console.error("Error: Opción " + opcion + " incorrecta."); 
                break;
        }

    }while(opcion!=0)

    console.log("El resultado de la operacion es: " +resultado)
}
appMenu();