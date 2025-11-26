import { Conta } from "./Conta.js";

export class Poupanca extends Conta {

    #rendimento;

    constructor(numeroConta, cliente, saldoInicial, rendimento = 0.005) {
        super(cliente, saldoInicial);
        this.numero = numeroConta;
        this.#rendimento = rendimento;
    }

    calcularRendimento() {
        return this.saldo * this.#rendimento;
    }

    viraMes() {
        let acrescimo = super.saldo * this.#rendimento / 100;
        super.depositar(acrescimo);
        return acrescimo
    }

    toString() {
        return "[Poupança]\n" +
            super.toString() +
            "\nRendimento: " + (this.#rendimento).toFixed(2) + "%";
    }
}
