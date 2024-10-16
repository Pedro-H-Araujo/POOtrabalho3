class Consulta {
    private id: number;
    private dataConsulta: Date;
    private horaConsulta: number;
    private medico: Medico;
    private paciente: Paciente;

    constructor(id: number, dataConsulta: Date, horaConsulta: number, medico: Medico, paciente: Paciente) {
        this.id = id;
        this.dataConsulta = dataConsulta;
        this.horaConsulta = horaConsulta;
        this.medico = medico;
        this.paciente = paciente;
    }

    public getId(): number {
        return this.id;
    }

    public getDataConsulta(): Date {
        return this.dataConsulta;
    }

    public setDataConsulta(dataConsulta: Date): void {
        this.dataConsulta = dataConsulta;
    }

    public getHoraConsulta(): number {
        return this.horaConsulta;
    }

    public setHoraConsulta(horaConsulta: number): void {
        this.horaConsulta = horaConsulta;
    }

    public getMedico(): Medico {
        return this.medico;
    }

    public setMedico(medico: Medico): void {
        this.medico = medico;
    }

    public getPaciente(): Paciente {
        return this.paciente;
    }

    public setPaciente(paciente: Paciente): void {
        this.paciente = paciente;
    }
}