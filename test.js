function incrementarJuros (valor, porcentagem) {
    valor = valor + (porcentagem / 100) * valor;
    return valor;
}


let valor_final = incrementarJuros(100, 10);

console.log(valor_final);
