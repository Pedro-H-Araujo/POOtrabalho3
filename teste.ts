import { Medico } from './medico';
import { Paciente } from './paciente';
import { funcaomain } from './funcaomain'

// Teste 1: Tentando registrar uma consulta para o passado
const dataConsultaPassada = new Date("2023-10-10");
const consultaInvalida = medico1.registrarConsulta(paciente1, dataConsultaPassada);
if (!consultaInvalida) {
    console.log("Teste 1: Passou - Não foi possível registrar consulta no passado.");
}

// Teste 2: Registrando uma consulta para o futuro
const dataConsultaFutura = new Date("2024-11-01T09:00:00");
const consultaValida = medico1.registrarConsulta(paciente1, dataConsultaFutura);
if (consultaValida) {
    console.log("Teste 2: Passou - Consulta registrada para data futura.");
}

// Teste 3: Tentando emitir uma receita para uma consulta em outro dia
const dataConsultaOutroDia = new Date("2024-11-02T09:00:00");
const consultaOutroDia = medico1.registrarConsulta(paciente1, dataConsultaOutroDia);
const receitaInvalida = medico1.emitirReceita(consultaOutroDia, "Tomar 1 comprimido de AAS por dia.");
if (!receitaInvalida) {
    console.log("Teste 3: Passou - Não foi possível emitir receita em data diferente da consulta.");
}
