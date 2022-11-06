// import { Figura } from "./Figura";
/**
 * Contiene las clases:
 * -- Figura.
 * -- Linea.
 * @author: Jose Gaspar Sánchez García
 */
class Figura{
    
    nombre=""; // Nombre que permite identificar la Figura.
    relleno=false; // Indica si la figura está rellena a o no.
    color="crismon"; // Color de relleno por defecto.
    borde=false; // Indica si la figura posee un borde o no.
    colorBorde="black";
    anchoBorde=0;

    origen=null; // Punto2D (x,y)
    visible=true; 
    

    /**
     * Constructor por defecto de la Figura
     * @param {*} punto: Punto2D para localizar la figura 
     */
    constructor(punto)
    {
        this.nombre="Punto-Figura";
        this.relleno=true;
        this.color="blue";
        this.borde=true;
        this.colorBorde="red";
        this.anchoBorde=5;

        this.origen=punto;
        this.visible=false;
    }

    getOrigen()
    {
        return this.origen;
    }
    /**
     * Obtiene la visibilidad de la Figura.
     * @returns visible: boolean
     */

    getVisibilidad()
    {
        return this.visible;
    }
    /**
     * Establece la visibilidad de la Figura
     * @param {boolean} v: visible. 
     */
    setVisibilidad(v)
    {
        this.visible=v;
    }
    /**
     * Obtiene el nombre identificador de la Figura
     * @returns nombre: string.
     */
    getNombre()
    {
        return this.nombre;
    }
    /**
     * Establece el nombre identificador de la figura.
     * @param {string} _n: nombre, 
     */
    
    setNombre(_n)
    {
        this.nombre=_n;
    }
    /**
     * Color de relleno de la Figura
     * @returns color: stirng color de relleno.
     */
    getColor()
    {
        return this.color;
    }
    /**
     * Establece el color de relleno de la Figura
     * @param {string} _c: color. 
     */
    setColor(_c)
    {
        this.color=_c;
    }
    /**
     * Indica si la Figura está rellena o no
     * @returns relleno: booleano.
     */
    getRelleno()
    {
        return this.relleno;
    }
    /**
     * Establece relleno para la Figura
     * @param {boolean} _r: relleno. 
     */
    setRelleno(_r)
    {
        this.relleno=_r;
    }
    /**
     * Establece borde para la Figura.
     * @param {boolean} _b: borde 
     */
    setBorde(_b)
    {
        this.borde=_b;
    }
    /**
     * Obtiene si la Figura tiene o no borde.
     * @returns borde: boolean
     */
    getBorde()
    {
        return this.borde;
    }
    /**
     * Obtiene el color del borde de la Figura.
     * @returns color: string
     */
    getColorBorde()
    {
        return this.colorBorde;
    }
    /**
     * Establece el color para el borde de la Figura
     * @param {string} _color: color del borde. 
     */
    setColorBorde(_color)
    {
        this.colorBorde=_color;
    }
    /**
     * Establece el ancho para el borde de la Figura,
     * @param {int} a: entero ancho del borde. 
     */
    setAnchoBorde(a)
    {
        this.anchoBorde=a;
    }

    /**
     * Obtiene ancho del borde de la Figura
     * @returns ancho: entero.
     */
    getAnchoBorde()
    {
        return this.anchoBorde;
    }


/**
 * Movemos el punto de origen de la Figura
 * @param {int} x; coordenada X nuevo punto 2d 
 * @param {int} y: coordenada Y nuevo punto 2d
 * @author: José Gaspar Sánchez García
 */
    moverA(x,y)
    {
        this.origen.moverA(x,y);
    }
}


class Linea extends Figura{
    destino=null;
    /**
     * Constructor Línea
     * @param {*} _origen: Punto2D inicial. 
     * @param {*} _destino: Punto2D final. 
     */
    constructor(_origen,_destino)
    {
        super(_origen);
        this.origen=_origen;
        this.destino=_destino;
    }

    /**
     * Distancia cuadrática entre el inicio y final de la linea
     * @returns longitud: entrero - longitud de la linea.
     */
    getLongitud(){
        return this.origen.distancia(this.destino);
    }

    toString()
    {
        return `${this.origen} --- a --- ${this.destino};`;
    }

    dibujar(c)
    {
        c.moveTo(this.origen.getX(),this.origen.getY());
        c.lineTo(this.destino.getX(),this.destino.getY());
        c.stroke();
    }
}