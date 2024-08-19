
//`La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function encriptar(){
    let texto = document.getElementById("input-text").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");


    let textoCifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        let mensaje = document.getElementById("output-text").value = textoCifrado;

    if (texto.length !=0) {
        document.getElementById("input-text").value;
        tituloMensaje.textContent = "Texto encriptado con exito";
        mensaje.textContent = textoCifrado 
        
    } else {
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";   
        alert("Debes ingresar algun texto");
        }
    document.getElementById("input-text").value = ''

}

function desencriptar(){
    let texto = document.getElementById("input-text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");


let textoDescifrado = texto
    .replace (/enter/gi, 'e')
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

let mensaje = document.getElementById("output-text").value = textoDescifrado;

if (texto.length !=0) {
    document.getElementById("input-text").value= textoDescifrado
    tituloMensaje.textContent = "Texto desencriptado con exito";
    mensaje.textContent = textoDescifrado 

  
} else {
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    alert("Debes ingresar algun texto");
    }
    document.getElementById("input-text").value = ''
}

function copy(){
   
    let copyText = document.getElementById("output-text").value;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Texto copiado")
           texto = " ";
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

clear()


