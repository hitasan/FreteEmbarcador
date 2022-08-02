export interface ContatoEmitente {
  id?: number;
	filial?: string;
	codEmitente: string;
  sequencia: string;
  situacao: string;
  nome: string;
  apelido?: string;
  setor?: string;
  funcao?: string;
  email?: string;
  fone1?: string;
  ramal1?: string;
  fone2?: string;
  ramal2?: string;
  fax?: string;
  ramalFax?: string;
  recebePreFat?: string;
  observacoes?: string;
  recebeXmlNFe?: string;
  recebeRef?: string;
  recebeCotacao?: string;
  recebeAgendam?: string;
  recebeContrato?: string;
}
