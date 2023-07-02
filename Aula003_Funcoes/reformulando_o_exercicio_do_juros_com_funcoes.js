/*
    (Reformulação do Exercício do Juros com Funções)
    Elabore um algoritmo que calcule o que deve ser pago por um produto,
    considerando o preoço normal de etiqueta e a escolha da condição de pagamento.

    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/


function condicaoDebito (preco) {
    const debito = preco - (10/100 * preco);
    return debito;
}

function condicaoDinheiroOuPix (preco) {
    const dinheiro_ou_pix = preco - (15/100 * preco);
    return dinheiro_ou_pix;
}

function acimaDeDuasVezes (preco) {
    const acima_de_duas_vezes = preco + (10/100 * preco);
    return acima_de_duas_vezes;
}

function condicaoDePagamento (condicao, preco) {
    if (condicao === 1) { //Débito
        console.log('### 10% de desconto! ###');
        preco_do_produto = condicaoDebito(preco);
        console.log('Preço final: R$', preco_do_produto.toFixed(2));
    } else if (condicao === 2) { // Dinheiro ou pix
        console.log('### 15% de desconto! ###');
        preco_do_produto = condicaoDinheiroOuPix(preco);
        console.log('Preço final: R$', preco_do_produto.toFixed(2));
    } else if (condicao === 3) { // Até duas vezes
        console.log('Preço final: R$', preco.toFixed(2));
    } else if (condicao === 4) { // Acima de duas vezes
        console.log('### Juros 10% ###');
        preco_do_produto = acimaDeDuasVezes(preco);
        console.log('Preço final: R$', preco_do_produto.toFixed(2))
    }
}

function main() {
    condicaoDePagamento(3, 100);
}

main()
