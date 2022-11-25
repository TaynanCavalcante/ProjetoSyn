function onKeyUpName(){
    toggleButton();
    toggleNameError();
}

function onKeyUpEmail(){
    toggleButton();
    toggleEmailError();
}


function toggleButton(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    if (email !== '' && nome !== '') { 
        document.getElementById('enviar').disabled = false;
    } else {
      document.getElementById('enviar').disabled = true;
    }
}

function toggleEmailError(){
    const email = document.getElementById('email').value;

    if (!email){
        document.getElementById('email-required-error').style.display = "block";
    } else {
        document.getElementById('email-required-error').style.display = "none";
    }
}

function toggleNameError(){
    const nome = document.getElementById('nome').value;

    if (!nome){
        document.getElementById('nome-required-error').style.display = "block";
    } else{
        document.getElementById('nome-required-error').style.display = "none";
    }
}

const envia = document.querySelector(".btnEnviar");
const divMessage = document.querySelector(".alert");
const msg = "Sua mensagem foi enviada com sucesso!"

function ativar(){
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);

    setTimeout(()=>{
        message.style.display = "none";

    }, 5000);
}

envia.addEventListener("click",()=> {
    ativar(msg);
});

function aumentarValor() {

    var campo = document.getElementById('valor')
    
    campo.value= parseInt(campo.value) + 1;
    
    }
    
    function diminuirValor() {
    
    var campo = document.getElementById('valor')
    
    campo.value= parseInt(campo.value) - 1;
    
    }
