function executar(numero) {
    resultado = ""
    if (numero % 3 === 0) {
        resultado += "Mar"
    }
    if (numero % 4 === 0) {
        resultado += "Minino"
    }
    return resultado
}

for (i = 0; i++; i <= 100) {
    executar(i + ": " + Resultado(i))
}

module.exports = executar;
