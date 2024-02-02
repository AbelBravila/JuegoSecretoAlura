let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(Elemento,texto){
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("ValorUsuario").value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos === 1)?"vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else{
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }
        else{
            asignarTextoElemento("p","El numero secreto es mayor");
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#ValorUsuario").value ="";

}


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    if(listaNumerosSorteado.length==numeroMaximo)
    {
         return asignarTextoElemento("p","Ya se sortearon todos los numeros posibles");

    }
    else{
        if(listaNumerosSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }    
    }

    
}


function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto desde funcion");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    //limpiarCaja
    limpiarCaja();
    // indicar mensaje de intervalos
    //Generar numero aleatorio
    //inicialiazar el numero de intentos
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();