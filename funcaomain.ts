import { Medico } from './medico';
import { Paciente } from './paciente';

// Consulta para o dia atual (deve permitir emitir receita)
const medico1 = new Medico("Dr. João", 12345, "Cardiologia");
const paciente1 = new Paciente("Maria", 12345678900, "Unimed");
const dataConsulta1 = new Date();  // Data de hoje

const consulta1 = medico1.registrarConsulta(paciente1, dataConsulta1);
if (consulta1) {
    const receita1 = medico1.emitirReceita(consulta1, "Tomar 1 comprimido de AAS por dia.");
    if (receita1) {
        receita1.imprimirReceita();
    } else {
        console.log("Erro ao emitir receita. A receita só pode ser emitida no dia da consulta.");
    }
}

// Consulta para uma data no futuro (não deve permitir emitir receita hoje)
const medico2 = new Medico("Dra. Ana", 54321, "Dermatologia");
const paciente2 = new Paciente("Pedro", 98765432100, "Amil");
const dataConsulta2 = new Date("2026-11-03T10:30:00");  // Data futura

const consulta2 = medico2.registrarConsulta(paciente2, dataConsulta2);
if (consulta2) {
    const receita2 = medico2.emitirReceita(consulta2, "Aplicar creme dermatológico pela manhã e noite.");
    if (receita2) {
        receita2.imprimirReceita();
    } else {
        console.log("Erro ao emitir receita. Não é possível emitir receita antes da consulta.");
    }
}

// Consulta para uma data no passado (não deve permitir emitir receita)
const medico3 = new Medico("Dr. Carlos", 67890, "Ortopedia");
const paciente3 = new Paciente("Lucas", 55566677788, "Bradesco Saúde");
const dataConsulta3 = new Date("2025-10-10T14:00:00");  // Data no passado

const consulta3 = medico3.registrarConsulta(paciente3, dataConsulta3);
if (consulta3) {
    const receita3 = medico3.emitirReceita(consulta3, "Fazer fisioterapia 3 vezes por semana.");
    if (receita3) {
        receita3.imprimirReceita();
    } else {
        console.log("Erro ao emitir receita. Não é possível emitir receita para consultas já passadas.");
    }
}

// Consulta para hoje, mas não emitindo receita
const medico4 = new Medico("Dra. Beatriz", 98765, "Pediatria");
const paciente4 = new Paciente("Júlia", 66677788899, "SulAmérica");
const dataConsulta4 = new Date();  // Data de hoje

const consulta4 = medico4.registrarConsulta(paciente4, dataConsulta4);
if (consulta4) {
    console.log(`Consulta registrada para ${paciente4.nome}, sem emissão de receita.`);
}
