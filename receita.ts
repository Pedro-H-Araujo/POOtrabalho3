import { Consulta } from './consulta';

export class Receita {
    private _dataEmissao: Date;
    private _textoReceita: string;
    private _consultaRef: Consulta;

    constructor(dataEmissao: Date, textoReceita: string, consultaRef: Consulta) {
        this._dataEmissao = dataEmissao;
        this._textoReceita = textoReceita;
        this._consultaRef = consultaRef;
    }

    get dataEmissao(): Date {
        return this._dataEmissao;
    }

    set dataEmissao(dataEmissao: Date) {
        this._dataEmissao = dataEmissao;
    }

    get textoReceita(): string {
        return this._textoReceita;
    }

    set textoReceita(textoReceita: string) {
        this._textoReceita = textoReceita;
    }

    get consultaRef(): Consulta {
        return this._consultaRef;
    }

    set consultaRef(consultaRef: Consulta) {
        this._consultaRef = consultaRef;
    }

    imprimirReceita() {
        console.log(`Receita médica: ${this._textoReceita}`);
    }
}
