class carro {
    ano;
    modelo;
    preco;

    constructor (ano, modelo, preco) {
        this.ano = ano;
        this.modelo = modelo;
        this.preco = preco;
    }

    descreverCarro (){
        console.log(`
        Dados do carro:
        ----------------
        ano: ${this.ano}
        modelo: ${this.modelo}
        preço: ${this.preco}
        `)
    }
}

function compararCarros (p1, p2){
    if (p1.preco > p2.preco){
        console.log(`O carro ${p1.modelo} é mais caro que o carro ${p2.modelo}!`);
    } else if (p1.preco < p2.preco) {
        console.log(`O carro ${p2.modelo} é mais caro que o carro ${p1.modelo}!`);
    } else {
        console.log(`Os carros ${p1.modelo} e ${p2.modelo} tem o mesmo preço de ${p1.preco} reais!`)
    }
}


let carro1 = new carro(2017, 'Honda Fit', 60000);
let carro2 = new carro(2023, 'Honda City', 150000);
carro1.descreverCarro();
carro2.descreverCarro();

compararCarros(carro1, carro2);