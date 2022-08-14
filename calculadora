/* 
Com os conceitos aprendidos, crie um programa de calculadora que: 
receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 
*/

function calculadora(num1, num2, o){

    let numero1 = num1
    let numero2 = num2
    let operador = o

if (operador == "+"){
    let resultado = numero1 + numero2
    return resultado
} else if (operador == "-"){
    let resultado = numero1 - numero2
    return resultado
} else if (operador == "*"){
    let resultado = numero1 * numero2
    return resultado
}else if (operador == "/"){
    let resultado = numero1 / numero2
    let resultadoResto = numero1 % numero2
        if (resultadoResto != 0){
            return "O resultado é:" + resultado + "O resto é:" + resultadoResto
        }else
            return "O resultado é:" + resultado
}
}
console.log(calculadora(9,8,"/"))
