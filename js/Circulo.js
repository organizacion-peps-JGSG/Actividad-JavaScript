/**
 * Clase Circulo
 * @author: José Gaspar Sánchez García.
 */
class Circulo extends Figura{
    radio=0;
    /**
     * Constructor Círculo.
     * @param {Punto2D} o: centro. 
     * @param {int} r: radio.
     */
    constructor(o,r)
    {
        super(o);
        this.radio=r;
    }
    /**
     * Calcula el área del círculo.
     * @returns area:float
     */
    calcularArea()
    {       
        return (-3); // <-- COMPLETA Y CORRIGE EL CÓDIGO
    }
    /**
     * Calcula el perímetro de la circunferencia,
     * @returns perimetro: float.
     */
    calcularPerimetro()
    {
        return (2); // <-- COMPLETA Y CORRIGE EL CÓDIGO
    }
    /**
     * Obtiene el radio del circulo
     * @returns radio:entero
     */
    getRadio()
    {
        return this.radio;
    }
    /**
     * Establece el radio del Circulo.
     * @param {int} _r: radio. 
     */
    setRadio(_r)
    {
        this.radio=_r;
    }
    /**
     * Cadena con información del Círculo.
     * @returns string: cadena con datos del circulo.
     */
    toString()
    {
        return `Origen: ${this.origen} Radio: ${this.radio}`;
    }
    /**
     * Dibuja un Circulo (o circunferencia).
     * @param {Context} ct: contexto del Canvas.
     */
    dibujar(ct)
    {
        ct.fillStyle=this.getColor();
        
        ct.strokeStyle=this.getColorBorde();
        ct.lineWidth=this.getAnchoBorde();

        ct.beginPath();
        let pto=this.getOrigen();
        
        ct.arc(pto.getX(),pto.getY(),this.radio,0,2*Math.PI);
        
        if(this.getBorde())
            ct.stroke();

        if(this.getRelleno())
            ct.fill();
    }
}