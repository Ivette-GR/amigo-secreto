// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
console.log("Script funcionando");

let amigos=[];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    
    if (nombreAmigo ===  "" ) {
        alert ("Por favor inserte un nombre");
    } else {
        //si no es una cadena vacia agregar a la array
        amigos.push(nombreAmigo);
        actualizarLista();

        // Limpia el campo de entrada
        document.getElementById('amigo').value = "";
    }
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); // Busca el elemento <ul>  donde se mostrará la lista de amigos.
    lista.innerHTML="";//Limpia el contenido actual de la lista para que no se dupliquen los elementos cada vez que agregues uno nuevo. Si no lo hacemos, la lista se duplicaría cada vez que agregues un nuevo amigo.

    for (let i=0; i<amigos.length; i++){ // Bucle que recorre todos los elementos del arreglo amigos.
        let nuevoElemento = document.createElement('li'); // Crea un nuevo <li>
         nuevoElemento.textContent = amigos[i]; // Le agrega el texto (nombre)
         lista.appendChild(nuevoElemento); //// Añade el <li> al <ul>
    }
}

function sortearAmigo(){
    if(amigos.length === ""){ //Verifica si el array amigos tiene elementos.
        alert("No hay amigos en la lista"); //Si está vacío, muestra un alert.
        return;
    }

    //generar indice aleatorio
    let indice=Math.floor(Math.random()*amigos.length); //Math.random() genera un número.Multiplicamos por amigos.length para escalarlo al tamaño del arreglo.
                                                        //Math.floor() redondea hacia abajo para obtener un índice entero válido.

    let amigoSorteado=amigos[indice]; 

    let resultado =document.getElementById("resultado"); //Usa document.getElementById() para seleccionar el elemento donde se mostrará el resultado.

    resultado.innerHTML=`<li>El amigo sorteado es <strong>${amigoSorteado}</strong></li>`;//Actualiza el contenido usando innerHTML para mostrar el amigo sorteado.

}