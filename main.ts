import { Medico } from "./medico";
import { Consulta } from "./consulta";
import { Receita } from "./receita";
import { Paciente } from "./paciente";


const paciente1= new Paciente("Joao", 12345, "unimed");
const medico1 = new Medico ("Dr Paulo", 5425, "geriatria");
const consulta1 = new Consulta ((new Date("2024-10-15")),15,medico1,paciente1);

console.log(consulta1);

const paciente2= new Paciente("Jonas", 2468, "plano vida");
const medico2 = new Medico ("Dr Kadu", 5425, "endocrinologia");
const consulta2 = new Consulta ((new Date("2024-10-22")),9,medico2,paciente2);

console.log(consulta2);


try{
    const consulta1 = new Consulta ((new Date("2024-10-15")),15,medico1,paciente1);
} 
catch (error){
    console.error("Erro ao agendar consulta:", error);
    }

try{	
    const receita1 = new Receita("Amoxilina de 8 em 8h, por 15 dias ininterruptos.",consulta2);
}
catch(error){
    console.error("Erro ao emitir receita:", error);
    
}

