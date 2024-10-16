import { Consulta } from './consulta';
import { Paciente } from './paciente';
import { Receita } from './receita';

export class Medico {
    private _nome: string;
    private _crm: number;
    private _especialidade: string;

    constructor(nome: string, crm: number, especialidade: string) {
        this._nome = nome;
        this._crm = crm;
        this._especialidade = especialidade;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get crm(): number {
        return this._crm;
    }

    set crm(crm: number) {
        this._crm = crm;
    }

    get especialidade(): string {
        return this._especialidade;
    }

    set especialidade(especialidade: string) {
        this._especialidade = especialidade;
    }

    // Método atualizado para validar a data da consulta
    registrarConsulta(paciente: Paciente, dataConsulta: Date): Consulta | null {
        const now = new Date();

        if (dataConsulta <= now) {
            console.log("Erro: A consulta só pode ser registrada para datas futuras.");
            return null;
        }

        const consulta = new Consulta(1, dataConsulta, 14, this, paciente);
        console.log(`Consulta registrada para o paciente ${paciente.nome} com o Dr(a). ${this.nome} em ${dataConsulta}.`);
        return consulta;
    }

    // Método atualizado para validar a data da receita
    emitirReceita(consulta: Consulta, textoReceita: string): Receita | null {
        const now = new Date();

        // A receita só pode ser emitida se a consulta for no mesmo dia
        if (
            consulta.dataConsulta.getDate() !== now.getDate() ||
            consulta.dataConsulta.getMonth() !== now.getMonth() ||
            consulta.dataConsulta.getFullYear() !== now.getFullYear()
        ) {
            console.log("Erro: A receita só pode ser emitida no mesmo dia da consulta.");
            return null;
        }

        const receita = new Receita(new Date(), textoReceita, consulta);
        console.log(`Receita emitida para o paciente ${consulta.paciente.nome}: ${textoReceita}`);
        return receita;
    }
}
