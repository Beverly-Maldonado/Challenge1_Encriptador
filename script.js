const textArea = document.querySelector(".areatexto");
const mensaje = document.querySelector(".mensaje");


function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
   
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada

}

const textarea = document.getElementById("textarea");
const answer = document.getElementById("copyAnswer");
const copy   = document.getElementById("copybutton");

copy.addEventListener('click', function(e) {
     textarea.select(); 
     try {
        
         let successful = document.execCommand('copy');
   
         if(successful) answer.innerHTML = "";
           else answer.innerHTML = 'Incapaz de copiar!';
       } catch (err) {
           answer.innerHTML = 'Browser no soportado!';
       }
});
