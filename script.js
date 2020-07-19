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
    this.taxa = ((Date.parse(this.termino) - Date.parse(this.inicio))/1000/60/60).toFixed(2)
}


function mascara(atividade) {

    atividade.osnumber = `Numero OS: ${atividade.osnumber}`
    atividade.machine = `Máquina:   ${atividade.machine}`
    atividade.tag = `Tag:      ${atividade.tag}`
    atividade.tparada = `Tipo de parada: ${atividade.tparada}`
    atividade.desc = `Descrição: ${atividade.desc}`
    atividade.acao = `Ação:      ${atividade.acao}`
    let i = new Date(atividade.inicio).toUTCString();
    atividade.inicio = `Inicio: ${i}`
    let t = new Date(atividade.termino).toUTCString();
    atividade.termino = `Termino:      ${t}`
    atividade.taxa = `Duração:      ${atividade.taxa}`
    atividade.mat = `Material utilizado:      ${atividade.mat}`


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
        $('<p>').append(`${report[x-1].osnumber}`),
        $('<p>').append(`${report[x-1].machine}`),
        $('<p>').append(`${report[x-1].tag}`),
        $('<p>').append(`${report[x-1].tparada}`),
        $('<p>').append(`${report[x-1].desc}`),
        $('<p>').append(`${report[x-1].acao}`),
        $('<p>').append(`${report[x-1].inicio}`),
        $('<p>').append(`${report[x-1].termino}`),
        $('<p>').append(`${report[x-1].taxa}`),
        $('<p>').append(`${report[x-1].mat}`)
    ]

    $('#conteudo').append(test)
    
    // console.log(test)
    
}


function copiar(element) {

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    // textocopiado = $('#conteudo')
    
    // textocopiado.select();

    // document.execCommand('copy');
    
    // console.log(textocopiado);
}   