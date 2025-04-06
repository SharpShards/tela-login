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

function interrompeDigitacao(e){
    e.preventDefault()
}

function aumentarAtual(){
    numAtu.value = parseInt(numAtu.value) + 1

    aumentarProgressoAtual()
}

function diminuirAtual(){
    numAtu.value = parseInt(numAtu.value) - 1

    aumentarProgressoAtual()
}

function aumentarTotal(){
    numTot.value = parseInt(numTot.value) + 1

    aumentarProgressoTotal()
}

function diminuirTotal(){
    numTot.value = parseInt(numTot.value) - 1

    aumentarProgressoTotal()
}

function aumentarProgressoAtual(){
    pgProg.value = numAtu.value
}

function aumentarProgressoTotal(){
    pgProg.max = numTot.value
}

function atualizarRange(){
    switch(range.value){
        case "0":
            point.style.display = "none"
            point.style.marginLeft = 0
            point.style.marginRight = 0
            point.innerText = "0"
            break
        case "1":
            point.style.display = "block"
            point.style.marginLeft = 0
            point.style.marginRight = (range.scrollWidth * 0.76) + "px"
            point.innerText = "1"
            break
        case "2":
            point.style.display = "block"
            point.style.marginLeft = 0
            point.style.marginRight = (range.scrollWidth * 0.57) + "px"
            point.innerText = "2"
            break
        case "3":
            point.style.display = "block"
            point.style.marginLeft = 0
            point.style.marginRight = (range.scrollWidth * 0.37) + "px"
            point.innerText = "3"
            break
        case "4":
            point.style.display = "block"
            point.style.marginLeft = 0
            point.style.marginRight = (range.scrollWidth * 0.18) + "px"
            point.innerText = "4"
            break
        case "5":
            point.style.display = "block"
            point.style.marginLeft = 0
            point.style.marginRight = 0
            point.innerText = "5"
            break
        case "6":
            point.style.display = "block"
            point.style.marginRight = 0
            point.style.marginLeft = (range.scrollWidth * 0.2) + "px"
            point.innerText = "6"
            break
        case "7":
            point.style.display = "block"
            point.style.marginRight = 0
            point.style.marginLeft = (range.scrollWidth * 0.4) + "px"
            point.innerText = "7"
            break
        case "8":
            point.style.display = "block"
            point.style.marginRight = 0
            point.style.marginLeft = (range.scrollWidth * 0.58) + "px"
            point.innerText = "8"
            break
        case "9":
            point.style.display = "block"
            point.style.marginRight = 0
            point.style.marginLeft = (range.scrollWidth * 0.78) + "px"
            point.innerText = "9"
            break
        case "10":
            point.style.display = "none"
            point.style.marginRight = 0
            point.style.marginLeft = (range.scrollWidth * 0.8) + "px"
            point.innerText = "10"
            break
    }
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
const numAtu = document.querySelector("#nbAtual")
    numAtu.addEventListener("keydown", interrompeDigitacao)
const upAtu = document.querySelector("#dvUpAtu")
    upAtu.addEventListener("click", aumentarAtual)
const downAtu = document.querySelector("#dvDownAtu")
    downAtu.addEventListener("click", diminuirAtual)
const numTot = document.querySelector("#nbTotal")
    numTot.addEventListener("keydown", interrompeDigitacao)   
const upTot = document.querySelector("#dvUpTot")
    upTot.addEventListener("click", aumentarTotal)
const downTot = document.querySelector("#dvDownTot")
    downTot.addEventListener("click", diminuirTotal)
const prog = document.querySelector("#pgProg")
const range = document.querySelector("#rgDific")
    range.addEventListener("click", atualizarRange)
const point = document.querySelector("#pRangeAtual")