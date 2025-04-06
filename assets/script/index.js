// Funções
function trocarCadeado(){
    if(cad.getAttribute("src") == "assets/icons/lock.png"){
        cad.setAttribute("src", "assets/icons/unlock.png")

        senha.setAttribute("type", "text")
    }else{
        cad.setAttribute("src", "assets/icons/lock.png")

        senha.setAttribute("type", "password")
    }
}

function enviarAlerta(e){
    // Para não enviar o formulário
    erro.style.display = "flex"

    erro.children[1].innerText = "Email ou senha incorreta." 

    erro.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    // Impede o envio do formulário
    e.preventDefault()
}

// Declarações
const cad = document.querySelector("#imgCadeado")
    cad.addEventListener("click", trocarCadeado)
const senha = document.querySelector("#pwSenha")
const but = document.querySelector("#dvButton")
    but.addEventListener("click", enviarAlerta)
const erro = document.querySelector("#dvAlerta")