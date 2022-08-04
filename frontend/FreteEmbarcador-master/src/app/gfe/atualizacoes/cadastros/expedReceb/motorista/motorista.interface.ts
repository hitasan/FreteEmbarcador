export interface Motorista {
  id?: number;
  filial?: string;
  codMotAjud: string;
	nome: string;
	apelido?: string;
	tipo: string;
	cpf: string;
	rg?: string;
	expedidor: string;
	transportador: string;
	sitMotAjud: string;
	dtSituacao?: string;
	motSituacao?: string;
	observacoes?: string;
	nrCnh?: string;
	regCnh?: string;
	dtExpedCnh?: string;
	dtVenctCnh?: string;
	municipioCnh?: string;
	estadoCnh?: string;
	catCnh?: string;
	mopp?: string
}
