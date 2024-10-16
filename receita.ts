import { Consulta } from "./consulta";

export class Receita{

private _dataEmissao:Date;
private _textoReceita:string;
private _consultaRef:Consulta;


	constructor(textoReceita: string, consultaRef: Consulta) {
	
		this._dataEmissao = new Date;// a data será a do dia em que a consulta referente foi realizada
		this.validarData();
		this._textoReceita = textoReceita;
		this._consultaRef = consultaRef; //deve ser uma instancia da classe Consulta, caso contrário nao será permitida a instancia de Receita
	}


	private validarData():void{
		const dataConsulta=this._consultaRef.dataConsulta;
		if(dataConsulta.toDateString()!==this._dataEmissao.toDateString()){
			throw new Error("A receita só pode ser emitida na mesma data da consulta a qual está vinculada.");
		}
	}

   
	 get dataEmissao(): Date {
		return this._dataEmissao;
	}

   	 set dataEmissao(dataEmissao: Date) {
		this._dataEmissao = dataEmissao;
	}

   	 get textoReceita(): string {
		return this._textoReceita;
	}

   	 set textoReceita(textoReceita: string) {
		this._textoReceita = textoReceita;
	}

   	 get consultaRef(): Consulta {
		return this._consultaRef;
	}

   	 set consultaRef(consultaRef: Consulta) {
		this._consultaRef = consultaRef;
	}


}