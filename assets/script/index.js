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

// Declarações
const cad = document.querySelector("#imgCadeado")
    cad.addEventListener("click", trocarCadeado)
const senha = document.querySelector("#pwSenha")