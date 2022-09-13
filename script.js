// Criar a  tabela sendo da final
// FINAL LOUD . VS . PAIN
// LOUD FOI CAMPEÃ DE 3 PARTIDAS A 0
////////////////////////////////////////////////////////////////////////
var timesFinalLoud = {
    nome: 'Loud',
    jogoUM: 0,
    jogoDOIS: 0,
    jogoTRÊS: 0,
    jogoQUATRO: 0,
    jogoCINCO: 0,
    total: 0,
}

var timesFinalPain = {
    nome: 'Pain',
    jogoUM: 0,
    jogoDOIS: 0,
    jogoTRÊS: 0,
    jogoQUATRO: 0,
    jogoCINCO: 0,
    total: 0,
}

timesFinalLoud.total = calculaTotal(timesFinalLoud)
timesFinalPain.total = calculaTotal(timesFinalPain)

function calculaTotal(timesFinal) {
    var total = timesFinal.jogoUM + timesFinal.jogoDOIS + timesFinal.jogoTRÊS + timesFinal.jogoQUATRO + timesFinal.jogoCINCO

    return total;
}

var timesLista = [timesFinalLoud, timesFinalPain]

function exibeTimeNaTela(timesLista) {
    var elemento = ""
    for (var i = 0; i < timesLista.length; i++) {

        elemento += "<tr>";
        elemento += "<td>" + timesLista[i].nome + "</td>";
        elemento += "<td>" + timesLista[i].jogoUM + "</td>";
        elemento += "<td>" + timesLista[i].jogoDOIS + "</td>";
        elemento += "<td>" + timesLista[i].jogoTRÊS + "</td>";
        elemento += "<td>" + timesLista[i].jogoQUATRO + "</td>";
        elemento += "<td>" + timesLista[i].jogoCINCO + "</td>";
        elemento += "<td>" + timesLista[i].total + "</td>";
        elemento += "<td><button onClick='adicionarJogoUm(" + i + ")'>JogoUM</button></td>";
        elemento += "<td><button onClick='adicionarJogoDois(" + i + ")'>JogoDois</button></td>";
        elemento += "<td><button onClick='adicionarJogoTres(" + i + ")'>jogoTrês</button></td>";
        elemento += "<td><button onClick='adicionarJogoQuatro(" + i + ")'>jogoQuatro</button></td>";
        elemento += "<td><button onClick='adicionarJogoCinco(" + i + ")'>jogoCinco</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = elemento

}


exibeTimeNaTela(timesLista)

function adicionarJogoUm(i) {
    var time = timesLista[i]
    if (time.jogoUM == 0) {
        time.jogoUM++
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else if (time.total = 3) {
        alert(`PARABÊNS!! ${time.nome} É CAMPEÃO!!!!`)
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else {
        console.error('Recebe apenas um ponto de partida');
    }

}

function adicionarJogoDois(i) {
    var time = timesLista[i]
    if (time.jogoDOIS == 0) {
        time.jogoDOIS++
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else if (time.total == 3) {
        alert(`PARABÊNS!! ${time.nome} É CAMPEÃO!!!!`)
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else {
        console.error('Recebe apenas um ponto de partida');
    }

}

function adicionarJogoTres(i) {
    var time = timesLista[i]
    if (time.jogoTRÊS == 0) {
        time.jogoTRÊS++
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else if (time.total == 3) {
        alert(`PARABÊNS!! ${time.nome} É CAMPEÃO!!!!`)
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else {

        console.error('Recebe apenas um ponto de partida');
    }


}

function adicionarJogoQuatro(i) {
    var time = timesLista[i]
    if (time.jogoQUATRO == 0) {
        time.jogoQUATRO++
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else if (time.total == 3) {
        alert(`PARABÊNS!! ${time.nome} É CAMPEÃO!!!!`)
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else {
        console.error('Recebe apenas um ponto de partida');
    }
}

function adicionarJogoCinco(i) {
    var time = timesLista[i]
    if (time.jogoCINCO == 0) {
        time.jogoCINCO++
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else if (time.total == 3) {
        alert(`PARABÊNS!! ${time.nome} É CAMPEÃO!!!!`)
        time.total = calculaTotal(time)
        exibeTimeNaTela(timesLista)
    } else {
        console.error('Recebe apenas um ponto de partida');
    }

}