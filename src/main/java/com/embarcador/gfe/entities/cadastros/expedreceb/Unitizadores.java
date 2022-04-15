package com.embarcador.gfe.entities.cadastros.expedreceb;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Unitizadores implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial;      	// Filial do Sistema        - GUG_FILIAL
	private String unitizador;      // Codigo do Unitizador     - GUG_CDUNIT
	private String descricao;       // Descricao do Unitizador  - GUG_DSUNIT
	private Double tara;           	// Tara do Unitizador       - GUG_TARA
	private Double volume;         	// Volume do Unitizador     - GUG_VOLUME
	private Double volOcupado;     	// Volume Ocupado           - GUG_VOLOCU
	private String situacao;        // Situacao                 - GUG_SIT
	private String identUnitiz;     // Identificacao Unitizador - GUG_IDENT
	private String finalidade;      // Finalidade               - GUG_FINALI


	// Construtores da classe
	public Unitizadores() {
	}

	public Unitizadores(Long id, String filial, String unitizador, String descricao, Double tara, Double volume, Double volOcupado, String situacao, String identUnitiz, String finalidade) {
		super();
		this.id = id;
		this.filial = filial;
		this.unitizador = unitizador;
		this.descricao = descricao;
		this.tara = tara;
		this.volume = volume;
		this.volOcupado = volOcupado;
		this.situacao = situacao;
		this.identUnitiz = identUnitiz;
		this.finalidade = finalidade;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	//public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getUnitizador() { return unitizador; }
	public void setUnitizador(String unitizador) { this.unitizador = unitizador; }

	public String getDescricao() { return descricao; }
	public void setDescricao(String descricao) { this.descricao = descricao; }

	public Double getTara() { return tara; }
	public void setTara(Double tara) { this.tara = tara; }

	public Double getVolume() { return volume; }
	public void setVolume(Double volume) { this.volume = volume; }

	public Double getVolOcupado() { return volOcupado; }
	public void setVolOcupado(Double volOcupado) { this.volOcupado = volOcupado; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getIdentUnitiz() { return identUnitiz; }
	public void setIdentUnitiz(String identUnitiz) { this.identUnitiz = identUnitiz; }

	public String getFinalidade() { return finalidade; }
	public void setFinalidade(String finalidade) { this.finalidade = finalidade; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "Unitizadores [id=" + id + ", filial=" + filial + ", unitizador=" + unitizador + ", descricao=" + descricao + ", tara=" + tara + ", volume=" + volume + ", volOcupado=" + volOcupado + ", situacao=" + situacao + ", identUnitiz=" + identUnitiz + ", finalidade=" + finalidade + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(filial, id, unitizador);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		Unitizadores other = (Unitizadores) obj;

		return Objects.equals(id, other.id)	&& Objects.equals(filial, other.filial) && Objects.equals(unitizador, other.unitizador);
	}
}
