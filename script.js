const report = []
var x = 0  //contador de cliques
var elemento_pai = document.getElementById("conteudo")

function Atividades(os, maq, desc, acao) {

    this.osnumber = os;
    this.machine = maq;
    this.descricao = desc;
    this.acao = acao;
}


function mascara(atividade) {

    atividade.osnumber = `Numero OS: ${atividade.osnumber}`
    atividade.machine = `Máquina:   ${atividade.machine}`
    atividade.descricao = `Descrição: ${atividade.descricao}`
    atividade.acao = `Ação:      ${atividade.acao}`


}



function adicionar() {

    x += 1


    let os = document.getElementById("osnumber").value
    let maq = document.getElementById("machine").value
    let desc = document.getElementById("description").value
    let act = document.getElementById("action").value

    eval('var item' + x + '= new Atividades(os,maq,desc,act);');

    
    report.push(eval('item' + x))
    
    
    mascara(report[x - 1])
    
    
    let test = `${report[0].osnumber}`
    
    
    
    
    
    console.log(test)
    
    
    //eval(`var p${x}= document.createTextNode("${test}");`)
    eval(`var p${x}= document.createElement("lu" );`)
    
    elemento_pai.appendChild(eval('p' + x))
    
    document.getElementsByClassName("lu") = `${report[0].osnumber}<br>${report[0].machine}`
    

}

