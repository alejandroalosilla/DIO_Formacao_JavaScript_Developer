class Pessoa {
    nome;
    idade;
    ano_de_nascimento;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.ano_de_nascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const alejandro = new Pessoa('Alejandro', 25);
const joao = new Pessoa('João', 26);
const maria = new Pessoa('Maria', 18);


console.log(alejandro);
