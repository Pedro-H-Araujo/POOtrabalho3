"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Receita = void 0;
var Receita = /** @class */ (function () {
    function Receita(dataEmissao, textoReceita, consultaRef) {
        this._dataEmissao = dataEmissao;
        this._textoReceita = textoReceita;
        this._consultaRef = consultaRef;
    }
    Object.defineProperty(Receita.prototype, "dataEmissao", {
        get: function () {
            return this._dataEmissao;
        },
        set: function (dataEmissao) {
            this._dataEmissao = dataEmissao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Receita.prototype, "textoReceita", {
        get: function () {
            return this._textoReceita;
        },
        set: function (textoReceita) {
            this._textoReceita = textoReceita;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Receita.prototype, "consultaRef", {
        get: function () {
            return this._consultaRef;
        },
        set: function (consultaRef) {
            this._consultaRef = consultaRef;
        },
        enumerable: false,
        configurable: true
    });
    Receita.prototype.imprimirReceita = function () {
        console.log("Receita m\u00E9dica: ".concat(this._textoReceita));
    };
    return Receita;
}());
exports.Receita = Receita;
