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

/* CODIGO EXECUTADO NO NODE */

About to write to C:\Users\Vanessa Souza\Desktop\Softex\Módulo 2 - JavaScript\0 - codigos_javascript\projeto node.js\package.json:

{
  "name": "projeto-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes

C:\Users\Vanessa Souza\Desktop\Softex\Módulo 2 - JavaScript\0 - codigos_javascript\projeto node.js>node index.js
Você está: Aprovado
undefined

