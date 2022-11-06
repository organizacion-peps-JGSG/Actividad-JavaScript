/**
 * Clase Triángulo.
 * @author: José Gaspar Sánchez García.
 */
class Triangulo extends Figura{
    base=0;
    altura=0;
    /**
     * Constructor del Triángulo.
     * @param {Punto2D} o 
     * @param {int} b: base.
     * @param {int} h: altura.
     */
    constructor(o,b,h)
    {
        super(o);
        // COMPLETA EL CÓDIGO
    }
    /**
     * Calcula el área del Triángulo.
     * @returns float: area
     */
    calcularArea()
    {
        // COMPLETA Y CORRIGE EL CÓDIGO
        return (-2);
    }
    /**
     * Obtiene base del Triángulo.
     * @returns int: base.
     */
    getBase()
    {
        return this.base;
    }
    /**
     * Obtiene altura del Triángulo.
     * @returns int: altura.
     */
    getAltura()
    {
        return this.altura;
    }
    /**
     * Establece la base del Triángulo.
     * @param {int} b: base. 
     */
    setBase(b)
    {
        this.base=b;
    }
    /**
     * Establce altura del Triángulo.
     * @param {int} h: altura. 
     */
    setAltura(h)
    {
        this.altura=h;
    }
    /**
     * Información del triángulo.
     * @returns string
     */
    toString()
    {
        return `Origen: ${this.origen} Base: ${this.base} Altura: ${this.altura}`;
    }
    
    /**
     * Dibuja el Triángulo.
     * @param {Context} ct: contexto del Canvas. 
     */
    dibujar(ct)
    {
        ct.fillStyle=this.getColor();
        
        ct.strokeStyle=this.getColorBorde();
        ct.lineWidth=this.getAnchoBorde();

        let pto=this.getOrigen();
        // Nos situamos en el origen (esquina izda)
        ct.moveTo(pto.getX(),pto.getY());
        // Dibujamos linea hacia abajo
        ct.lineTo(pto.getX(),pto.getY()+this.altura);
        // Dibujamos linea hacia la derecha
        ct.lineTo(pto.getX()+this.base,pto.getY()+this.altura);
        ct.closePath();
        
        if(this.getBorde())
            ct.stroke();

        if(this.getRelleno())
            ct.fill();
    }
}