export class Medico {
    private nome: string;
    private crm: number;
    private especialidade: string;

    constructor(nome: string, crm: number, especialidade: string) {
        this.nome = nome;
        this.crm = crm;
        this.especialidade = especialidade;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCrm(): number {
        return this.crm;
    }

    public setCrm(crm: number): void {
        this.crm = crm;
    }

    public getEspecialidade(): string {
        return this.especialidade;
    }

    public setEspecialidade(especialidade: string): void {
        this.especialidade = especialidade;
    }

    public registrarConsulta(paciente: Paciente, dataConsulta: Date): void {
        // Implementar lógica para registrar a consulta
    }

    public emitirReceita(consulta: Consulta, textoReceita: string): void {
        // Implementar lógica para emitir a receita
    }
}
