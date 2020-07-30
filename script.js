const report = []
var x = 0  //contador de cliques

var textocopiado


function Atividades(os, maq, tag, tparada, desc, acao, mat, inicio, termino) {

    this.osnumber = os;
    this.machine = maq;
    this.tag = tag;
    this.tparada = tparada;
    this.desc = desc;
    this.acao = acao;
    this.mat = mat;
    this.inicio = inicio;
    this.termino = termino;
    this.taxa = ((Date.parse(this.termino) - Date.parse(this.inicio)) / 1000 / 60 / 60).toFixed(2)
}


function mascara(atividade) {

    atividade.osnumber = `<strong>Numero OS:</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${atividade.osnumber}`

    atividade.machine = `<strong>Máquina:</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        ${atividade.machine}`

    atividade.tag = `<strong>Tag:</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${atividade.tag}`
    atividade.tparada = `<strong>Tipo de parada:</strong> 
        ${atividade.tparada}`
    atividade.desc = `<strong>Descrição:</strong>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${atividade.desc}`
    atividade.acao = `<strong>Ação:</strong> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${atividade.acao}`
    let i = new Date(atividade.inicio).toUTCString();
    atividade.inicio = `<strong>Inicio:</strong> 
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${i}`
    let t = new Date(atividade.termino).toUTCString();
    atividade.termino = `<strong>Termino:</strong>    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${t}`
    atividade.taxa = `<strong>Duração:  </strong>    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${atividade.taxa}`
    atividade.mat = `<strong>Insumo:</strong>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ${atividade.mat}<br>`


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


    let itemadd = [
        $('<p>').append(`${report[x - 1].osnumber}`),
        $('<p>').append(`${report[x - 1].machine}`),
        $('<p>').append(`${report[x - 1].tag}`),
        $('<p>').append(`${report[x - 1].tparada}`),
        $('<p>').append(`${report[x - 1].desc}`),
        $('<p>').append(`${report[x - 1].acao}`),
        $('<p>').append(`${report[x - 1].inicio}`),
        $('<p>').append(`${report[x - 1].termino}`),
        $('<p>').append(`${report[x - 1].taxa}`),
        $('<p>').append(`${report[x - 1].mat}`),
        $('<p>').append(`____________________`),

    ]

    $('#conteudo').append(itemadd)

    // console.log(itemadd)

}


function copiar() {

    var sel, range;
    var el = document.getElementById('conteudo'); //get element id
    if (window.getSelection && document.createRange) { //Browser compatibility
        sel = window.getSelection();
        if (sel.toString() == '') { //no text selection
            window.setTimeout(function () {
                range = document.createRange(); //range object
                range.selectNodeContents(el); //sets Range
                sel.removeAllRanges(); //remove all ranges from selection
                sel.addRange(range);//add Range to a Selection.
            }, 1);
        }
    } 
    
    document.execCommand("copy");
}
