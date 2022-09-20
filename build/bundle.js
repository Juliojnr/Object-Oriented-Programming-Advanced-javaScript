var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(tipoconta, numeroDaConta, pix) {
        this.numeroDaConta = numeroDaConta;
        this.tipoconta = tipoconta;
        this.pix = pix;
    }
    ContaBancaria.prototype.ChangePix = function (pix) {
        this.pix = pix;
    };
    return ContaBancaria;
}());
var Contabancaria = new ContaBancaria('Corrente', 12305609, 'julio123@gmail.com');
console.table(Contabancaria);
var Paciente = /** @class */ (function () {
    function Paciente(medico, prontuario, clinicaMedica) {
        this.medico = medico;
        this.prontuario = prontuario;
        this.clinicaMedica = clinicaMedica;
    }
    Paciente.prototype.ChangeclinicaMedica = function (clinicaMedica) {
        this.clinicaMedica = clinicaMedica;
    };
    return Paciente;
}());
var paciente = new Paciente('Fisioterapeuta', 'Atualizado', 'Clinica Campos Elisios');
console.table(paciente);
var Patinete = /** @class */ (function () {
    function Patinete(maxspeed, color, speed, autoOrNot) {
        this.autoOrNot = autoOrNot;
        this.color = color;
        this.maxSpeed = maxspeed;
        this.speed = speed;
    }
    Patinete.prototype.ChangeAutoOrNot = function (autoOrNot) {
        this.autoOrNot = autoOrNot;
    };
    Patinete.prototype.ChangeSpeed = function (speed) {
        this.speed = speed;
    };
    return Patinete;
}());
var patinete = new Patinete('30 Km/H', 'Green', '15 Km/H', true);
console.table(patinete);
