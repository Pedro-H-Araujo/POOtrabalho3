"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medico = void 0;
var consulta_1 = require("./consulta");
var receita_1 = require("./receita");
var Medico = /** @class */ (function () {
    function Medico(nome, crm, especialidade) {
        this._nome = nome;
        this._crm = crm;
        this._especialidade = especialidade;
    }
    Object.defineProperty(Medico.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Medico.prototype, "crm", {
        get: function () {
            return this._crm;
        },
        set: function (crm) {
            this._crm = crm;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Medico.prototype, "especialidade", {
        get: function () {
            return this._especialidade;
        },
        set: function (especialidade) {
            this._especialidade = especialidade;
        },
        enumerable: false,
        configurable: true
    });
    // Método atualizado para validar a data da consulta
    Medico.prototype.registrarConsulta = function (paciente, dataConsulta) {
        var now = new Date();
        if (dataConsulta <= now) {
            console.log("Erro: A consulta só pode ser registrada para datas futuras.");
            return null;
        }
        var consulta = new consulta_1.Consulta(1, dataConsulta, 14, this, paciente);
        console.log("Consulta registrada para o paciente ".concat(paciente.nome, " com o Dr(a). ").concat(this.nome, " em ").concat(dataConsulta, "."));
        return consulta;
    };
    // Método atualizado para validar a data da receita
    Medico.prototype.emitirReceita = function (consulta, textoReceita) {
        var now = new Date();
        // A receita só pode ser emitida se a consulta for no mesmo dia
        if (consulta.dataConsulta.getDate() !== now.getDate() ||
            consulta.dataConsulta.getMonth() !== now.getMonth() ||
            consulta.dataConsulta.getFullYear() !== now.getFullYear()) {
            console.log("Erro: A receita só pode ser emitida no mesmo dia da consulta.");
            return null;
        }
        var receita = new receita_1.Receita(new Date(), textoReceita, consulta);
        console.log("Receita emitida para o paciente ".concat(consulta.paciente.nome, ": ").concat(textoReceita));
        return receita;
    };
    return Medico;
}());
exports.Medico = Medico;
