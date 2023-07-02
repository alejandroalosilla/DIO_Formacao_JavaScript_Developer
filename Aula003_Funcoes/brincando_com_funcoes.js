function escrevaNome (nome) {
    console.log("Meu nome é " + nome);
}

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log('Maior de idade!');
    } else {
        console.log('Menor de idade!');
    }
}


function main() {
    escrevaNome("Alejandro");
    escrevaNome('Ronaldinho Gaúcho');
    maiorIdade(24);
    maiorIdade(15);
}

main()
 