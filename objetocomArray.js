/* 
Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.
*/


// Objeto e funcao For In
let aluno = {
    nome: "Juliana"
    idade: 15
    serie: 9
}


function listaPropriedades(aluno) {
    for (const propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade]}`)
    }
}



// Array e funcao For of
const cores = ["vermelho", "azul", "amarelo"]

function listaElementosArray(cores){
    for (const elemento of cores) {
        console.log(`${elemento}`) 
    }
}
