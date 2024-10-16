"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var medico_1 = require("./medico");
var paciente_1 = require("./paciente");
// Consulta para o dia atual (deve permitir emitir receita)
var medico1 = new medico_1.Medico("Dr. João", 12345, "Cardiologia");
var paciente1 = new paciente_1.Paciente("Maria", 12345678900, "Unimed");
var dataConsulta1 = new Date(); // Data de hoje
var consulta1 = medico1.registrarConsulta(paciente1, dataConsulta1);
if (consulta1) {
    var receita1 = medico1.emitirReceita(consulta1, "Tomar 1 comprimido de AAS por dia.");
    if (receita1) {
        receita1.imprimirReceita();
    }
    else {
        console.log("Erro ao emitir receita. A receita só pode ser emitida no dia da consulta.");
    }
}
// Consulta para uma data no futuro (não deve permitir emitir receita hoje)
var medico2 = new medico_1.Medico("Dra. Ana", 54321, "Dermatologia");
var paciente2 = new paciente_1.Paciente("Pedro", 98765432100, "Amil");
var dataConsulta2 = new Date("2024-11-03T10:30:00"); // Data futura
var consulta2 = medico2.registrarConsulta(paciente2, dataConsulta2);
if (consulta2) {
    var receita2 = medico2.emitirReceita(consulta2, "Aplicar creme dermatológico pela manhã e noite.");
    if (receita2) {
        receita2.imprimirReceita();
    }
    else {
        console.log("Erro ao emitir receita. Não é possível emitir receita antes da consulta.");
    }
}
// Consulta para uma data no passado (não deve permitir emitir receita)
var medico3 = new medico_1.Medico("Dr. Carlos", 67890, "Ortopedia");
var paciente3 = new paciente_1.Paciente("Lucas", 55566677788, "Bradesco Saúde");
var dataConsulta3 = new Date("2023-10-10T14:00:00"); // Data no passado
var consulta3 = medico3.registrarConsulta(paciente3, dataConsulta3);
if (consulta3) {
    var receita3 = medico3.emitirReceita(consulta3, "Fazer fisioterapia 3 vezes por semana.");
    if (receita3) {
        receita3.imprimirReceita();
    }
    else {
        console.log("Erro ao emitir receita. Não é possível emitir receita para consultas já passadas.");
    }
}
// Consulta para hoje, mas não emitindo receita
var medico4 = new medico_1.Medico("Dra. Beatriz", 98765, "Pediatria");
var paciente4 = new paciente_1.Paciente("Júlia", 66677788899, "SulAmérica");
var dataConsulta4 = new Date(); // Data de hoje
var consulta4 = medico4.registrarConsulta(paciente4, dataConsulta4);
if (consulta4) {
    console.log("Consulta registrada para ".concat(paciente4.nome, ", sem emiss\u00E3o de receita."));
}
