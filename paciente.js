"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nome, cpf, convenio) {
        this._nome = nome;
        this._cpf = cpf;
        this._convenio = convenio;
    }
    Object.defineProperty(Paciente.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Paciente.prototype, "convenio", {
        get: function () {
            return this._convenio;
        },
        set: function (convenio) {
            this._convenio = convenio;
        },
        enumerable: false,
        configurable: true
    });
    return Paciente;
}());
exports.Paciente = Paciente;
