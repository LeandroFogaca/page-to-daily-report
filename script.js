const report = []
var x = 0  //contador de cliques


function Atividades(os, maq, tag, tparada, desc, acao, mat, inicio, termino) {

    this.osnumber = os;
    this.machine = maq;
    this.tag = tag;
    this.tparada = tparada;
    this.descricao = desc;
    this.acao = acao;
    this.mat = mat;
    this.inicio  = inicio;
    this.termino = termino;
    this.taxa = function () => console.log("função executada");
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
    let tag = document.getElementById("tag").value
    let tparada = document.getElementById("tparada").value
    let desc = document.getElementById("description").value
    let acao = document.getElementById("acao").value
    let mat = document.getElementById("mat").value
    let inicio = document.getElementById("inicio").value
    let termino = document.getElementById("termino").value

    eval('var item' + x + '= new Atividades(os, maq, tag, tparada, desc, acao, mat, inicio, termino);');

    
    report.push(eval('item' + x))
    
    console.log(report)
    
    mascara(report[x - 1])
    
    
    let test = [
        $('<p>').append(`${report[0].osnumber}`),
        $('<p>').append(`${report[0].machine}`),
        $('<p>').append(`${report[0].tag}`),
        $('<p>').append(`${report[0].tparada}`),
        $('<p>').append(`${report[0].desc}`),
        $('<p>').append(`${report[0].acao}`),
        $('<p>').append(`${report[0].inicio}`),
        $('<p>').append(`${report[0].termino}`),
        $('<p>').append(`${report[0].taxa}`),
        $('<p>').append(`${report[0].mat}`)
    ]
    
    $('#conteudo').append(test)
    
    console.log(test)
    
    
    
    
    



}

