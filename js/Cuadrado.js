class Cuadrado extends Rectangulo{
    lado=0;
    /**
     * Constructor Cuadrado
     * @param {Punto2D} o: origen 
     * @param {int} l: lado del cuadrado. 
     */
    constructor(o,l)
    {
        super(o,l,l);
        this.lado=l;
    }
/**
 * Calcula el área del cuadrado.
 * @returns int: area
 */
    calcularArea()
    {
        return this.lado*this.lado;
    }

    getLado()
    {
        return this.lado;
    }

    setLado(l)
    {
        this.lado=l;
    }
    /**
     * Información sobre el cuadrado
     * @returns string
     */
    toString()
    {
        return `Origen: ${this.origen} Lado: ${this.lado}`;
    }
}