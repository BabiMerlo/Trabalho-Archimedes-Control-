import * as BancoControl from "./BancoControl.js";

window.BancoControl = BancoControl; 

BancoControl.carregadorDados();

console.log("=== LISTAGEM INICIAL DE CONTAS ===");
BancoControl.listarContas().forEach(conta => {
    console.log(conta.toString());
    console.log("----------------------");
});

// BancoControl.depositar(1001, 2000);
// BancoControl.sacar(1002, 1500);
// BancoControl.transferir(1001, 1002, 1000);

// console.log("=== LISTAGEM DE CONTAS APÓS TRANSAÇÕES ===");
// BancoControl.listarContas().forEach(conta => {
//     console.log(conta.toString());
//     console.log("----------------------");
// });

//BancoControl.listarContas() — Ver tipos de contas existentes

//BancoControl.listarContas().forEach(c => console.log(c.toString())) — ver listagem de contas e atualização pós transações

//BancoControl.depositar(//CPF\\, //valor do depósito\\) — fazer depósito

/*BancoControl.sacar(//CPF\\, //valor do saque\\) — fazer saque

BancoControl.transferir(//CPF que vai transferir\\, //CPF que vai receber\\, //valor da transferência\\) — fazer transferência

BancoControl.excluirConta(//CPF\\) – Excluir conta

BancoControl.cadastrarConta(//CPF\\, //"Nome"\\, //Valor inicial na conta\\) - Cadastrar conta corrente

BancoControl.cadastrarPoupanca(//CPF\\, //"Nome"\\, //Valor inicial na conta\\) - Cadastrar conta poupança

BancoControl.listarContas().forEach(c => c.viraMes()); - Realizar ViraMes*/