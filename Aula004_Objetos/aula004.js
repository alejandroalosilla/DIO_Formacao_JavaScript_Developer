class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const alejandro = new Pessoa();
alejandro.nome = 'Alejandro';
alejandro.idade = 24;

const joao = new Pessoa();
joao.nome = 'João';
joao.idade = 23;

alejandro.descrever();
joao.descrever();
