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