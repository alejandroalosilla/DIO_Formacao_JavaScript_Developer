const pessoa = {
    nome: 'Alejandro',
    idade: 25,
    altura: 1.78,
    descrever: function() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
};

pessoa.descrever();
