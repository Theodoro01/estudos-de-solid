var ContratoClt = /** @class */ (function () {
    function ContratoClt(salario, bonus) {
        this.salario = salario;
        this.bonus = bonus;
    }
    ContratoClt.prototype.remuneracao = function () {
        return this.salario + this.bonus;
    };
    return ContratoClt;
}());
var Estagio = /** @class */ (function () {
    function Estagio(bolsaAuxilio, auxilioTransporte) {
        this.bolsaAuxilio = bolsaAuxilio;
        this.auxilioTransporte = auxilioTransporte;
    }
    Estagio.prototype.remuneracao = function () {
        return this.bolsaAuxilio + this.auxilioTransporte;
    };
    return Estagio;
}());
var SummerJob = /** @class */ (function () {
    function SummerJob(bolsaAuxilio, auxilioTransporte) {
        this.bolsaAuxilio = bolsaAuxilio;
        this.auxilioTransporte = auxilioTransporte;
    }
    SummerJob.prototype.remuneracao = function () {
        return this.bolsaAuxilio + this.auxilioTransporte;
    };
    return SummerJob;
}());
var FolhaDePagamento = /** @class */ (function () {
    function FolhaDePagamento() {
        this.saldo = 0;
    }
    FolhaDePagamento.prototype.calculo = function (funcionario) {
        this.saldo = funcionario.remuneracao();
        console.log("Essa \u00E9 a remunera\u00E7\u00E3o: ".concat(this.saldo));
    };
    return FolhaDePagamento;
}());
var clt = new ContratoClt(3000, 500);
var estagio = new Estagio(1200, 200);
var summerJob = new SummerJob(800, 200);
var folhaDePagamento = new FolhaDePagamento();
folhaDePagamento.calculo(clt);
folhaDePagamento.calculo(estagio);
