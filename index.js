function FaleMais(codigoOrigem, codigoDestino, tempo, plano) {
    const tarifa = calcularTarifa(codigoOrigem, codigoDestino)
    const valorComPlano = calcularValorComPlano(tarifa, tempo, plano)
    const valorSemPlano = calcularValorSemPlano(tarifa, tempo)
    return { valorComPlano, valorSemPlano }
}

function calcularTarifa(codigoOrigem, codigoDestino) {
    if (codigoOrigem === '011' && codigoDestino === '016') return 1.90;
    if (codigoOrigem === '016' && codigoDestino === '011') return 2.90;
    if (codigoOrigem === '011' && codigoDestino === '017') return 1.70;
    if (codigoOrigem === '017' && codigoDestino === '011') return 2.70;
    if (codigoOrigem === '011' && codigoDestino === '018') return 0.90;
    if (codigoOrigem === '018' && codigoDestino === '011') return 1.90;
}

function calcularValorComPlano(tarifa, tempo, plano) {
    if (tempo > plano) {
        const tempoExcedente = tempo - plano
        const valorComPlano = tempoExcedente * (tarifa * 1.1)
        return valorComPlano.toFixed(2)
    }
    return 0
}

function calcularValorSemPlano(tarifa, tempo) {
    const valorSemPlano = tarifa * tempo
    return valorSemPlano.toFixed(2)
}