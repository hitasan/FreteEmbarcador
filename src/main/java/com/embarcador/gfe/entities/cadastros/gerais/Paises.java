package com.embarcador.gfe.entities.cadastros.gerais;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Paises implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String filial;
	private String codigo;
	private String nome;
	private String sigla;
	private String idioma;
	private String descIdioma;
	private String dinalad;
	private String naladi;
	private String certOrigemAladi;		// Cert.de Origem Aladi
	private String certOrigemComum; 	// Cert.de Origem Comum
	private String certOrigemMercosul; 	// Cert.de Origem Mercosul
	private String certOrigemSGPC;    	// Cert.de Origem SGPC
	private String exigeLincImport;		// Exige Licenca de Imp.
	private String paisIngles;  		// Pais Ingles
	private String codAbics;			// Cod. Abics
	private String codigoRIEX;			// Codigo RIEX
	private String codSisxomex; 		// Cod. do Pais SISCOMEX EXP
	private String codigoFiesp; 		// Código para integ. Fiesp
	private String claveMexico;			// Clave Mexico
	private String nacionalidad;		// Nacionalidade
	private String codERP;				// Codigo ERP
	private String codPaisDUE;			// Código do país para D.U-E


	// Construtores da classe
	public Paises() {
	}

	public Paises(Long id, String filial, String codigo, String nome, String sigla, String idioma, String descIdioma,String dinalad, String naladi, String certOrigemAladi,String certOrigemComum,
				  String certOrigemMercosul, String certOrigemSGPC, String exigeLincImport, String paisIngles, String codAbics,String codigoRIEX, String codSisxomex, String codigoFiesp,
				  String claveMexico, String nacionalidad, String codERP, String codPaisDUE) {
		this.id = id;
		this.filial = filial;
		this.codigo = codigo;
		this.nome = nome;
		this.sigla = sigla;
		this.idioma = idioma;
		this.descIdioma = descIdioma;
		this.dinalad = dinalad;
		this.naladi = naladi;
		this.certOrigemAladi = certOrigemAladi;
		this.certOrigemComum = certOrigemComum;
		this.certOrigemMercosul = certOrigemMercosul;
		this.certOrigemSGPC = certOrigemSGPC;
		this.exigeLincImport = exigeLincImport;
		this.paisIngles = paisIngles;
		this.codAbics = codAbics;
		this.codigoRIEX = codigoRIEX;
		this.codSisxomex = codSisxomex;
		this.codigoFiesp = codigoFiesp;
		this.claveMexico = claveMexico;
		this.nacionalidad = nacionalidad;
		this.codERP = codERP;
		this.codPaisDUE = codPaisDUE;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getCodigo() { return codigo; }
	public void setCodigo(String codigo) { this.codigo = codigo; }

	public String getNome() { return nome; }
	public void setNome(String nome) { this.nome = nome; }

	public String getSigla() { return sigla; }
	public void setSigla(String sigla) { this.sigla = sigla; }

	public String getIdioma() { return idioma; }
	public void setIdioma(String idioma) { this.idioma = idioma; }

	public String getDescIdioma() { return descIdioma; }
	public void setDescIdioma(String descIdioma) { this.descIdioma = descIdioma; }

	public String getDinalad() { return dinalad; }
	public void setDinalad(String dinalad) { this.dinalad = dinalad; }

	public String getNaladi() { return naladi; }
	public void setNaladi(String naladi) { this.naladi = naladi; }

	public String getCertOrigemAladi() { return certOrigemAladi; }
	public void setCertOrigemAladi(String certOrigemAladi) { this.certOrigemAladi = certOrigemAladi; }

	public String getCertOrigemComum() { return certOrigemComum; }
	public void setCertOrigemComum(String certOrigemComum) { this.certOrigemComum = certOrigemComum; }

	public String getCertOrigemMercosul() { return certOrigemMercosul; }
	public void setCertOrigemMercosul(String certOrigemMercosul) { this.certOrigemMercosul = certOrigemMercosul; }

	public String getCertOrigemSGPC() { return certOrigemSGPC; }
	public void setCertOrigemSGPC(String certOrigemSGPC) { this.certOrigemSGPC = certOrigemSGPC; }

	public String getExigeLincImport() { return exigeLincImport; }
	public void setExigeLincImport(String exigeLincImport) { this.exigeLincImport = exigeLincImport; }

	public String getPaisIngles() { return paisIngles; }
	public void setPaisIngles(String paisIngles) { this.paisIngles = paisIngles; }

	public String getCodAbics() { return codAbics; }
	public void setCodAbics(String codAbics) { this.codAbics = codAbics; }

	public String getCodigoRIEX() { return codigoRIEX; }
	public void setCodigoRIEX(String codigoRIEX) { this.codigoRIEX = codigoRIEX; }

	public String getCodSisxomex() { return codSisxomex; }
	public void setCodSisxomex(String codSisxomex) { this.codSisxomex = codSisxomex; }

	public String getCodigoFiesp() { return codigoFiesp; }
	public void setCodigoFiesp(String codigoFiesp) { this.codigoFiesp = codigoFiesp; }

	public String getClaveMexico() { return claveMexico; }
	public void setClaveMexico(String claveMexico) { this.claveMexico = claveMexico; }

	public String getNacionalidad() { return nacionalidad; }
	public void setNacionalidad(String nacionalidad) { this.nacionalidad = nacionalidad; }

	public String getCodERP() { return codERP; }
	public void setCodERP(String codERP) { this.codERP = codERP; }

	public String getCodPaisDUE() { return codPaisDUE; }
	public void setCodPaisDUE(String codPaisDUE) { this.codPaisDUE = codPaisDUE; }

	@Override
	public String toString() {
		return "Paises [id=" + id
				   + ", filial=" + filial
		           + ", codigo=" + codigo
		           + ", nome=" + nome
		           + ", sigla=" + sigla
		           + ", idioma=" + idioma
		           + ", descIdioma=" + descIdioma
		           + ", dinalad=" + dinalad
		           + ", naladi=" + naladi
		           + ", certOrigemAladi=" + certOrigemAladi
		           + ", certOrigemComum=" + certOrigemComum
		           + ", certOrigemMercosul=" + certOrigemMercosul
		           + ", certOrigemSGPC=" + certOrigemSGPC
		           + ", exigeLincImport=" + exigeLincImport
		           + ", paisIngles=" + paisIngles
		           + ", codAbics=" + codAbics
		           + ", codigoRIEX=" + codigoRIEX
		           + ", codSisxomex=" + codSisxomex
		           + ", codigoFiesp=" + codigoFiesp
		           + ", claveMexico=" + claveMexico
		           + ", nacionalidad=" + nacionalidad
		           + ", codERP=" + codERP
		           + ", codPaisDUE=" + codPaisDUE + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, codigo, nome, codERP);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;

		if (obj == null)
			return false;

		if (getClass() != obj.getClass())
			return false;

		Paises other = (Paises) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(codigo, other.codigo) && Objects.equals(nome, other.nome) && Objects.equals(codERP, other.codERP);
				
	}
	
	
	
}
