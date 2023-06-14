/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto,
    considerando o preoço normal de etiqueta e a escolha da condição de pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let condicao_de_pagamento = 4;
let preco_do_produto = 100;
const debito = preco_do_produto - (10/100 * preco_do_produto)
const dinheiro_ou_pix = preco_do_produto - (15/100 * preco_do_produto)
const acima_de_duas_vezes = preco_do_produto + (10/100 * preco_do_produto)

if (condicao_de_pagamento === 1) {
    console.log('### 10% de desconto! ###');
    preco_do_produto = debito;
    console.log('Preço final: R$', preco_do_produto.toFixed(2));
} else if (condicao_de_pagamento === 2) {
    console.log('### 15% de desconto! ###');
    preco_do_produto = dinheiro_ou_pix;
    console.log('Preço final: R$', preco_do_produto.toFixed(2));
} else if (condicao_de_pagamento === 3) {
    console.log('Preço final: R$', preco_do_produto.toFixed(2));
} else {
    console.log('### Juros 10% ###');
    preco_do_produto = acima_de_duas_vezes;
    console.log('Preço final: R$', preco_do_produto.toFixed(2))
}
