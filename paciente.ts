export class Paciente {
    private _nome: string;
    private _cpf: number;
    private _convenio: string;

    constructor(nome: string, cpf: number, convenio: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._convenio = convenio;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): number {
        return this._cpf;
    }

    set cpf(cpf: number) {
        this._cpf = cpf;
    }

    get convenio(): string {
        return this._convenio;
    }

    set convenio(convenio: string) {
        this._convenio = convenio;
    }
}
