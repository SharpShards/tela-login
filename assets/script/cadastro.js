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

// Declarações
const fun = document.querySelector("#dvFundoPreview")
const prev = document.querySelector("#imgPreview")
const but = document.querySelector("#flFoto")
    but.addEventListener("change", carregarImagem)
const prevX = document.querySelector("#btnRemover")
    prevX.addEventListener("click", removerImagem)