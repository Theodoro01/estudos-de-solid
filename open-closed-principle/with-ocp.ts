interface Remuneravel {
    remuneracao(): number;
}

class ContratoClt implements Remuneravel{
    private salario: number;
    private bonus: number;

    constructor(salario: number, bonus: number){
        this.salario = salario
        this.bonus = bonus
    }
    
    remuneracao(): number {
        return this.salario + this.bonus
    }
}

class Estagio implements Remuneravel{
    private bolsaAuxilio: number;
    private auxilioTransporte: number;

    constructor( bolsaAuxilio: number, auxilioTransporte: number){
        this.bolsaAuxilio = bolsaAuxilio
        this.auxilioTransporte = auxilioTransporte
    }

    remuneracao(): number {
        return this.bolsaAuxilio + this.auxilioTransporte
    }
}

class SummerJob implements Remuneravel  {
    private bolsaAuxilio: number;
    private auxilioTransporte: number;

    constructor( bolsaAuxilio: number, auxilioTransporte: number){
        this.bolsaAuxilio = bolsaAuxilio
        this.auxilioTransporte = auxilioTransporte
    }

    remuneracao(): number {
        return this.bolsaAuxilio + this.auxilioTransporte
    }
}

class FolhaDePagamento {
    protected saldo: number = 0

    calculo(funcionario: Remuneravel): void {
        this.saldo = funcionario.remuneracao()
        console.log(`Essa é a remuneração: ${this.saldo}`)
    }
}


const clt = new ContratoClt(3000, 500)
const estagio = new Estagio(1200, 200)
const summerJob = new SummerJob(800, 200)

const folhaDePagamento = new FolhaDePagamento()

folhaDePagamento.calculo(clt)
folhaDePagamento.calculo(estagio)
folhaDePagamento.calculo(summerJob)
