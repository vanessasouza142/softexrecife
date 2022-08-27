/*Crie uma classe e insira nela, no mínimo, dois atributos, os quais devem ter um método acessor (get) e um método modificador 
(set) para cada. Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.
*/

class funcionario {
    constructor (nome, idade, setor){
        this._nome = nome
        this._idade = idade
        this._setor = setor
    }
    get novonome (){
        return this._nome
    }
    set novonome (novonome){
        return this._nome = novonome
    }
    get novaidade (){
        return this._idade
    }
    set novaidade (novaidade){
        return this._idade = novaidade
    }
    get novosetor (){
        return this._setor
    }
    set novosetor (novosetor){
        return this.setor = novosetor
    }
} 

const object = new funcionario ("José", "43", "Técnico")
console.log(object._nome)
console.log(object._idade)
console.log(object._setor)
