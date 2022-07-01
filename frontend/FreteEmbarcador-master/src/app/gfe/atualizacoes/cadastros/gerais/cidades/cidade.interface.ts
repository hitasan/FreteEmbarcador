export interface Cidade {
  id?: number;
  filial: string;
  cidade: string;
  nome: string;
  estado: string;
  pais?: string;
  sigla: string;
  suframa?: string;
  cepInicial?: string;
  cepFinal?: string;
  percISSFrete?: number;
  situacao: string;
  regiaoRelat?: string;
}
