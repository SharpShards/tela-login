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

function verificarRequisitos(){
    // Letra Maiúscula
    // Fazer loop para verificar um por um todas as vezes
    // pra ter certeza que a letra maiúscula continua na frase
    // Na primeira ocorrência, ele para o loop.
    for(let loop = 0; loop < senha.value.length; loop++){
        caractere = senha.value[loop]
        code = caractere.charCodeAt()

        if((code >= 65) && (code <= 90)){
            lista.children[0].setAttribute("data-satisfeito", true)
            lista.children[0].style.color = "#32e069"

            break
        }else{
            lista.children[0].setAttribute("data-satisfeito", false)
            lista.children[0].style.color = "#e03232"
        }
    }

    // Letra Minúscula
    // Fazer loop para verificar um por um todas as vezes
    // pra ter certeza que a letra minúscula continua na frase
    // Na primeira ocorrência, ele para o loop.
    for(let loop = 0; loop < senha.value.length; loop++){
        caractere = senha.value[loop]
        code = caractere.charCodeAt()

        if((code >= 97) && (code <= 122)){
            lista.children[1].setAttribute("data-satisfeito", true)
            lista.children[1].style.color = "#32e069"

            break
        }else{
            lista.children[1].setAttribute("data-satisfeito", false)
            lista.children[1].style.color = "#e03232"
        }
    }

    // Símbolo
    // Fazer loop para verificar um por um todas as vezes
    // pra ter certeza que o símbolo continua na frase
    // Na primeira ocorrência, ele para o loop.
    for(let loop = 0; loop < senha.value.length; loop++){
        caractere = senha.value[loop]
        code = caractere.charCodeAt()

        if(!((code >= 48) && (code <= 57))
           && !((code >= 65) && (code <= 90))
           && !((code >= 97) && (code <= 122)) ){
            lista.children[2].setAttribute("data-satisfeito", true)
            lista.children[2].style.color = "#32e069"

            break
        }else{
            lista.children[2].setAttribute("data-satisfeito", false)
            lista.children[2].style.color = "#e03232"
        }
    }   


    // Quantidade de caracteres
    if(senha.value.length >= 8){
        lista.children[3].setAttribute("data-satisfeito", true)
        lista.children[3].style.color = "#32e069"
    }else{
        lista.children[3].setAttribute("data-satisfeito", false)
        lista.children[3].style.color = "#e03232"
    }

    // Bug
    // Quando tira o último caractere, os dois primeiros requisitos
    // continuam verdes e satisfeitos
    if(senha.value.length == 0){
        lista.children[0].style.color = "#e03232"
        lista.children[1].style.color = "#e03232"
        lista.children[2].style.color = "#e03232"
        lista.children[3].style.color = "#e03232"

        lista.children[0].setAttribute("data-satisfeito", false)
        lista.children[1].setAttribute("data-satisfeito", false)
        lista.children[2].setAttribute("data-satisfeito", false)
        lista.children[3].setAttribute("data-satisfeito", false)
    }
}

function enviarAlerta(e){
    // Se todos os requisitos forem satisfeitos, não envia o formulário de jeito nenhum
    // dizendo que o usuário ou a senha estão incorretos.
    if((lista.children[0].getAttribute("data-satisfeito") == "true") &&
       (lista.children[1].getAttribute("data-satisfeito") == "true") &&
       (lista.children[2].getAttribute("data-satisfeito") == "true") &&
       (lista.children[3].getAttribute("data-satisfeito") == "true")){
        erro.style.display = "flex"

        erro.children[1].innerText = "Email ou senha incorreta." 
    }else{
        // Se os requisitos não forem satisfeitos, não envia o formulário e
        // pede pra consertar
        erro.style.display = "flex"

        erro.children[1].innerText = "A senha precisa cumprir todos os requisitos."  
    }

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
    senha.addEventListener("input", verificarRequisitos)
const lista = document.querySelector("#uLista")
const but = document.querySelector("#dvButton")
    but.addEventListener("click", enviarAlerta)
const erro = document.querySelector("#dvAlerta")