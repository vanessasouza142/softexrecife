/*
Crie um código em que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder 
passar com nota sete.
*/

    let nota1 = prompt("Digite a sua primeira nota?")
    let nota2 = prompt("Digite a sua segunda nota?")
 
    let notaMinima = 21 - (nota1 + nota2)

    console.log("A nota mínima que você precisa tirar na próxima prova para ser aprovado é:" + notaMinima)
