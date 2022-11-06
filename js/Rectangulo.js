/**
 * Clase Rectángulo
 * @author: José Gaspar Sánchez García
 */
class Rectangulo extends Figura{
    base=0;
    altura=0;

    /**
     * Constructor del Rectángulo.
     * @param {Punto2D} o: origen de la Figura. 
     * @param {int} b: base del rectángulo. 
     * @param {int} h: altura del rectámgulo. 
     */
    constructor(o,b,h)
    {
        // COMPLETA EL CÓDIGO
    }
    /**
     * Área del Rectángulo.
     * @returns int: area del cuadrado.
     */
    calcularArea()
    {
        // COMPLETA EL CODIGO
        return -1;
    }
    /**
     * Base del Rectángulo.
     * @returns base: int
     */
    getBase()
    {
        return this.base;
    }
    /**
     * Altura del Rectángulo.
     * @returns altura: int.
     */
    getAltura()
    {
        return this.altura;
    }
    /**
     * Establece la base del Rectángulo.
     * @param {int} l: base. 
     */
    setBase(l)
    {
        this.base=l;
    }
    /**
     * Establece la altura del Rectángulo.
     * @param {int} l: altura. 
     */
    setAltura(l)
    {
        this.altura=l;
    }
    /**
     * Información sobre el Rectámgulo
     * @returns string
     */
    toString()
    {
        return `Origen: ${this.origen} Base: ${this.base} Altura: ${this.altura}`;
    }
    /**
     * Dibuja el Rectángulo en el Canvas.
     * @param {Context} ct: contexto del Canvas. 
     */
    dibujar(ct)
    {
        ct.fillStyle=this.getColor();
        
        ct.strokeStyle=this.getColorBorde();
        ct.lineWidth=this.getAnchoBorde();

        let pto=this.getOrigen();

        if(this.getBorde())
            ct.strokeRect(pto.getX(),pto.getY(),this.base,this.altura);

        if(this.getRelleno())
            ct.fillRect(pto.getX(),pto.getY(),this.base,this.altura);

    }
}