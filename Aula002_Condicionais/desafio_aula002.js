/*
    Faça um programa para calcular o valor de uma viagem.
    
    Você terá 5 variáveis. Sendo elas:
      1 - Preço do etanol;
      2 - Preço da gasolina;
      3 - O tipo de combustível que está no seu carro;
      4 - Gasto médio de combustível do carro por KM;
      5 - Distância em KM da viagem;

      Imprima no console o valor que será gasto para realizar esta viagem.
*/

let Preco_do_etanol = 3.69;
let Preco_da_gasolina = 5.21;
let Tipo_de_combustivel = 'Gasolina';
let Gasto_medio_por_km = 14;
let Distancia_Km = 100;
let Valor_da_viagem;

if (Tipo_de_combustivel == 'Etanol') {
    Valor_da_viagem = (Distancia_Km / Gasto_medio_por_km) * Preco_do_etanol

} else if (Tipo_de_combustivel == 'Gasolina') {
    Valor_da_viagem = (Distancia_Km / Gasto_medio_por_km) * Preco_da_gasolina
};

console.log('Valor da viagem: R$', Valor_da_viagem.toFixed(2));
