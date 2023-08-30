function IMC (p, a) {
    return p / Math.pow(a, 2);
}


function analiseImc (imc) {
    if (imc < 18.5) {
        console.log('Abaixo do peso.');
    } else if (imc >= 18.5 && imc <= 25) {
        console.log('Peso normal.');
    } else if (imc > 25 && imc <=30) {
        console.log('Acima do peso.');
    } else if (imc > 30 && imc <= 40) {
        console.log('Obeso');
    } else {
        console.log('Obesidade Grave');
    }
}


(function () {
    let peso = 140;
    let altura = 1.78;

    let valor_imc = IMC(peso, altura);
    console.log('IMC:', valor_imc.toFixed(2));
    analiseImc(valor_imc);
})();
