function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "Você não preencheu o campo de busca"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let Titulo = "";
    let descricao = "";
    
    for (let dado of dados) {
            Titulo = dado.Titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()

            if(Titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
    
    resultados += `
         <div class="item-resultado">
                <h2>
                    <a href="#" target="_blanck">${dado.Titulo}<a/>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank" >mais informações</a>
            </div>
    
    `
    
    }

    if (!resultados) {
        resultados = "Sem Resultado"
        

    }
    
    section.innerHTML= resultados

    }

}  


