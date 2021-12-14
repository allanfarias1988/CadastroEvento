// iniciando as variáveis
let dataAtual = new Date()
let diaAtual = dataAtual.getDay()
let mesAtual = dataAtual.getMonth()
let anoAtual = dataAtual.getFullYear()
let dataEvento = ""
let listaEventoA = [] 
let listaEventoB = []
let dataNasc = ""
let anoNasc = ""
let quantidadeP = 0
// let diaEvento = dataEvento.getDay()
// let mesEvento = dataEvento.getMonth()
// let anoEvento = dataEvento.getFullYear()
let idade = anoAtual - anoNasc

// Se participantes for inferior a 100 permitir o cadastro
if(quantidadeP < 100){
    console.log("cadastro permitido")
    console.log(quantidadeP)
}else{
    console.log("Não é permitido se cadastrar. Número máximo de participantes atingido!")
}
console.log(dataEvento)