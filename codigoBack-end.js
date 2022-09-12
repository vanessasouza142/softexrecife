/*Crie um código JavaScript no back-end utilizando o Node.JS. No código, você deverá elaborar uma ou mais rotas, que podem ser de qualquer tipo (get, put etc). 
Depois, faça um teste em aplicações de rota, como o Postman ou o Insomnia, para confirmar se o retorno está coerente com o que você programou.
Observação: os prints, ou o próprio código, devem ser divididos por arquivos. Por exemplo, o código de rotas está em um arquivo diferente do código de conexão.
*/

//CODIGO
const porta = 6060

const express = require('express')
const app = express()

app.get('/user', (req, res, next) => {
    res.send({
        usuario1: {
            nome: "Vanessa Souza",
            email: "vanessasouza@gmail.com"
        },
        usuario2: {
            nome: "Maria Eduarda",
            email: "mariaeduarda@gmail.com"
        }
    }) 
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

