/*Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. Para isso, você deve ter o Node.js instalado. 
Após fazer essa migração, coloque seu código no arquivo "index.js", teste e tire um print.
*/

/* CODIGO */

function nota (n1, n2, n3){

    let nota1 = n1
    let nota2 = n2
    let nota3 = n3
    let resultado = ((nota1+nota2+nota3)/3 >= 7) ? "Aprovado" : "Reprovado"
    console.log("Você está: " + resultado)
}        

console.log(nota(7,8,9))

/* PRINT DO CODIGO EXECUTADO NO NODE */


