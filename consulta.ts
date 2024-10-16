import { Paciente } from './paciente';
import { Medico } from './medico';

export class Consulta {
    private _id: number;
    private _dataConsulta: Date;
    private _horaConsulta: number;
    private _medico: Medico;
    private _paciente: Paciente;

    constructor(id: number, dataConsulta: Date, horaConsulta: number, medico: Medico, paciente: Paciente) {
        this._id = id;
        this._dataConsulta = dataConsulta;
        this._horaConsulta = horaConsulta;
        this._medico = medico;
        this._paciente = paciente;
    }

    get id(): number {
        return this._id;
    }

    get horaConsulta(): number {
        return this._horaConsulta;
    }

    set horaConsulta(horaConsulta: number) {
        this._horaConsulta = horaConsulta;
    }

    get dataConsulta(): Date {
        return this._dataConsulta;
    }

    set dataConsulta(dataConsulta: Date) {
        this._dataConsulta = dataConsulta;
    }

    get medico(): Medico {
        return this._medico;
    }

    set medico(medico: Medico) {
        this._medico = medico;
    }

    get paciente(): Paciente {
        return this._paciente;
    }

    set paciente(paciente: Paciente) {
        this._paciente = paciente;
    }
}
