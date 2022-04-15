package com.embarcador.gfe.entities.cadastros.expedreceb;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FiltroDocCarga implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;		// Chave do registro
	private String filial;  // Filial do Sistema     - GUJ_FILIAL
	private String tabela;  // Tabela a ser Filtrada - GUJ_TABELA
	private String campo;  	// Campo a ser Filtrado  - GUJ_CAMPO
	private String valor;   // Valor do Campo        - GUJ_VALOR
	private String acao;   	// Ação Filtro           - GUJ_ACAO


	// Construtores da classe
	public FiltroDocCarga() {
	}

	public FiltroDocCarga(Long id, String filial, String tabela, String campo, String valor, String acao) {
		super();
		this.id = id;
		this.filial = filial;
		this.tabela = tabela;
		this.campo = campo;
		this.valor = valor;
		this.acao = acao;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getTabela() { return tabela; }
	public void setTabela(String tabela) { this.tabela = tabela; }

	public String getCampo() { return campo; }
	public void setCampo(String campo) { this.campo = campo; }

	public String getValor() { return valor; }
	public void setValor(String valor) { this.valor = valor; }

	public String getAcao() { return acao; }
	public void setAcao(String acao) { this.acao = acao; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "FiltroDocCarga [id=" + id + ", filial=" + filial + ", tabela=" + tabela + ", campo=" + campo + ", valor=" + valor + ", acao=" + acao + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, tabela, campo, valor, acao);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		FiltroDocCarga other = (FiltroDocCarga) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(tabela, other.tabela) && Objects.equals(campo, other.campo) && Objects.equals(valor, other.valor) && Objects.equals(acao, other.acao);
	}
}
