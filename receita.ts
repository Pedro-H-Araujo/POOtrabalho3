class Receita {
    private dataEmissao: Date;
    private textoReceita: string;
    private consultaRef: Consulta;

    constructor(dataEmissao: Date, textoReceita: string, consultaRef: Consulta) {
        this.dataEmissao = dataEmissao;
        this.textoReceita = textoReceita;
        this.consultaRef = consultaRef;
    }

    public getDataEmissao(): Date {
        return this.dataEmissao;
    }

    public setDataEmissao(dataEmissao: Date): void {
        this.dataEmissao = dataEmissao;
    }

    public getTextoReceita(): string {
        return this.textoReceita;
    }

    public setTextoReceita(textoReceita: string): void {
        this.textoReceita = textoReceita;
    }

    public getConsultaRef(): Consulta {
        return this.consultaRef;
    }

    public setConsultaRef(consultaRef: Consulta): void {
        this.consultaRef = consultaRef;
    }
}