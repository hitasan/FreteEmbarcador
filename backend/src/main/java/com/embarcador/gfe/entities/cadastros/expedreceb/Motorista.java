package com.embarcador.gfe.entities.cadastros.expedreceb;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Motorista implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial;      	// Filial do Sistema         - GUU_FILIAL
	private String codMotAjud;   	// Codigo Motorista/Ajudante - GUU_CDMTR
	private String nome;            // Nome Completo             - GUU_NMMTR
	private String apelido;    		// Pseudonimo ou Apelido     - GUU_PSEUD
	private String tipo;            // Tipo                      - GUU_TPMTR 
	private String cpf;             // CPF                       - GUU_IDFED
	private String rg;              // RG                        - GUU_RG
	private String expedidor;     	// Orgao Expedidor do RG     - GUU_ORGEXP
	private String transportador;   // Transportador             - GUU_CDTRP
	private String sitMotAjud;    	// Situacao Motorista/Ajud   - GUU_SIT
	private Instant dtSituacao;     // Data da Situacao          - GUU_DTSIT
	private String motSituacao;    	// Motivo da Situacao        - GUU_DSSIT
	private String observacoes;     // Observacoes               - GUU_OBS
	private String foto;            // Foto Motorista            - GUU_BITMAP
	private String mopp;            // Tem MOPP                  - GUU_MOPP
	private String nrCnh;          	// Número da CNH             - GUU_NUMCNH
	private String regCnh;         	// Registro da CNH           - GUU_REGCNH
	private Instant dtExpedCnh;    	// Data Exped CNH            - GUU_DTECNH
	private Instant dtVenctCnh;    	// Data Vencto CNH           - GUU_DTVCNH
	private String MunicipioCnh;   	// Município da CNH          - GUU_MUNCNH
	private String estadoCnh;      	// Estado da CNH             - GUU_ESTCNH
	private String catCnh;         	// Categoria da CNH          - GUU_CATCNH


	// Construtores da classe
	public Motorista() {
	}

	public Motorista(Long id, String filial, String codMotAjud, String nome, String apelido, String tipo, String cpf, String rg, String expedidor, String transportador, String sitMotAjud, Instant dtSituacao,
			         String motSituacao, String observacoes, String foto, String mopp, String nrCnh, String regCnh, Instant dtExpedCnh, Instant dtVenctCnh, String municipioCnh, String estadoCnh, String catCnh) {
		super();
		this.id = id;
		this.filial = filial;
		this.codMotAjud = codMotAjud;
		this.nome = nome;
		this.apelido = apelido;
		this.tipo = tipo;
		this.cpf = cpf;
		this.rg = rg;
		this.expedidor = expedidor;
		this.transportador = transportador;
		this.sitMotAjud = sitMotAjud;
		this.dtSituacao = dtSituacao;
		this.motSituacao = motSituacao;
		this.observacoes = observacoes;
		this.foto = foto;
		this.mopp = mopp;
		this.nrCnh = nrCnh;
		this.regCnh = regCnh;
		this.dtExpedCnh = dtExpedCnh;
		this.dtVenctCnh = dtVenctCnh;
		MunicipioCnh = municipioCnh;
		this.estadoCnh = estadoCnh;
		this.catCnh = catCnh;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getCodMotAjud() { return codMotAjud; }
	public void setCodMotAjud(String codMotAjud) { this.codMotAjud = codMotAjud; }

	public String getNome() { return nome; }
	public void setNome(String nome) { this.nome = nome; }

	public String getApelido() { return apelido; }
	public void setApelido(String apelido) { this.apelido = apelido; }

	public String getTipo() { return tipo; }
	public void setTipo(String tipo) { this.tipo = tipo; }

	public String getCpf() { return cpf; }
	public void setCpf(String cpf) { this.cpf = cpf; }

	public String getRg() { return rg; }
	public void setRg(String rg) { this.rg = rg; }

	public String getExpedidor() { return expedidor; }
	public void setExpedidor(String expedidor) { this.expedidor = expedidor; }

	public String getTransportador() { return transportador; }
	public void setTransportador(String transportador) { this.transportador = transportador; }

	public String getSitMotAjud() { return sitMotAjud; }
	public void setSitMotAjud(String sitMotAjud) { this.sitMotAjud = sitMotAjud; }

	public Instant getDtSituacao() { return dtSituacao; }
	public void setDtSituacao(Instant dtSituacao) { this.dtSituacao = dtSituacao; }

	public String getMotSituacao() { return motSituacao; }
	public void setMotSituacao(String motSituacao) { this.motSituacao = motSituacao; }

	public String getObservacoes() { return observacoes; }
	public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

	public String getFoto() { return foto; }
	public void setFoto(String foto) { this.foto = foto; }

	public String getMopp() { return mopp; }
	public void setMopp(String mopp) { this.mopp = mopp; }

	public String getNrCnh() { return nrCnh; }
	public void setNrCnh(String nrCnh) { this.nrCnh = nrCnh; }

	public String getRegCnh() { return regCnh; }
	public void setRegCnh(String regCnh) { this.regCnh = regCnh; }

	public Instant getDtExpedCnh() { return dtExpedCnh; }
	public void setDtExpedCnh(Instant dtExpedCnh) { this.dtExpedCnh = dtExpedCnh; }

	public Instant getDtVenctCnh() { return dtVenctCnh; }
	public void setDtVenctCnh(Instant dtVenctCnh) { this.dtVenctCnh = dtVenctCnh; }

	public String getMunicipioCnh() { return MunicipioCnh; }
	public void setMunicipioCnh(String municipioCnh) { MunicipioCnh = municipioCnh; }

	public String getEstadoCnh() { return estadoCnh; }
	public void setEstadoCnh(String estadoCnh) { this.estadoCnh = estadoCnh; }

	public String getCatCnh() { return catCnh; }
	public void setCatCnh(String catCnh) { this.catCnh = catCnh; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "Motorista [id=" + id + ", filial=" + filial + ", codMotAjud=" + codMotAjud + ", nome=" + nome + ", apelido=" + apelido + ", tipo=" + tipo + ", cpf=" + cpf + ", rg=" + rg + ", expedidor=" + expedidor + ", transportador=" + transportador
					  + ", sitMotAjud=" + sitMotAjud + ", dtSituacao=" + dtSituacao + ", motSituacao=" + motSituacao + ", observacoes=" + observacoes + ", foto=" + foto + ", mopp=" + mopp + ", nrCnh=" + nrCnh + ", regCnh=" + regCnh 
					  + ", dtExpedCnh=" + dtExpedCnh + ", dtVenctCnh=" + dtVenctCnh + ", MunicipioCnh=" + MunicipioCnh + ", estadoCnh=" + estadoCnh + ", catCnh=" + catCnh + "]";
	}
	
	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, cpf, codMotAjud);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		Motorista other = (Motorista) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(cpf, other.cpf) && Objects.equals(codMotAjud, other.codMotAjud);
	}
}
