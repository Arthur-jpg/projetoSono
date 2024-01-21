function entrada() {
    const dormir = document.querySelector('.input1').value
    const acordar = document.querySelector('.input2').value

    const dataAtual = new Date()
    const dormirPartes = dormir.split(":")
    const acrodarPartes = acordar.split(":")

    const dormirHoras = parseInt(dormirPartes[0])
    const dormirMinutos = parseInt(dormirPartes[1])

    const acordarHoras = parseInt(acrodarPartes[0])
    const acordarMinutos = parseInt(acrodarPartes[1])

    const dataComDormir = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate(), dormirHoras, dormirMinutos)
    const dataComAcordar = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate(), acordarHoras, acordarMinutos)

    let minutosDiferenca = ''
    let horasDif = ''
    if (acordarHoras > dormirHoras) {
        const minutosDif = Math.abs(dataComAcordar - dataComDormir) / (1000*60)
        minutosDiferenca = minutosDif
    } else if (acordarHoras < dormirHoras) {
        const minutosDif = ((dataComAcordar - dataComDormir) + 24) / (1000*60)
        minutosDiferenca = minutosDif
        
    } else {
        console.log('Alguma coisa deu errado')
    }

    const intervalos = Math.floor(minutosDiferenca/90)

        
    const horarioFinalUltimoIntervalo = new Date(dataComDormir.getTime() + intervalos * 90 * 60 * 1000)
    const respostaHorario = horarioFinalUltimoIntervalo.toLocaleTimeString('pt-BR')

    if (acordarHoras > dormirHoras) {
        const horasDife = (horarioFinalUltimoIntervalo - dataComDormir ) / (1000*60*60)
        horasDif = horasDife
    } else if (acordarHoras < dormirHoras) {
        const horasDife = ((horarioFinalUltimoIntervalo - dataComDormir) / (1000*60*60))+24
        horasDif = horasDife
    } else {
        console.log('Alguma coisa deu errado')
    }
    

    const htmlResposta = `<div>Hora de acordar ${respostaHorario}</div>
    <div>Serão ${horasDif} horas de sono</div>
    `

    document.querySelector('.resposta').innerHTML = htmlResposta

    localStorage.setItem('resultadoUltimoCalculo', respostaHorario);
    localStorage.setItem('resultadoUltimoCalculoHoras', horasDif);


    document.querySelector('.resposta').innerHTML = htmlResposta;
}



function recuperarResultado() {
    const resultadoSalvoH = localStorage.getItem('resultadoUltimoCalculo')
    const resultadoSalvoHD = localStorage.getItem('resultadoUltimoCalculoHoras')
    const htmlResposta = `<div>Na última vez você acordou as ${resultadoSalvoH}</div>
    <div>Você teve ${resultadoSalvoHD} horas de sono</div>
    `
    if (resultadoSalvoH) {
        document.querySelector('.resposta').innerHTML = htmlResposta
    }
}


window.onload = recuperarResultado;
