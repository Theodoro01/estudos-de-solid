/*
    Desse jeito que funciona, porém não esta utilizando o Open Closed Principle. 
    Pois a primeira regra do OCP é que uma classe, metodo ou function não pode ser modificado,
    e nesse exemplo se precisarmos adicionar um PJ por exemplo, violara a regra pois teriamos que refatorar a classe 
    folha de pagamentos adicionando um if()...
*/

// class CLT {
//     salario () {
//         return 3000
//     }

// }

// class Estagio {
//     bolsaAuxilio (){
//         return 1200
//     }
// }

// class FolhaDePagamento {
//     calcular (funcionario) {
//         if(funcionario instanceof CLT){
//             return funcionario.salario()
//         } else if (funcionario instanceof Estagio){
//             return funcionario.bolsaAuxilio()
//         }
//     }
// }

// const contratoCLT = new CLT();
// const estagio = new Estagio();

// const folha = new FolhaDePagamento()

// const folhaCLT = folha.calcular(contratoCLT)
// const folhaEstagio = folha.calcular(estagio)

// console.log(folhaCLT)
// console.log(folhaEstagio)