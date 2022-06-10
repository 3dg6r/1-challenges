/*
const tEncriptar = document.querySelector(".text-input1")
const tDesencriptar = document.querySelector(".text-input2")

function btnencriptar(){
    const textoEncriptado = encriptar(tEncriptar.value);
    tDesencriptar.value = textoEncriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function btndesencriptar(){
    const textoEncriptado = desencriptar(tDesencriptar.value);
    tEncriptar.value = textoEncriptado;
}

function desencriptar(StringParaDesencriptar){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
        if(StringParaDesencriptar.includes(matrizCodigo[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaDesencriptar;
}
*/
/*
      <textarea class="text-input2" type="text" cols="18" rows="8"></textarea>
      <button class="boton-copiar" type="button" id="btn-copy" onclick="copy()">Copiar
      </button>
*/


function copy() {
    let copyText = document.querySelector(".text-input2");
    copyText.select();
    document.execCommand("copy","false","null");
    console.log
  }
  
  document.querySelector(".boton-copiar").addEventListener("click", copy);