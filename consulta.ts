import { Paciente } from "./paciente";
import { Medico } from "./medico";
export class Consulta{
private static contadorId: number = 1;
private _id:number;
private _dataConsulta:Date;
private _horaConsulta:number;
private _medico:Medico;
private _paciente:Paciente;

constructor(dataConsulta:Date, horaConsulta:number, medico:Medico, paciente:Paciente){
		this.validarDataConsulta(dataConsulta);
		this._id=Consulta.gerarId();
		this._dataConsulta=dataConsulta;
		this._horaConsulta=horaConsulta;
		this._medico=medico;
		this._paciente;
 }

	private validarDataConsulta(dataConsulta:Date):void{
		const hoje = new Date();
		if (dataConsulta<=hoje){
			throw new Error ("A consulta deve ser marcada para uma data futura.");
		}
	}

	private static gerarId(): number {
    return this.contadorId++;
  	}	

     get id(): number {
		return this._id;
	}

     set id(id: number) {//nao poderá ser inserido ou alterado via setter pois garante que uma consulta foi lancada exclusivamente no sistema, portanto deve ser gerado automaticamente ao instanciar um objeto de consulta
		throw new Error("O ID da consulta não pode ser alterado.");// colocar um bloco try catch depois para nao matar o programa
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