import { Medico } from './medico';
import { Paciente } from './paciente';


const medico = new Medico("Dr. João", 12345, "Cardiologia");
const paciente = new paciente("Maria", 45);
const dataConsulta = new Date();

const consulta = medico.registrarConsulta(paciente, dataConsulta);
const receita = medico.emitirReceita(consulta, "Tomar 1 comprimido de AAS por dia.");

receita.imprimirReceita();