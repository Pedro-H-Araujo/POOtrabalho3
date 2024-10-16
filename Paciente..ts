export class Paciente {
    private nome: string;
    private cpf: number;
    private convenio: string;

    constructor(nome: string, cpf: number, convenio: string) {
        this.nome = nome;
        this.cpf = cpf;
        this.convenio = convenio;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): number {
        return this.cpf;
    }

    public setCpf(cpf: number): void {
        this.cpf = cpf;
    }

    public getConvenio(): string {
        return this.convenio;
    }

    public setConvenio(convenio: string): void {
        this.convenio = convenio;
    }
}
