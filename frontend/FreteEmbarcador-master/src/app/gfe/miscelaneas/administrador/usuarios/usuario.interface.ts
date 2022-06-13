export interface Usuario {
  id?: number;
	codigo: string;
	nome: string;
	senha: string;
	email: string;
	cargo: string;
	status: string;
	datastatus?: string;
	trocasenha?: number
}
