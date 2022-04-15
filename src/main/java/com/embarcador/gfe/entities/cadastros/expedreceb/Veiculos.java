package com.embarcador.gfe.entities.cadastros.expedreceb;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Veiculos implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial;      	// Filial do Sistema         - GU8_FILIAL
	private String codigo;     		// Codigo do Veiculo         - GU8_CDVEIC
	private String tipo;    		// Tipo de Veiculo           - GU8_CDTPVC
	private String placa;          	// Placa do Veiculo          - GU8_PLACA 
	private String ufPlaca;        	// UF da Placa               - GU8_UFPLAC
	private String proprietario;   	// Transp proprietário       - GU8_CDPROP
	private String tpPropri;     	// Tipo de proprietario      - GU8_TPPROP
	private String tipoAcesso;     	// Tipo de Acesso            - GU8_TPACES
	private String situacao;       	// Situacao                  - GU8_SIT
	private String descSituacao;   	// Descricao da situacao     - GU8_DSSIT
	private Instant dataCadastro;   // Data do cadastro          - GU8_DTIMPL
	private Instant dataSituacao;   // Data da situacao          - GU8_DTSIT
	private Double altura;         	// Altura do veiculo (m)     - GU8_ALTUR
	private Double largura;        	// Largura do veiculo (m)    - GU8_LARGUR
	private Double comprimento;  	// Comprimento veiculo (m)   - GU8_COMPRI
	private Double volume;     		// Volume Útil (m3)          - GU8_VOLUT
	private Double tara;           	// Peso sem carga            - GU8_TARA
	private Double carga;      		// Carga Útil (kg)           - GU8_CARGUT
	private Double pesoBrutoTotal; 	// Peso bruto total          - GU8_PBT
	private String observacoes;    	// Observacoes               - GU8_OBS
	private String marcaModelo;    	// Marca e Modelo do Veículo - GU8_MMOD
	private String anoFabric;     	// Ano Fabricação            - GU8_ANOFAB
	private String renavam;     	// Código do Renavam         - GU8_RENAVA
	private Double hodometro;    	// Valor Hodômetro           - GU8_VLHODO
	private Instant dataHodometro;  // Dt Leitura Hodômetro      - GU8_DTHODO
	private String nrCIV;          	// Número do CIV             - GU8_CIV
	private Integer nrCIPP;         // Número do CIPP            - GU8_CIPP
	private String tipoOperacao;   	// Tipo de Operação          - GU8_CDTPOP

	// Construtores da classe
	public Veiculos() {
	}

	public Veiculos(Long id, String filial, String codigo, String tipo, String placa, String ufPlaca, String proprietario, String tpPropri, String tipoAcesso, String situacao, String descSituacao, Instant dataCadastro, Instant dataSituacao,
					Double altura, Double largura, Double comprimento, Double volume, Double tara, Double carga, Double pesoBrutoTotal, String observacoes, String marcaModelo, String anoFabric, String renavam, Double hodometro, Instant dataHodometro,
					String nrCIV, Integer nrCIPP, String tipoOperacao) {
		super();
		this.id = id;
		this.filial = filial;
		this.codigo = codigo;
		this.tipo = tipo;
		this.placa = placa;
		this.ufPlaca = ufPlaca;
		this.proprietario = proprietario;
		this.tpPropri = tpPropri;
		this.tipoAcesso = tipoAcesso;
		this.situacao = situacao;
		this.descSituacao = descSituacao;
		this.dataCadastro = dataCadastro;
		this.dataSituacao = dataSituacao;
		this.altura = altura;
		this.largura = largura;
		this.comprimento = comprimento;
		this.volume = volume;
		this.tara = tara;
		this.carga = carga;
		this.pesoBrutoTotal = pesoBrutoTotal;
		this.observacoes = observacoes;
		this.marcaModelo = marcaModelo;
		this.anoFabric = anoFabric;
		this.renavam = renavam;
		this.hodometro = hodometro;
		this.dataHodometro = dataHodometro;
		this.nrCIV = nrCIV;
		this.nrCIPP = nrCIPP;
		this.tipoOperacao = tipoOperacao;
	}


	// Getters / Setters
	public Long getId() { return id; }
	//public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getCodigo() { return codigo; }
	public void setCodigo(String codigo) { this.codigo = codigo; }

	public String getTipo() { return tipo; }
	public void setTipo(String tipo) { this.tipo = tipo; }

	public String getPlaca() { return placa; }
	public void setPlaca(String placa) { this.placa = placa; }

	public String getUfPlaca() { return ufPlaca; }
	public void setUfPlaca(String ufPlaca) { this.ufPlaca = ufPlaca; }

	public String getProprietario() { return proprietario; }
	public void setProprietario(String proprietario) { this.proprietario = proprietario; }

	public String getTpPropri() { return tpPropri; }
	public void setTpPropri(String tpPropri) { this.tpPropri = tpPropri; }

	public String getTipoAcesso() { return tipoAcesso; }
	public void setTipoAcesso(String tipoAcesso) { this.tipoAcesso = tipoAcesso; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getDescSituacao() { return descSituacao; }
	public void setDescSituacao(String descSituacao) { this.descSituacao = descSituacao; }

	public Instant getDataCadastro() { return dataCadastro; }
	public void setDataCadastro(Instant dataCadastro) { this.dataCadastro = dataCadastro; }

	public Instant getDataSituacao() { return dataSituacao; }
	public void setDataSituacao(Instant dataSituacao) { this.dataSituacao = dataSituacao; }

	public Double getAltura() { return altura; }
	public void setAltura(Double altura) { this.altura = altura; }

	public Double getLargura() { return largura; }
	public void setLargura(Double largura) { this.largura = largura; }

	public Double getComprimento() { return comprimento; }
	public void setComprimento(Double comprimento) { this.comprimento = comprimento; }

	public Double getVolume() { return volume; }
	public void setVolume(Double volume) { this.volume = volume; }

	public Double getTara() { return tara; }
	public void setTara(Double tara) { this.tara = tara; }

	public Double getCarga() { return carga; }
	public void setCarga(Double carga) { this.carga = carga; }

	public Double getPesoBrutoTotal() { return pesoBrutoTotal; }
	public void setPesoBrutoTotal(Double pesoBrutoTotal) { this.pesoBrutoTotal = pesoBrutoTotal; }

	public String getObservacoes() { return observacoes; }
	public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

	public String getMarcaModelo() { return marcaModelo; }
	public void setMarcaModelo(String marcaModelo) { this.marcaModelo = marcaModelo; }

	public String getAnoFabric() { return anoFabric; }
	public void setAnoFabric(String anoFabric) { this.anoFabric = anoFabric; }

	public String getRenavam() { return renavam; }
	public void setRenavam(String renavam) { this.renavam = renavam; }

	public Double getHodometro() { return hodometro; }
	public void setHodometro(Double hodometro) { this.hodometro = hodometro; }

	public Instant getDataHodometro() { return dataHodometro; }
	public void setDataHodometro(Instant dataHodometro) { this.dataHodometro = dataHodometro; }

	public String getNrCIV() { return nrCIV; }
	public void setNrCIV(String nrCIV) { this.nrCIV = nrCIV; }

	public Integer getNrCIPP() { return nrCIPP; }
	public void setNrCIPP(Integer nrCIPP) { this.nrCIPP = nrCIPP; }

	public String getTipoOperacao() { return tipoOperacao; }
	public void setTipoOperacao(String tipoOperacao) { this.tipoOperacao = tipoOperacao; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "Veiculos [id=" + id + ", filial=" + filial + ", codigo=" + codigo + ", tipo=" + tipo + ", placa=" + placa + ", ufPlaca=" + ufPlaca + ", proprietario=" + proprietario + ", tpPropri=" + tpPropri + ", tipoAcesso=" + tipoAcesso 
					 + ", situacao=" + situacao + ", descSituacao=" + descSituacao + ", dataCadastro=" + dataCadastro + ", dataSituacao=" + dataSituacao + ", altura=" + altura + ", largura=" + largura + ", comprimento=" + comprimento 
					 + ", volume=" + volume + ", tara=" + tara + ", carga=" + carga + ", pesoBrutoTotal=" + pesoBrutoTotal + ", observacoes=" + observacoes + ", marcaModelo=" + marcaModelo + ", anoFabric=" + anoFabric + ", renavam=" + renavam 
					 + ", hodometro=" + hodometro + ", dataHodometro=" + dataHodometro + ", nrCIV=" + nrCIV + ", nrCIPP=" + nrCIPP + ", tipoOperacao=" + tipoOperacao + "]";
	}


	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, codigo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		Veiculos other = (Veiculos) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial)	&& Objects.equals(codigo, other.codigo);
	}
}
