let nome = 'Allan Farias de Oliveira Araújo'
let idade = 32
let TotalParticipantes = 0

// VERIFICANDO A QUANTIDADE E A IDADE DO PARTICIPANTE

if (TotalParticipantes < 100 && idade >= 18) {
    TotalParticipantes++

    // VERIFICANDO A DATA DO EVENTO

    console.log('\nEscolha uma data para o Evento: \n')

    let dataEvento = '26/12/2020'
    let diaEvento = Number(dataEvento.split('/')[0])
    let mesEvento = Number(dataEvento.split('/')[1])
    let anoEvento = Number(dataEvento.split('/')[2])

    let dataAtual = new Date()
    let diaAtual = dataAtual.getDay()
    let mesAtual = dataAtual.getMonth()
    let anoAtual = dataAtual.getFullYear()

    if (anoEvento < anoAtual) {
        console.log('Data inválida. Escolha outra data para o evento\n')
    } else if (mesEvento < mesAtual) {
        console.log('Data inválida. Escolha outra data para o evento\n')
    } else if (diaEvento < diaAtual) {
        console.log('Data inválida. Escolha outra data para o evento\n')
    } else {
        console.log('Escolha o evento...\n')
    }

    // ESCOLHENDO O EVENTO

    console.log('Digite 1 para evento A ou 2 para evento B\n')

    let resposta = 1
    let eventoA = []
    let eventoB = []

    if (resposta == 1) {
        console.log('Parabéns! Você foi cadastrado com suscesso no Evento A\n')
        eventoA.push(nome)
    } else if (resposta == 2) {
        console.log('Parabéns! Você foi cadastrado com suscesso no Evento B\n')
        eventoB.push(nome)
    } else {
        console.log('Digite uma opção válida.\n')
    }

    // LISTANDO OS PARTICIPANTES POR EVENTO

    console.log('Qual evento gostaria de listar?: \n')
    console.log('Digite 1 para Evento A ou 2 para Evento B\n')

    let listaEvento = 1

    if (listaEvento == 1) {
        console.log('Listando participantes do Eventon A\n')
        for (i = 0; i < eventoA.length; i++) {
            console.log(eventoA[i])
        }
        console.log(
            `Total de participantes cadastrados no Evento A é: ${eventoA.length}\n`
        )
        console.log(
            `\nTotal de participantes é: ${eventoA.length + eventoB.length}\n`
        )
    } else if (listaEvento == 2) {
        console.log('Listando participantes do Evento B\n')
        for (i = 0; i < eventoB.length; i++) {
            console.log(eventoB[i])
        }
        console.log(
            `\nTotal de participantes cadastrados no Evento B é: ${eventoB.length}\n`
        )
        console.log(
            `Total de participantes é: ${eventoA.length + eventoB.length}\n`
        )
    } else {
        console.log('Digite um evento válido para listar.\n')
    }
} else if (TotalParticipantes >= 100) {
    console.log(
        'Número máximo de participantes atingido. Não é possível se cadastrar.\n'
    )
} else if (idade < 18) {
    console.log('Você não possui idade mínima para se cadastrar.\n')
}
