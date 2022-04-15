package com.embarcador.gfe.entities.cadastros.gerais;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UnidadeMedidas implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial;			// Filial do cadastro
	private String uniMedida;		// Sigla da unidade de medida
	private String descricao;		// Descrição
	private String codSiscomex;		// Codigo SISCOMEX
	private String codMercosul;		// Codigo SISCOMEX MERCOSUL
	private String codRiex;			// Codigo RIEX
	private String codUMSRF;		// Codigo da unidade de medida da SRF
	private String codCertFiesp;	// Codigo certificado origem FIESP
	private String codUMFCI;		// Codigo da unidade de medida para FCI
	private String codERP; 			// Codigo da unidade de medida no ERP

	// Construtores da classe
	public UnidadeMedidas() {
	}

	public UnidadeMedidas(Long id, String filial, String uniMedida, String descricao, String codSiscomex, String codMercosul, String codRiex, String codUMSRF, String codCertFiesp, String codUMFCI, String codERP) {
		super();
		this.id = id;
		this.filial = filial;
		this.uniMedida = uniMedida;
		this.descricao = descricao;
		this.codSiscomex = codSiscomex;
		this.codMercosul = codMercosul;
		this.codRiex = codRiex;
		this.codUMSRF = codUMSRF;
		this.codCertFiesp = codCertFiesp;
		this.codUMFCI = codUMFCI;
		this.codERP = codERP;
	}
	
	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getUniMedida() { return uniMedida; }
	public void setUniMedida(String uniMedida) { this.uniMedida = uniMedida; }

	public String getDescricao() { return descricao; }
	public void setDescricao(String descricao) { this.descricao = descricao; }

	public String getCodSiscomex() { return codSiscomex; }
	public void setCodSiscomex(String codSiscomex) { this.codSiscomex = codSiscomex; }

	public String getCodMercosul() { return codMercosul; }
	public void setCodMercosul(String codMercosul) { this.codMercosul = codMercosul; }

	public String getCodRiex() { return codRiex; }
	public void setCodRiex(String codRiex) { this.codRiex = codRiex; }

	public String getCodUMSRF() { return codUMSRF;}
	public void setCodUMSRF(String codUMSRF) { this.codUMSRF = codUMSRF; }

	public String getCodCertFiesp() { return codCertFiesp; }
	public void setCodCertFiesp(String codCertFiesp) { this.codCertFiesp = codCertFiesp; }

	public String getCodUMFCI() { return codUMFCI; }
	public void setCodUMFCI(String codUMFCI) { this.codUMFCI = codUMFCI; }

	public String getCodERP() { return codERP; }
	public void setCodERP(String codERP) { this.codERP = codERP; }
	
	
	// Metodo toString
	@Override
	public String toString() {
		return "UnidadeMedidas [id=" + id + ", filial=" + filial + ", uniMedida=" + uniMedida + ", descricao=" + descricao + ", codSiscomex=" + codSiscomex + ", codMercosul=" + codMercosul
				           + ", codRiex=" + codRiex + ", codUMSRF=" + codUMSRF + ", codCertFiesp=" + codCertFiesp + ", codUMFCI=" + codUMFCI + ", codERP=" + codERP + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(filial, id, uniMedida);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		UnidadeMedidas other = (UnidadeMedidas) obj;

		return Objects.equals(filial, other.filial) && Objects.equals(id, other.id) && Objects.equals(uniMedida, other.uniMedida);
	}
}
