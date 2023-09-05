const pessoa = {
    nome: 'Alejandro',
    idade: 25,
    altura: 1.78,
    descrever: function() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
};

pessoa.descrever();


class carro {
    nome;
    ano;
    preco;
    placa;

    descrever (){
        console.log(`O nome do carro é ${this.nome}, o ano é ${this.ano}, o preço é ${this.preco} e a placa é ${this.placa}`)
    }
}

let honda = new carro()
honda.nome = 'Honda Fit'
honda.ano = 2023
honda.preco = 60000
honda.placa = 'PG567'

let toyota = new carro()
toyota.nome = 'Toyota Etios'
toyota.ano = 2017
toyota.preco = 40000
toyota.placa = 'ASD3134'

honda.descrever()
toyota.descrever()
