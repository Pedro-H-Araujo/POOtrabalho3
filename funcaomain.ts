import { Consulta } from './consulta';
import { Medico } from './medico';
import { Paciente } from './paciente';

const medico1 = new Medico("Dr. João", 12345, "Cardiologia");
const paciente1 = new Paciente("Maria", 12345678900, "Unimed");
const dataConsulta1 = new Date("2024-11-01T09:00:00");

const consulta1 = medico1.registrarConsulta(paciente1, dataConsulta1);
const receita1 = medico1.emitirReceita(consulta1, "Tomar 1 comprimido de AAS por dia.");
receita1.imprimirReceita();

const medico2 = new Medico("Dra. Ana", 54321, "Dermatologia");
const paciente2 = new Paciente("Pedro", 98765432100, "Amil");
const dataConsulta2 = new Date("2024-11-03T10:30:00");

const consulta2 = medico2.registrarConsulta(paciente2, dataConsulta2);
const receita2 = medico2.emitirReceita(consulta2, "Aplicar creme dermatológico pela manhã e noite.");
receita2.imprimirReceita();


const medico3 = new Medico("Dr. Carlos", 67890, "Ortopedia");
const paciente3 = new Paciente("Lucas", 55566677788, "Bradesco Saúde");
const dataConsulta3 = new Date("2024-11-05T14:00:00");

const consulta3 = medico3.registrarConsulta(paciente3, dataConsulta3);
const receita3 = medico3.emitirReceita(Consulta3, "Fazer fisioterapia 3 vezes por semana.");
receita3.imprimirReceita();

const medico4 = new Medico("Dra. Beatriz", 98765, "Pediatria");
const paciente4 = new Paciente("Júlia", 66677788899, "SulAmérica");
const dataConsulta4 = new Date("2024-11-07T08:00:00");

const consulta4 = medico4.registrarConsulta(paciente4, dataConsulta4);
console.log(`Consulta registrada para ${paciente4.nome}, mas sem receita.`);
