const tEncriptar = document.querySelector(".text-input1")
const tDesencriptar = document.querySelector(".text-input2")

function btnencriptar(){
    const textoEncriptado = encriptar(tEncriptar.value);
    tDesencriptar.value = textoEncriptado;
    console.log
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
