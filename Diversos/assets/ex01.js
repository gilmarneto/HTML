let resultado = document.querySelector("#resultado");
let valores = [];
let numeroEntrada = 0
let entrada = true;

entradaValor("Informe um número inteiro positivo");

function entradaValor(mensagem) {
    if(entrada == true) {
        let valor = parseInt(prompt(mensagem));
        verificarEntrada(valor);        
    }
}

function verificarEntrada(valor) {
    if(valor <= 0) {
        entradaValor(msg);
    } else if(numeroEntrada >= 1) {
        valores.push(valor);
        entrada = false;
    } else {
        valores.push(valor);
        numeroEntrada += 1;
        entradaValor("Informe outro número inteiro positivo");
    }
}

resultado.innerHTML = (`O Resultado da divisão entre ${valores[0]} e ${valores[1]} é: ${valores[0] / valores[1]}`);
