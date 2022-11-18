
function tirarDado()
{
    do{
        var suerte=Math.random()*6;
        var dado=Number.parseInt(suerte)+1;
    }while(dado<=0 || dado>6)
    return dado;    
}

function obtenerNumeroSecreto(min,max)
{
    var suerte=0;
    var secreto=0;
    do{
        suerte=Math.random()*max;
        var secreto=Number.parseInt(suerte)+max;
    }while(secreto<min || secreto>max)
    return secreto;
}