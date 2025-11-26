import { Cliente } from "./Cliente.js";


export class Conta {
    static #qtContas = 0; //atributo estático
    #id;
    #saldo;
    #titular; //referência para instância de Cliente
    constructor(cliente, saldo = 0.0) {
        this.titular = cliente; //chama o método set titular
        this.#saldo = saldo < 0.0 ? 0.0 : saldo;
        Conta.#qtContas++;
        this.#id = "" + new Date().getFullYear()
            + Conta.#qtContas;
    }
    static get qtContas() {
        return Conta.#qtContas;
    }
    get id() {
        return this.#id;
    }
    get titular() {
        return this.#titular;
    }
    set titular(cliente) {
        if (cliente != undefined && cliente instanceof Cliente) {
            this.#titular = cliente;
            return cliente;
        }
        return null;
    }
    get saldo() {
        return this.#saldo;
    }
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (valor > 0.00) {
            this.#saldo += valor;
            return true;
        }
        return false;
    }
    transferir(valor, contaDestino) {
        if (contaDestino instanceof Conta &&
            this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
    toString() {
        return ("Nº Conta = " + this.#id +
            "\nTitular = " + this.#titular +
            "\nSaldo = R$" + this.#saldo
        );
    }
}