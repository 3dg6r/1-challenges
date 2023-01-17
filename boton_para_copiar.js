
function copy() {
    let copyText = document.querySelector(".text-input2");
    copyText.select();
    document.execCommand("copy","false","null");
  }
  
  document.querySelector(".boton-copiar").addEventListener("click", copy);