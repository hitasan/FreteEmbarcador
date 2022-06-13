package com.embarcador.gfe.entities.cadastros.gerais;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cidades implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String filial;
	private String cidade;
	private String nome;
	private String estado;
	private String pais;
	private String sigla;
	private String suframa;
	private String cepInicial;
	private String cepFinal;
	private Double percISSFrete;
	private String situacao;
	private String regiaoRelat;
	
	// Construtores da classe
	public Cidades() {
	}

	public Cidades(Long id, String filial, String cidade, String nome, String estado, String pais, String sigla, String suframa, String cepInicial, String cepFinal, Double percISSFrete, String situacao, String regiaoRelat) {
		super();
		this.id = id;
		this.filial = filial;
		this.cidade = cidade;
		this.nome = nome;
		this.estado = estado;
		this.pais = pais;
		this.sigla = sigla;
		this.suframa = suframa;
		this.cepInicial = cepInicial;
		this.cepFinal = cepFinal;
		this.percISSFrete = percISSFrete;
		this.situacao = situacao;
		this.regiaoRelat = regiaoRelat;
	}


	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getCidade() { return cidade; }
	public void setCidade(String cidade) { this.cidade = cidade; }

	public String getNome() { return nome; }
	public void setNome(String nome) { this.nome = nome; }

	public String getEstado() { return estado; }
	public void setEstado(String estado) { this.estado = estado; }

	public String getPais() { return pais; }
	public void setPais(String pais) { this.pais = pais; }

	public String getSigla() { return sigla; }
	public void setSigla(String sigla) { this.sigla = sigla; }

	public String getSuframa() { return suframa; }
	public void setSuframa(String suframa) { this.suframa = suframa; }

	public String getCepInicial() { return cepInicial; }
	public void setCepInicial(String cepInicial) { this.cepInicial = cepInicial; }

	public String getCepFinal() { return cepFinal; }
	public void setCepFinal(String cepFinal) { this.cepFinal = cepFinal; }

	public Double getPercISSFrete() { return percISSFrete; }
	public void setPercISSFrete(Double percISSFrete) { this.percISSFrete = percISSFrete; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getRegiaoRelat() { return regiaoRelat; }
	public void setRegiaoRelat(String regiaoRelat) { this.regiaoRelat = regiaoRelat; }
	
	
	// Metodo toString
	@Override
	public String toString() {
		return "Cidades [id=" + id + ", filial=" + filial + ", cidade=" + cidade + ", nome=" + nome + ", estado=" + estado + ", pais=" + pais + ", sigla=" + sigla + ", suframa=" + suframa + ", cepInicial=" + cepInicial
				    + ", cepFinal=" + cepFinal + ", percISSFrete=" + percISSFrete + ", situacao=" + situacao + ", regiaoRelat=" + regiaoRelat + "]";
	}


	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(cidade, estado, filial, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		Cidades other = (Cidades) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(cidade, other.cidade) && Objects.equals(estado, other.estado);
	}
}
