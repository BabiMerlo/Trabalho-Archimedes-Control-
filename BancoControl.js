import { Cliente } from "./Cliente.js";
import { Poupanca } from "./poupanca.js";
import { ContaCorrente } from "./ContaCorrente.js";


var vetContas = [];
export function carregadorDados() {
    let cliente1 = new Cliente("Allan", "13268107745", "23/08/2002");
    let cliente2 = new Cliente("Elder", "12186108875", "23/05/1974");
    vetContas.push(new Poupanca(13268107745, cliente1, 5000, 0.02));
    vetContas.push(new ContaCorrente(12186108875, cliente2, 3000, 10, 500, 0.02));
}
export function listarContas() {
    return vetContas;
}
export function cadastrarConta(numeroConta, nomeCliente, saldoInicial) {
    let objConta = vetContas.find(conta => conta.numero == numeroConta);
    if (objConta == undefined) {
        let cliente = new Cliente(nomeCliente, "", "");
        objConta = new ContaCorrente(numeroConta, cliente, saldoInicial);
        vetContas.push(objConta);
        return true;
    }
    return false;
}

export function cadastrarPoupanca(numeroConta, nomeCliente, saldoInicial, rendimento = 0.02) {
    // verifica se numero de conta já existe
    let objConta = vetContas.find(conta => conta.numero == numeroConta);
    if (objConta == undefined) {
        let cliente = new Cliente(nomeCliente, "", "");
        objConta = new Poupanca(numeroConta, cliente, saldoInicial, rendimento);
        vetContas.push(objConta);
        return true;
    }
    return false;
}

export function excluirConta(numeroConta) {
    let indConta = vetContas.findIndex(conta => conta.numero == numeroConta);
    if (indConta == -1) return false;
    vetContas.splice(indConta, 1);
    return true;
}
export function depositar(numeroConta, valor) {
    let objConta = vetContas.find(conta => conta.numero == numeroConta);
    if (objConta != undefined) {
        objConta.depositar(valor);
        return true;
    }
    return false;
}
export function sacar(numeroConta, valor) {
    let objConta = vetContas.find(conta => conta.numero == numeroConta);
    if (objConta != undefined) return objConta.sacar(valor);
    return false;
}
export function transferir(numeroContaDebito, numeroContaCredito, valor) {
    let objContaDebito = vetContas.find(conta => conta.numero == numeroContaDebito);
    let objContaCredito = vetContas.find(conta => conta.numero == numeroContaCredito);
    if (objContaDebito != undefined && objContaCredito != undefined) {
        if (objContaDebito.sacar(valor)) {
            objContaCredito.depositar(valor);
            return true;
        }
        return false;
    }
    return false;
}
