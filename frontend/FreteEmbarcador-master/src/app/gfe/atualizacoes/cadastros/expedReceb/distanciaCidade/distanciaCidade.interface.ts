export interface DistanciaCidade {
  id?: number;
  filial?: string;
	codTabela: string;
	tipoTabela: string;
	idaVolta?: string;
	iniValidade: string;
	fimValidade: string;
	cidOrigem?: string;
	cidDest?: string;
	prioridade?: number;
  rotaOrigem?: string;
  rotaDestino?: string;
	tipoOper?: string;
  descTpOper?: string;
	tipoVeiculo?: string;
  descTpVeic?: string;
	codGrupo?: string;
  descGrupo?: string;
	transportador?: string;
  descTransp?: string;
	modal?: string;
	classifFrete?: string;
  descClass?: string;
	distEstimad?: number;
}
