/*
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas
três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder 
passar com nota sete.
*/

function nota (n1, n2, n3){

    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let resultado = ((nota1+nota2+nota3)/3 >= 7) ? "Aprovado" : "Reprovado"
    console.log("Você está: " + resultado)
}        

console.log(nota(7,8,9))
