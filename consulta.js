"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
var Consulta = /** @class */ (function () {
    function Consulta(id, dataConsulta, horaConsulta, medico, paciente) {
        this._id = id;
        this._dataConsulta = dataConsulta;
        this._horaConsulta = horaConsulta;
        this._medico = medico;
        this._paciente = paciente;
    }
    Object.defineProperty(Consulta.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consulta.prototype, "horaConsulta", {
        get: function () {
            return this._horaConsulta;
        },
        set: function (horaConsulta) {
            this._horaConsulta = horaConsulta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consulta.prototype, "dataConsulta", {
        get: function () {
            return this._dataConsulta;
        },
        set: function (dataConsulta) {
            this._dataConsulta = dataConsulta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consulta.prototype, "medico", {
        get: function () {
            return this._medico;
        },
        set: function (medico) {
            this._medico = medico;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consulta.prototype, "paciente", {
        get: function () {
            return this._paciente;
        },
        set: function (paciente) {
            this._paciente = paciente;
        },
        enumerable: false,
        configurable: true
    });
    return Consulta;
}());
exports.Consulta = Consulta;
