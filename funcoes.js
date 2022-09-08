/*
Crie um programa que contenha os seguintes tipos de funções:

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.
*/

// 1- Funcao sem definicao de parametro
function helloWorld(){
    return "Hello World"
}
console.log(helloWorld())


// 2- Funcao com definicao de parametro
function multiplicacao(num1, num2){
    multiplicacao = (num1 * num2)
    return multiplicacao
}
console.log(multiplicacao(2,2))

// 3- Arrow Function
calculaimc = (peso, altura) => {
    imc = peso / (altura * altura)
    return imc
}
console.log(calculaimc(63, 1.65))
