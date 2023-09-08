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


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`A pessoa ${p1.nome} é mais velha que a pessoa ${p2.nome}!`);
    } else if (p1.idade === p2.idade){
        console.log(`A pessoa ${p1.nome} e ${p2.nome} tem a mesma idade!`);
    } else {
        console.log(`A pessoa ${p2.nome} é mais velha que a pessoa ${p1.nome}!`);
    }
}


const alejandro = new Pessoa('Alejandro', 27);
const joao = new Pessoa('João', 26);
const maria = new Pessoa('Maria', 18);

compararPessoas(alejandro, joao);
console.log(alejandro);
