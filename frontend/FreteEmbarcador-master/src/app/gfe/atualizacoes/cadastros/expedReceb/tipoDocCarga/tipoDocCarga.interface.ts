export interface TipoDocCarga {
  id?: number;
  filial?: string;
  tipo: string;
	descricao: string;
	tpTransp?: string;
	sentido?: string;
	tpContab?: string;
	enviaEdiNfe?: string;
	situacao?: string;
	calculoFret?: string;
	emitePreFat?: string;
	dataEntAut?: string;
}
