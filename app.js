
var img = document.getElementById("imgDonal");
var msj1 = document.getElementById("textoMensaje1");
var msj2 = document.getElementById("textoMensaje2");


condicionesIniciales();



function condicionesIniciales(){

    asignarTextoElemento(".encriptar-texto","Encriptador de Texto");
    asignarTextoElemento(".texto-mensaje","\u2764"+" Solo letras minúsculas y sin acentos");
    asignarTextoElemento(".texto-mensaje1","Ningún mesaje fué encontrado");
  asignarTextoElemento(".texto-mensaje2","Ingresa el texto que deseés inscriptar o desencriptar");
  
    return;
}

// Agrega texto 
function asignarTextoElemento(elemento,texto) {

    var titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

// Boton encriptar
function encriptar(){

  var texto = document.getElementById("textarea").value;
      

  if (texto.trim() !== "") {
    esconderImagen();
      ponerTexto();
   
} else {
    alert("¡ningun mensaje fué encontrado!");
    condicionesIniciales();
}
textarea.value = "";    
      
}
function esconderImagen() {

  img.style.visibility = "hidden";
  msj1.style.visibility = "hidden";
  msj2.style.visibility = "hidden";

}
function ponerTexto(){
  /* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
                     
                     var input = document.getElementById("textarea").value.toLowerCase(); 

                     document.getElementById("textoOculto").textContent = textoModificado(input);
                     
                         
}

function textoModificado(texto){
  var textoModificado =  texto.replace(/[aeiou]/g, cambio);
  return textoModificado;
}

function cambio(letra) {
  switch (letra) {
      case 'a':
          return 'ai';
      case 'e':
          return 'enter';
      case 'i':
          return 'imes';
      case "o":
            return "ober";
       case "u":
              return "ufat";

      default:
          return letra; 
  }
}


function copiar() {  

  var textoLabel = document.getElementById("textoOculto").innerText;
   console.log(textoLabel);
    
   // Crea un elemento de textarea temporal
  var tempTextarea = document.createElement("textarea");
  tempTextarea.value = textoLabel;

  // Añade el textarea al DOM
  document.body.appendChild(tempTextarea);

  // Selecciona el texto del textarea
  tempTextarea.select();

  // Copia el texto al portapapeles
  document.execCommand("copy");

  // Elimina el textarea temporal
  document.body.removeChild(tempTextarea);

  // Notifica al usuario que el texto ha sido copiado
  alert("Texto copiado al portapapeles: ");

  // eliminamos el contenido que copiamos
     textoOculto.innerText = "";
    img.style.visibility = "visible";
    msj1.style.visibility = "visible";
    msj2.style.visibility = "visible";

}

//Boton desencriptar

function desencriptar(){
  var texto = document.getElementById("textarea").value;

  if (texto.trim() !== "") {
 
    esconderImagen();
    ponerTextoDesencriptado();
   
} else {
    alert("¡ningun mensaje fué encontrado!");
    condicionesIniciales();
}
          textarea.value = "";
}

function ponerTextoDesencriptado(){
 
var input2 = document.getElementById("textarea").value.toLowerCase(); 
console.log(input2);

document.getElementById("textoOculto").textContent = textoDesencriptado(input2);
    
}
function textoDesencriptado(input2){
var textoDesencriptado =  input2.replace(/(ai|enter|imes|ober|ufat)/g,cambioInverso);
return textoDesencriptado;

}
function cambioInverso(palabra){
switch (palabra) {
case 'ai':
return 'a';
case 'enter':
return 'e';
case 'imes':
return 'i';
case "ober":
return "o";
case "ufat":
return "u";

default:
return palabra; 
}
}
