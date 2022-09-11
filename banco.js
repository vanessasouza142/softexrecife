/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: 
buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.
*/

function banco (conta, saldo, tipodeConta, agencia) {
    this.conta = conta
    this.saldo = saldo
    this.tipodeConta = tipodeConta
    this.agencia = agencia

    buscarSaldo = function valorAtualSaldo() {
        return (this.saldo)
    }
    deposito = function deposito (valorDeposito) {
        return (this.saldo + valorDeposito)
    }
    saque = function (valorSaque) {
       return (this.saldo - valorSaque)
    }
    numeroConta = function () {
        return (this.conta)
    }
}

let minhaConta = new banco ("60500", 2000, "contacorrente", "0123")

console.log(minhaConta)
console.log(minhaConta.buscarSaldo()) 
console.log(minhaConta.deposito(1000))
console.log(minhaConta.saque(300))
console.log(minhaConta.numeroConta())
