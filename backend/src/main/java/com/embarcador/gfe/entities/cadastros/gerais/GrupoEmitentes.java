package com.embarcador.gfe.entities.cadastros.gerais;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GrupoEmitentes implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;			// Chave do registro
	private String filial;		// Filial do cadastro
	private String grupo;		// Codigo do grupo
	private String descricao;	// Descricao
	private String situacao;	// Situacao
	private String finalidade;	// Grupo Emitente EDI
	private String origem;		// Origem do cadastramento
	

	// Construtores da classe
	public GrupoEmitentes() {
	}

	public GrupoEmitentes(Long id, String filial, String grupo, String descricao, String situacao, String finalidade, String origem) {
		super();
		this.id = id;
		this.filial = filial;
		this.grupo = grupo;
		this.descricao = descricao;
		this.situacao = situacao;
		this.finalidade = finalidade;
		this.origem = origem;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getGrupo() { return grupo; }
	public void setGrupo(String grupo) { this.grupo = grupo; }

	public String getDescricao() { return descricao; }
	public void setDescricao(String descricao) { this.descricao = descricao; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getFinalidade() { return finalidade; }
	public void setFinalidade(String finalidade) { this.finalidade = finalidade; }

	public String getOrigem() { return origem; }
	public void setOrigem(String origem) { this.origem = origem; }
	
	
	// Metodo toString
	@Override
	public String toString() {
		return "GrupoEmitentes [id=" + id + ", filial=" + filial + ", grupo=" + grupo + ", descricao=" + descricao + ", situacao=" + situacao + ", finalidade=" + finalidade + ", origem=" + origem + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(filial, grupo, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		GrupoEmitentes other = (GrupoEmitentes) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(grupo, other.grupo);
	}
}
