const report = []
var contador = 0

function Atividades(os, maq, desc, acao){

    this.osnumber = os;
    this.machine = maq;
    this.descricao = desc;
    this.acao = acao;
}


function coleta(){
    
    let atividade = []
    atividade.push(document.getElementById("osnumber").value)
    atividade.push(document.getElementById("machine").value)
    atividade.push(document.getElementById("description").value)
    atividade.push(document.getElementById("action").value)
    
    atividade[0] = `Numero OS: ${atividade[0]}`
    atividade[1] = `Máquina:   ${atividade[1]}`
    atividade[2] = `Descrição: ${atividade[2]}`
    atividade[3] = `Ação:      ${atividade[3]}`
    
   // console.log(atividade);
    report.push(atividade)
}


function adicionar() {
    
    
    let os = document.getElementById("osnumber").value
    let maq = document.getElementById("machine").value
    let desc = document.getElementById("description").value
    let act = document.getElementById("action").value
    
    a = new Atividades(os,maq,desc,act)
    
    
    
    //coleta()
    
    let msg = 'Numero da OS:' + a.os
    console.log(msg);
    document.getElementById("conteudo").innerHTML = msg
    
   
}

