import { Medico } from './Medico';
import { Paciente } from './Paciente';


function criarMedico(): void {
    const medico = new Medico("Dr. João", 123456, "Cardiologia");
    console.log(medico.getNome());
}

criarMedico();

function criarPaciente(): void {
    const paciente = new Paciente("Maria", 12345678901, "Unimed");
    console.log(`Nome: ${paciente.getNome()}`);
    console.log(`CPF: ${paciente.getCpf()}`);
    console.log(`Convênio: ${paciente.getConvenio()}`);
}

criarPaciente();