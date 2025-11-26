import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;
    #numeroConta;

    constructor(numeroConta, cliente, saldoInicial, tarifa = 10, limite = 500, juros = 0.02) {
        super(cliente, saldoInicial);
        this.#numeroConta = numeroConta;//tirara o numero e trocar pelo id que esta na classe conta 
        this.#tarifa = tarifa;
        this.#limiteCredito = limite;
        this.#juros = juros;
        this.#saldoDevedor = 0;
    }

    limiteDisponivel() {
        return this.#limiteCredito - this.#saldoDevedor;
    }

    sacar(valor) {
        if (valor <= this.saldo)
            return super.sacar(valor);

        let total = this.saldo + this.limiteDisponivel();

        if (valor <= total) {
            let restante = valor - this.saldo;
            super.sacar(this.saldo);
            this.#saldoDevedor += restante;
            return true;
        }
        return false;
    }

    depositar(valor) {
        if (valor <= 0) return false;

        if (this.#saldoDevedor > 0) {
            if (valor >= this.#saldoDevedor) {
                valor -= this.#saldoDevedor;
                this.#saldoDevedor = 0;
            } else {
                this.#saldoDevedor -= valor;
                return true;
            }
        }

        return super.depositar(valor);
    }

    viraMes() {
        let valorcobrado = this.#saldoDevedor * this.#juros;
        if (this.#saldoDevedor > 0.00) {
            valorcobrado += this.#saldoDevedor * this.#juros / 100;
            this.#saldoDevedor += valorcobrado;
        }
        if(!super.sacar(valorcobrado)){
            valorcobrado -= super.saldo;
            super.sacar(super.saldo);
            this.#saldoDevedor += valorcobrado;
        }
        
    }

   toString() {
    return "[Conta Corrente]\n" +
        super.toString() +
        "\nTarifa: R$ " + this.#tarifa +
        "\nLimite Crédito: R$ " + this.#limiteCredito +
        "\nSaldo Devedor: R$ " + this.#saldoDevedor.toFixed(2);
}
    }
