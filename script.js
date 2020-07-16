const report = []
var contador = 0







function adicionar() {

    let atividade = []

    contador += 1
    
    atividade.push(document.getElementById("osnumber").value)
    atividade.push(document.getElementById("machine").value)
    atividade.push(document.getElementById("description").value)
    atividade.push(document.getElementById("action").value)
    report.push(atividade)
    
    
    document.getElementById("conteudo").innerHTML = report
    
    
    console.log(atividade);
    console.log(report);
}

