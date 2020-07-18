const report = []
var x = 0  //contador de cliques
var elemento_pai = document.getElementById("conteudo")

function Atividades(os, maq, desc, acao){
    
    this.osnumber = os;
    this.machine = maq;
    this.descricao = desc;
    this.acao = acao;
}


function mascara(atividade){
    
    atividade.osnumber  = `Numero OS: ${atividade.osnumber}`
    atividade.machine   = `Máquina:   ${atividade.machine}`
    atividade.descricao = `Descrição: ${atividade.descricao}`
    atividade.acao      = `Ação:      ${atividade.acao}`
    
    
}


function adicionar() {
    
    x += 1
    
    let os = document.getElementById("osnumber").value
    let maq = document.getElementById("machine").value
    let desc = document.getElementById("description").value
    let act = document.getElementById("action").value
    
    eval('var item' + x +'= new Atividades(os,maq,desc,act);');
    
    eval('var e_filho' + x + '= document.createElement("p");')
    msg = `${report[x-1].osnumber}`+"\n"+`${report[x-1].machine}`
    var texto = document.createTextNode(msg)
    eval('e_filho'+x).appendChild(texto);
    elemento_pai.appendChild(eval('e_filho'+x));
    
    
    report.push(eval('item' + x))
    mascara(report[x-1])
    console.log(report[x-1]);
    
    
    console.log(msg)
    
    
    
    
    
    
    
    //document.getElementById("conteudo").innerHTML = msg
    
    
}

