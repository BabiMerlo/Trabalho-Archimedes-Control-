export class Cliente {
    #nome;
    #cpf;
    #dtNascimento;
    constructor(name, cpf, birthDay) {
        this.#nome = name.toUpperCase();
        this.#cpf = cpf;
        if (birthDay != undefined) {
            this.#dtNascimento = birthDay;
        } else {
            this.#dtNascimento = "2000/01/01";
        }
    }
    get nome() {
        return this.#nome;
    }
    set nome(newName) {
        if (newName == "") {
            return null;
        }
        this.#nome = newName.toUpperCase();
        return this.#nome;
    }
    get cpf() {
        return this.#cpf;
    }
    get dtNascimento() {
        return this.#dtNascimento;
    }
    set dtNascimento(newBirthDay) {
        if (newBirthDay == undefined ||
            newBirthDay == "" ||
            newBirthDay.length != 10) {
            return null;
        }
        this.#dtNascimento = newBirthDay;
        return this.#dtNascimento;
    }
    toString() {
        return "Nome: " + this.#nome +
            "\nCPF: " + this.#cpf +
            "\nNascimento : " + this.#dtNascimento;
    }
}