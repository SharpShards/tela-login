// Funções
function carregarImagem(){
    const file = this.files[0]

    if(file){
        const read = new FileReader()
            read.addEventListener("load", function(e){
                prev.setAttribute("src", e.target.result)

                fun.style.display = "flex"
            })
        
        read.readAsDataURL(file)
    }
}

function removerImagem(){
    prev.setAttribute("src", "")

    fun.style.display = "none"
}

function atualizarContador(){
    quant = desc.value.length
    
    if(quant < 10){
        cont.innerText = "00" + desc.value.length + "/500"
    }else if(quant < 100){
        cont.innerText = "0" + desc.value.length + "/500"
    }else{
        cont.innerText = desc.value.length + "/500"
    }
}

function formatarNumero(){ 
    IMask(cel, {mask: "(00) 00 00000-0000"})
}

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
    // Se todos os requisitos forem satisfeitos, confirma o cadastro.
    if((lista.children[0].getAttribute("data-satisfeito") == "true") &&
       (lista.children[1].getAttribute("data-satisfeito") == "true") &&
       (lista.children[2].getAttribute("data-satisfeito") == "true") &&
       (lista.children[3].getAttribute("data-satisfeito") == "true")){
        erro.style.display = "none"

        confirmarCadastro() 
    }else{
        // Se os requisitos não forem satisfeitos, não faz o cadastro e
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

function confirmarCadastro(){
    console.log("Fazer ainda")
}

// Declarações
const fun = document.querySelector("#dvFundoPreview")
const prev = document.querySelector("#imgPreview")
const but = document.querySelector("#flFoto")
    but.addEventListener("change", carregarImagem)
const prevX = document.querySelector("#btnRemover")
    prevX.addEventListener("click", removerImagem)
const desc = document.querySelector("#taDesc")
    desc.addEventListener("input", atualizarContador)
const cont = document.querySelector("#pContagem")
const cel = document.querySelector("#tlCel")
    cel.addEventListener("input", formatarNumero)
const cad = document.querySelector("#imgCadeado")
    cad.addEventListener("click", trocarCadeado)
const senha = document.querySelector("#pwSenha")
    senha.addEventListener("input", verificarRequisitos)
const lista = document.querySelector("#uLista")
const env = document.querySelector("#sbCriar")
    env.addEventListener("click", enviarAlerta)
const erro = document.querySelector("#dvAlerta")