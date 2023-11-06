/**
 * Ejercicio 12. Calculadora JavaScript
 * Autor: 
 */

/**
 * Implementa el Menú 1: Sumar
 * @author: Coloca tu nombre aquí.
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
 * @author: Coloca tu nombre aquí.
 * @return resta
 */
function menu2()
{
    // Implemente la opción de la calculadora que permite restar.
    console.info("Resta:");
    
    // IMPLEMENTA TU CÓDIGO AQUÍ
    let minuendo=0;
    let sustraendo=0;
    let resultado=-1;

    minuendo = parseInt(prompt("Introduce el minuendo: "));
    sustraendo = parseInt(prompt("Introduce el sustraendo: "));

    resultado = minuendo - sustraendo;

    console.log("El resultado de la resta "+minuendo+" - "+sustraendo+" es "+resultado);
    return resultado;
}
/**
 * Implementa el Menú 3: Multiplicar
 * @author: Coloca tu nombre aquí.
 * @return multiplicación
 */
function menu3()
{
    // Implemente la opción de la calculadora que permite multiplicar.
    console.info("Multiplica:");
    
    // IMPLEMENTA TU CODIGO AQUÍ 

    let n1 = parseInt(prompt("Introduce el primero numero: "));
    let n2 = parseInt(prompt("Introduce el segundo numero: "));


    resultado = n1 * n2;

    console.log("El resultado de la multiplicación "+n1+" X "+n2+" es "+resultado);



    return resultado;
}

/**
 * Implementa el Menú 4: Dividir
 * @author: Coloca tu nombre aquí.
 * @return división
 */
function menu4()
{
    // Implemente la opción de la calculadora que permite dividir.
    console.info("Divide:");
    
    // IMPLEMENTA TU CÓDIGO AQUÍ


    let dividendo = parseInt(prompt("Introduce el dividendo :"));
    let divisor = parseInt(prompt("Introduce el divisor :"));


    resultado = dividendo / divisor;

    return resultado;

}

/**
 * Menú Aplicación Calculadora
 * @author: José Gaspar Sánchez García.
 */
function appMenu()
{
    let opcion=-1;
    do{
        console.log("\n*** CALCULADORA ***\n");
        console.log("Menú:");
        console.log("1. Sumar");
        console.log("2. Restar");
        console.log("3. Multiplicar");
        console.log("4. Dividir");
        console.log("0. Salir");
        opcion=parseInt(prompt("Introduzca opción: "));

        switch(opcion)
        {
            case 1: {menu1();break;}
            case 2: {menu2();break;}
            case 3: {menu3();break;}
            case 4: {menu4();break;}
            case 0: {console.info("Saliendo aplicación calculadora.");break;}
            default: {console.error("Error: Opción "+opcion+" incorrecta."); break;}
        }

    }while(opcion!=0)
}