// import Punto2D from "./Punto2D";
// import Linea from "./Linea";


window.addEventListener("load",function() {
    console.log("La pagina ha terminado de cargarse");
    geoApp();
});

/**
 * Función principal de la Aplicación de Geometría
 * @returns 
 * @author José Gaspar Sánchez García
 */
function geoApp()
{
    let figuras=new Array();

    // Definimos las variables que hacen referencia a elementos de la página HTML
    const contador=document.getElementById("contador");

    const canvas=document.getElementById("canvas");
    const ctx=canvas.getContext("2d");
    const formulario=document.getElementById("formulario");
    const btnLinea=document.getElementById("btnLinea");
    const btnCuadrado=document.getElementById("btnCuadrado");
    const btnRectangulo=document.getElementById("btnRectangulo");
    const btnCirculo=document.getElementById("btnCirculo");
    const btnTriangulo=document.getElementById("btnTriangulo");
    
    // Programamos el comportamiento del boton Linea
    btnLinea.addEventListener("click",function(){
        let x1=parseInt(prompt("Punto1.x: "));
        let y1=parseInt(prompt("Punto1.y: "));
        console.log(`Punto: (${x1},${y1})`);

        let x2=parseInt(prompt("Punto2.x: "));
        let y2=parseInt(prompt("Punto2.y: "));
        console.log(`Punto: (${x2},${y2})`);

        // ctx.moveTo(x1,y1);
        // ctx.lineTo(x2,y2);
        // ctx.stroke();

        let p1=new Punto2D(x1,y1);
        let p2=new Punto2D(x2,y2);

        console.log(`Punto1: ${p1}`);
        console.log(`Punto2: ${p2}`);
        console.log("Distancia: "+p1.distancia(p2));

        console.info("Ok");
        let l1=new Linea(p1,p2);
        console.log(`Linea 1: ${l1}`);
        console.log("Longitud: "+l1.getLongitud())
        figuras.push(l1);
        
        l1.dibujar(ctx);
        l1.setVisibilidad(true);
        console.log("Dibujamos la linea en el canvas");
    });

    // Programamos el comportamiento del botón Cuadrado
    btnCuadrado.addEventListener("click",function(){
        let x1=parseInt(prompt("Punto1.x: "));
        let y1=parseInt(prompt("Punto1.y: "));
        console.log(`Punto: (${x1},${y1})`);
        let lado=parseInt(prompt("Lado: "));
        console.log(`Lado: ${lado} (${x1},${y1})`);

        let p=new Punto2D(x1,y1);

        let c1=new Cuadrado(p,lado);
        console.log(`CUADRADO: ${c1}`);
        console.log("Área: "+c1.calcularArea());
        figuras.push(c1);

        c1.dibujar(ctx);
        c1.setVisibilidad(true);
        console.log("Dibujado cuadrado");
    });

    // Programamos el comportamiento del botón Cuadrado
    btnRectangulo.addEventListener("click",function(){
        let x1=parseInt(prompt("Rectangulo.x: "));
        let y1=parseInt(prompt("Rectangulo.y: "));
        console.log(`Punto: (${x1},${y1})`);
        
        let base=parseInt(prompt("Base: "));
        let altura=parseInt(prompt("Altura: "));
        console.log(`Base: ${base} Altura: ${altura} (${x1},${y1})`);

        let p=new Punto2D(x1,y1);

        let r1=new Rectangulo(p,base,altura);
        console.log(`RECTANGULO: ${r1}`);
        console.log("Área: "+r1.calcularArea());
        figuras.push(r1);

        r1.dibujar(ctx);
        r1.setVisibilidad(true);
        console.log("Dibujado rectangulo.");
    });

    // Programamos el comportamiento del botón Triangulo
    btnTriangulo.addEventListener("click",function(){
        let x1=parseInt(prompt("Triángulo.x: "));
        let y1=parseInt(prompt("Triángulo.y: "));
        console.log(`Punto: (${x1},${y1})`);
        
        let base=parseInt(prompt("Base: "));
        let altura=parseInt(prompt("Altura: "));
        console.log(`Base: ${base} Altura: ${altura} (${x1},${y1})`);

        let p=new Punto2D(x1,y1);

        let t1=new Triangulo(p,base,altura);
        console.log(`TRIÁNGULO: ${t1}`);
        console.log("Área: "+t1.calcularArea());
        figuras.push(t1);

        t1.dibujar(ctx);
        t1.setVisibilidad(true);
        console.log("Dibujado triángulo.");
    });



     // Programamos el comportamiento del botón Circulo
     btnCirculo.addEventListener("click",function(){
        let x1=parseInt(prompt("Centro.x: "));
        let y1=parseInt(prompt("Centro.y: "));
        console.log(`Centro: (${x1},${y1})`);
        let radio=parseInt(prompt("Radio: "));
        console.log(`Radio: ${radio} (${x1},${y1})`);

        let p=new Punto2D(x1,y1);

        let c1=new Circulo(p,radio);
        console.log(`CIRCULO: ${c1}`);
        console.log("Área: "+c1.calcularArea());
        console.log("Perímetro: "+c1.calcularPerimetro());
        figuras.push(c1);

        c1.dibujar(ctx);
        c1.setVisibilidad(true);
        console.log("Dibujado CIRCULO");
    });

    const FPS=50;

    setInterval(function(){
        // ctx.clearRect(0,0,600,400);
        contador.innerHTML=figuras.length;


    },1000/FPS);

    return 0;
}