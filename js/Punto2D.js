class Punto2D{
    x=0;
    y=0;
    /**
     * Constructor por defecto Punto2D
     * @param {*} _x 
     * @param {*} _y 
     * @auth José Gaspar Sánchez Garcia
     */
    constructor(_x,_y){
        this.x=_x;
        this.y=_y;
    }

    // Getters
    getX()
    {
        return this.x;
    }
    
    getY(){
        return this.y;
    }
    
    // Setters
    setX(_x){
        this.x=_x;
    }

    setY(_y)
    {
        this.y=_y;
    }
    
    // Información tipo cadena 
    toString()
    {
        return `(${this.x},${this.y})`
    }
    /**
     * Calcula la distancia cuadrática a otro punto 2D
     * @param {*} otroPunto: punto2D 
     * @returns distancia
     * @author José Gaspar Sánchez García. 
     */
    distancia(otroPunto)
    {
        return(Math.pow(this.x-otroPunto.getX(),2)+Math.pow(this.y-otroPunto.getY(),2));
    }

    /**
     * Mover el Punto2D a otras coordenadas X e Y
     * @param {*} dx: nueva coordenada X. 
     * @param {*} dy: nueva coordenada Y.
     * @author José Gaspar Sánchez García 
     */
    moverA(dx,dy)
    {
        this.x=dx;
        this.y=dy;
    }
}

// export default Punto2D;