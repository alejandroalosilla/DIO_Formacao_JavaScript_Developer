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

function debito (x){
    x = x - (10/100 * x);
    return x;
}


function dinheiro_ou_pix (x){
    x = x - (15/100 * x);
    return x;
}


function acima_de_duas_vezes (x){
    x = x + (10/100 * x);
    return x;
}


function condicaoPagamento (op, p) {

    if (op === 1) {
        console.log('### 10% de desconto! ###');
        console.log('Preço final: R$', debito(p).toFixed(2));
    } else if (op === 2) {
        console.log('### 15% de desconto! ###');
        console.log('Preço final: R$', dinheiro_ou_pix(p).toFixed(2));
    } else if (op === 3) {
        console.log('Preço final: R$', p.toFixed(2));
    } else if (op === 4){
        console.log('### Juros 10% ###');
        console.log('Preço final: R$', acima_de_duas_vezes(p).toFixed(2));
    }
}


function main() {
    let condicao_de_pagamento = 1;
    let preco_do_produto = 100;

    condicaoPagamento(condicao_de_pagamento, preco_do_produto);
}

main();
