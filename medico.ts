import { Consulta } from "./consulta";
import { Paciente } from "./paciente";
import { Receita } from "./receita";
export class Medico{
    private _nome:string;
    private _crm:number;
    private _especialidade:string;



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

}