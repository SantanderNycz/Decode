const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const avisos = document.querySelector(".avisos");
const btnCopiar = document.querySelector(".btn-copiar");

// Chaves de criptografia
function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensagem.value = textoEncriptado;
  textArea.value = "";
  toggleElements();
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensagem.value = textoDesencriptado;
  textArea.value = "";
  toggleElements();
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function toggleElements() {
  if (mensagem.value !== "") {
    avisos.style.display = "none";
    mensagem.style.backgroundImage = "none";
    btnCopiar.style.display = "block";
  } else {
    avisos.style.display = "block";
    mensagem.style.backgroundImage = "url('./imagens/boneco.png')";
    btnCopiar.style.display = "none";
  }
}

btnCopiar.addEventListener("click", () => {
  mensagem.select();
  document.execCommand("copy");
  textArea.focus();
  alert("Texto copiado para a área de transferência!");
});

// Inicialização
toggleElements();
