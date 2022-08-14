/*
Crie um código de sistema de notas para uma escola. Deve ser um programa que informa se o aluno reprovou, ou não, com base nas
três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
*/

function nota (n1, n2, n3){

    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let resultado = ((nota1+nota2+nota3)/3 >= 7) ? "Aprovado" : "Reprovado"
    console.log("Você está: " + resultado)
}        

console.log(nota(7,8,9))
