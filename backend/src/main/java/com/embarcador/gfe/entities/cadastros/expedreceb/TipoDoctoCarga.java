package com.embarcador.gfe.entities.cadastros.expedreceb;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class TipoDoctoCarga implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial;      	// Filial do Sistema        - GV5_FILIAL
	private String tipo;      		// Tipo Docto de Carga      - GV5_CDTPDC
	private String descricao;       // Descricao Tipo Docto     - GV5_DSTPDC
	private String tpTransp;     	// Tipo de Transporte       - GV5_TPTRP 
	private String sentido;         // Sentido do transporte    - GV5_SENTID
	private String tpContab;     	// Tipo de Contabilizacao   - GV5_FRCTB
	private String enviaEdiNfe;    	// Envia doc EDI ou XML NFe - GV5_EDI
	private String situacao;        // Situacao                 - GV5_SIT
	private String calculoFret;     // Calculo Frete            - GV5_CALC
	private String emitePreFat;    	// Emite Pré-Fatura         - GV5_EMITPF
	private String dataEntAut;    	// Data Entrada Automatica  - GV5_DTENAT
	
	// Construtores da classe
	public TipoDoctoCarga() {
	}

	public TipoDoctoCarga(Long id, String filial, String tipo, String descricao, String tpTransp, String sentido, String tpContab, String enviaEdiNfe, String situacao, String calculoFret, String emitePreFat, String dataEntAut) {
		super();
		this.id = id;
		this.filial = filial;
		this.tipo = tipo;
		this.descricao = descricao;
		this.tpTransp = tpTransp;
		this.sentido = sentido;
		this.tpContab = tpContab;
		this.enviaEdiNfe = enviaEdiNfe;
		this.situacao = situacao;
		this.calculoFret = calculoFret;
		this.emitePreFat = emitePreFat;
		this.dataEntAut = dataEntAut;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getTipo() { return tipo; }
	public void setTipo(String tipo) { this.tipo = tipo; }

	public String getDescricao() { return descricao; }
	public void setDescricao(String descricao) { this.descricao = descricao; }

	public String getTpTransp() { return tpTransp; }
	public void setTpTransp(String tpTransp) { this.tpTransp = tpTransp; }

	public String getSentido() { return sentido; }
	public void setSentido(String sentido) { this.sentido = sentido; }

	public String getTpContab() { return tpContab; }
	public void setTpContab(String tpContab) { this.tpContab = tpContab; }

	public String getEnviaEdiNfe() { return enviaEdiNfe; }
	public void setEnviaEdiNfe(String enviaEdiNfe) { this.enviaEdiNfe = enviaEdiNfe; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getCalculoFret() { return calculoFret; }
	public void setCalculoFret(String calculoFret) { this.calculoFret = calculoFret; }

	public String getEmitePreFat() { return emitePreFat; }
	public void setEmitePreFat(String emitePreFat) { this.emitePreFat = emitePreFat; }

	public String getDataEntAut() { return dataEntAut; }
	public void setDataEntAut(String dataEntAut) { this.dataEntAut = dataEntAut; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "TipoDoctoCarga [id=" + id + ", filial=" + filial + ", tipo=" + tipo + ", descricao=" + descricao + ", tpTransp=" + tpTransp + ", sentido=" + sentido + ", tpContab=" + tpContab 
				           + ", enviaEdiNfe=" + enviaEdiNfe + ", situacao=" + situacao + ", calculoFret=" + calculoFret + ", emitePreFat=" + emitePreFat + ", dataEntAut=" + dataEntAut + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, tipo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		TipoDoctoCarga other = (TipoDoctoCarga) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(tipo, other.tipo);
	}
}
