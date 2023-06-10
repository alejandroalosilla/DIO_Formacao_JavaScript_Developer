/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do combustível;
    2 - Gasto médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

    Imprima no console o valor que será gasto de combustível para
    realizar esta viagem.
*/

let preco_do_combustivel = 5.21;
let gasto_combustivel_km = 14;
let distancia_km = 100;

let valor_gasto_combustivel = (distancia_km / gasto_combustivel_km) * preco_do_combustivel;

console.log(valor_gasto_combustivel.toFixed(2) + ' litros');
