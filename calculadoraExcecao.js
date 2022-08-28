/*
Crie uma situação em que ocorra uma exceção dentro de um código. Utilize try/catch para realizar a captura e tratamento dessa exceção. 
*/

function calculadoraExcecao (){

 let num1 = parseFloat(prompt("Digite o primeiro número:"))
 let num2 = parseFloat(prompt("Digite o segundo número:"))
 let op = prompt("Digite o tipo de operação: +, -, * ou /")
 
 try {
    if (op != "+" && op != "-" && op != "*" && op != "/") throw "Operador Inválido!"
    else if (isNaN(num1) || isNaN(num2)) throw "Não é um número!"
    else if (num2 == 0 && op == "/") throw "O segundo número deve ser diferente de zero!"
    }

catch (e) {
    return alert("ERRO - " + e)
    }

    if (op == "+"){
    let resultado = num1 + num2
    return alert(resultado)}

    else if (op == "-"){
    let resultado = num1 - num2
    return alert(resultado)}

    else if (op == "*"){
    let resultado = num1 * num2
    return alert(resultado)}

    else if (op == "/" && num2 != 0){
    let resultado = num1 / num2
    return alert(resultado)}
  
}

calculadoraExcecao()
