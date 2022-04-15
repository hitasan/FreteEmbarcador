package com.embarcador.gfe.entities.cadastros.gerais;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Emitentes implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial; 			// Filial do Sistema
	private String codigo;      	// Codigo do Emitente
	private String nome;        	// Nome do Emitente
	private String fantasia;    	// Nome Fantasia
	private String abreviado;   	// Nome Abreviado/Apelido
	private String natureza;    	// Natureza do Emitente
	private String grupo;       	// Codigo do Grupo
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "GMT")
	private Instant nascCriacao;	// Nascimento/Criacao
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss'Z'", timezone = "GMT")
	private Instant dtCadastro;	 	// Data de Cadastramento
	private String origem;      	// Origem do cadastramento
	private String situacao;    	// Situacao do Emitente
	private String empFilial;   	// Cadastro de Filial?
	private String transp;      	// Cadastro de Transportador?
	private String cliente;     	// Cadastro de Cliente?
	private String fornecedor;  	// Cadastro de Fornecedor?
	private String autonomo;    	// Cadastro de Autonomo?
	private String endereco;    	// Endereco do emitente
	private String complemento; 	// Coplemento do Endereco
	private String bairro;      	// Bairro
	private String cep;         	// CEP
	private String nrCidade;    	// Número da cidade
	private String idfed;       	// Identificacao Federal CPF/CNPJ
	private String regTribut;   	// Regime Tributário
	private String contribICMS; 	// Contribuinte de ICMS?
	private String inscEstRG;   	// Inscricao Estadual/RG
	private String orgaoExp;    	// Orgao Emissor do RG
	private String inscrMunic;  	// Inscricao Municipal
	private String caixaPostal; 	// Caixa Postal
	private String email;       	// Endereco Eletronico
	private String contribISS;  	// Contribuinte de ISS?
	private String fone1;       	// Fone Principal
	private String ramal1;      	// Ramal Fone Princiapal
	private String fone2;       	// Fone Alternativo
	private String ramal2;      	// Ramal Fone Alternativo
	private String fax;         	// Fax
	private String ramalFax;    	// Ramal Fax
	private String website;     	// WEB Site
	private String movAutonomo; 	// Gerar Movtos Autonomo
	private String categoria;   	// Categoria Transportador
	private String modal;       	// Modal de Transporte
	private String negocFrete;  	// Negociação de Frete
	private String frotaDedic;  	// Admite Neg Frota Dedicada
	private String rntrc;       	// RNTRC
	private String inss;        	// Incrição no INSS
	private Integer dependentes;	// Numero de Dependentes
	private Integer maxDocCarg; 	// Nr maximo de doctos carga
	private String transpFatur; 	// Transp para Faturamento
	private String nomeFatur;   	// Nome Transp Faturamento
	private String acaoOcor;    	// Acao da Ocorrencia
	private String agrupDoctos; 	// Permitir Agrupar Doctos
	private String pfCalc;   		// Pré-Faturas por Cálculo
	private String pfFilial; 		// Pre-faturas por Filial
	private String pfUF;     		// Pre-faturas por UF
	private String pfClass;  		// Por Classificacao Frete
	private String pfTpFrete;		// Por tipo de calculo frete
	private Integer grpNormal;  	// Grupo do Tipo Normal
	private Integer grpCompVal; 	// Grupo do Tipo Comp Valor
	private Integer grpCompImp; 	// Grupo do Tipo Comp ICMS
	private Integer grpDevol;   	// Grupo do Tipo Devolucao
	private Integer grpRedesp;  	// Grupo do Tipo Redespacho
	private Integer grpReentreg;	// Grupo do Tipo Reentrega
	private Integer grpServico; 	// Grupo do Tipo Servico
	private String entregObrig; 	// Entrega Obrigatoria?
	private String calcVencto;  	// Calcular Vencto Pre-fatura
	private Integer prazo;      	// Prazo para o Vencimento
	private String diaNaoUtil;  	// Acao para dias nao-uteis
	private String tipoFrequen; 	// Tipo de Frequencia
	private Integer diaBase1;   	// Dia Base 1
	private Integer diaBase2;   	// Dia Base 2
	private Integer diaBase3;   	// Dia Base 3
	private Integer diaBase4;   	// Dia Base 4
	private Integer diaBase5;   	// Dia Base 5
	private String segunda;     	// Segunda-feira
	private String terca;       	// Terca-feira
	private String quarta;      	// Quarta-feira
	private String quinta;      	// Quinta-feira
	private String sexta;       	// Sexta-feira
	private String icmsPresum;  	// ICMS Presumido
	private String apuracIcms;  	// Forma de Apuração do ICMS
	private String apuracIss;   	// Forma de Apuração de ISS
	private String confirmPfAuto;  	// Conf. Autom. Pré-Fatura
	private String subsTribut;      // Substituicao Tributaria
	private String emiteCte;        // Emite Ct-e
	private String observacoes;     // Observacoes
	private String cxPostEDI;       // Caixa Postal EDI
	private String geraFatAut;      // Gera Fatura Automatico
	private String grupoEDI;        // Grupo Emitente EDI
	private String grpEmitGerenc;   // Grupo Emitente Gerencial
	private Integer posicaoCte;     // Posição da chave CT-e
	private String codigoErp;       // Código do Emitente no ERP
	private String lojaERP;       	// Código da Loja do Cliente
	private String transpErp;       // Código do Transp. no ERP
	private String valePedagio;     // Adiantamento de Pedágio
	private String ocorRetroat;     // Ocorrência entrega retroa
	private Double percIssSimples;  // % ISS Simples
	private String redespachante;   // Emitnete é Redespachante?
	private String estExcIcms;      // Estados Excecoes de ICMS
	private String tpServico;       // Por Tipo de Serviço
	private String cteSubcontrat;   // CT-e Subcontratação
	private String critAgrupDc;     // Critério Agrup Doc Carga

	// Construtores da classe
	public Emitentes() {
	}

	public Emitentes(Long id, String filial, String codigo, String nome, String fantasia, String abreviado, String natureza, String grupo, Instant nascCriacao, Instant dtCadastro, String origem, String situacao, String empFilial, String transp,
					 String cliente, String fornecedor, String autonomo, String endereco, String complemento, String bairro, String cep, String nrCidade, String idfed, String regTribut, String contribICMS, String inscEstRG, String orgaoExp,
					 String inscrMunic, String caixaPostal, String email, String contribISS, String fone1, String ramal1, String fone2, String ramal2, String fax, String ramalFax,String website, String movAutonomo, String categoria, String modal,
					 String negocFrete, String frotaDedic, String rntrc, String inss, Integer dependentes, Integer maxDocCarg, String transpFatur, String nomeFatur, String acaoOcor, String agrupDoctos, String pfCalc, String pfFilial, String pfUF,
					 String pfClass, String pfTpFrete, Integer grpNormal, Integer grpCompVal, Integer grpCompImp, Integer grpDevol, Integer grpRedesp, Integer grpReentreg, Integer grpServico, String entregObrig, String calcVencto, Integer prazo,
					 String diaNaoUtil, String tipoFrequen, Integer diaBase1, Integer diaBase2, Integer diaBase3, Integer diaBase4, Integer diaBase5, String segunda, String terca, String quarta, String quinta, String sexta, String icmsPresum,
					 String apuracIcms, String apuracIss, String confirmPfAuto, String subsTribut, String emiteCte, String observacoes, String cxPostEDI, String geraFatAut, String grupoEDI, String grpEmitGerenc, Integer posicaoCte, String codigoErp,
					 String lojaERP, String transpErp, String valePedagio, String ocorRetroat, Double percIssSimples, String redespachante, String estExcIcms, String tpServico, String cteSubcontrat, String critAgrupDc) {
		super();
		this.id = id;
		this.filial = filial;
		this.codigo = codigo;
		this.nome = nome;
		this.fantasia = fantasia;
		this.abreviado = abreviado;
		this.natureza = natureza;
		this.grupo = grupo;
		this.nascCriacao = nascCriacao;
		this.dtCadastro = dtCadastro;
		this.origem = origem;
		this.situacao = situacao;
		this.empFilial = empFilial;
		this.transp = transp;
		this.cliente = cliente;
		this.fornecedor = fornecedor;
		this.autonomo = autonomo;
		this.endereco = endereco;
		this.complemento = complemento;
		this.bairro = bairro;
		this.cep = cep;
		this.nrCidade = nrCidade;
		this.idfed = idfed;
		this.regTribut = regTribut;
		this.contribICMS = contribICMS;
		this.inscEstRG = inscEstRG;
		this.orgaoExp = orgaoExp;
		this.inscrMunic = inscrMunic;
		this.caixaPostal = caixaPostal;
		this.email = email;
		this.contribISS = contribISS;
		this.fone1 = fone1;
		this.ramal1 = ramal1;
		this.fone2 = fone2;
		this.ramal2 = ramal2;
		this.fax = fax;
		this.ramalFax = ramalFax;
		this.website = website;
		this.movAutonomo = movAutonomo;
		this.categoria = categoria;
		this.modal = modal;
		this.negocFrete = negocFrete;
		this.frotaDedic = frotaDedic;
		this.rntrc = rntrc;
		this.inss = inss;
		this.dependentes = dependentes;
		this.maxDocCarg = maxDocCarg;
		this.transpFatur = transpFatur;
		this.nomeFatur = nomeFatur;
		this.acaoOcor = acaoOcor;
		this.agrupDoctos = agrupDoctos;
		this.pfCalc = pfCalc;
		this.pfFilial = pfFilial;
		this.pfUF = pfUF;
		this.pfClass = pfClass;
		this.pfTpFrete = pfTpFrete;
		this.grpNormal = grpNormal;
		this.grpCompVal = grpCompVal;
		this.grpCompImp = grpCompImp;
		this.grpDevol = grpDevol;
		this.grpRedesp = grpRedesp;
		this.grpReentreg = grpReentreg;
		this.grpServico = grpServico;
		this.entregObrig = entregObrig;
		this.calcVencto = calcVencto;
		this.prazo = prazo;
		this.diaNaoUtil = diaNaoUtil;
		this.tipoFrequen = tipoFrequen;
		this.diaBase1 = diaBase1;
		this.diaBase2 = diaBase2;
		this.diaBase3 = diaBase3;
		this.diaBase4 = diaBase4;
		this.diaBase5 = diaBase5;
		this.segunda = segunda;
		this.terca = terca;
		this.quarta = quarta;
		this.quinta = quinta;
		this.sexta = sexta;
		this.icmsPresum = icmsPresum;
		this.apuracIcms = apuracIcms;
		this.apuracIss = apuracIss;
		this.confirmPfAuto = confirmPfAuto;
		this.subsTribut = subsTribut;
		this.emiteCte = emiteCte;
		this.observacoes = observacoes;
		this.cxPostEDI = cxPostEDI;
		this.geraFatAut = geraFatAut;
		this.grupoEDI = grupoEDI;
		this.grpEmitGerenc = grpEmitGerenc;
		this.posicaoCte = posicaoCte;
		this.codigoErp = codigoErp;
		this.lojaERP = lojaERP;
		this.transpErp = transpErp;
		this.valePedagio = valePedagio;
		this.ocorRetroat = ocorRetroat;
		this.percIssSimples = percIssSimples;
		this.redespachante = redespachante;
		this.estExcIcms = estExcIcms;
		this.tpServico = tpServico;
		this.cteSubcontrat = cteSubcontrat;
		this.critAgrupDc = critAgrupDc;
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

	public String getFantasia() { return fantasia; }
	public void setFantasia(String fantasia) { this.fantasia = fantasia; }

	public String getAbreviado() { return abreviado; }
	public void setAbreviado(String abreviado) { this.abreviado = abreviado; }

	public String getNatureza() { return natureza; }
	public void setNatureza(String natureza) { this.natureza = natureza; }

	public String getGrupo() { return grupo; }
	public void setGrupo(String grupo) { this.grupo = grupo; }

	public Instant getNascCriacao() { return nascCriacao; }
	public void setNascCriacao(Instant nascCriacao) { this.nascCriacao = nascCriacao; }

	public Instant getDtCadastro() { return dtCadastro; }
	public void setDtCadastro(Instant dtCadastro) { this.dtCadastro = dtCadastro; }

	public String getOrigem() { return origem; }
	public void setOrigem(String origem) { this.origem = origem; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getEmpFilial() { return empFilial; }
	public void setEmpFilial(String empFilial) { this.empFilial = empFilial; }

	public String getTransp() { return transp; }
	public void setTransp(String transp) { this.transp = transp; }

	public String getCliente() { return cliente; }
	public void setCliente(String cliente) { this.cliente = cliente; }

	public String getFornecedor() { return fornecedor; }
	public void setFornecedor(String fornecedor) { this.fornecedor = fornecedor; }

	public String getAutonomo() { return autonomo; }
	public void setAutonomo(String autonomo) { this.autonomo = autonomo; }

	public String getEndereco() { return endereco; }
	public void setEndereco(String endereco) { this.endereco = endereco; }

	public String getComplemento() { return complemento; }
	public void setComplemento(String complemento) { this.complemento = complemento; }

	public String getBairro() { return bairro; }
	public void setBairro(String bairro) { this.bairro = bairro; }

	public String getCep() { return cep; }
	public void setCep(String cep) { this.cep = cep; }

	public String getNrCidade() { return nrCidade; }
	public void setNrCidade(String nrCidade) { this.nrCidade = nrCidade; }

	public String getIdfed() { return idfed; }
	public void setIdfed(String idfed) { this.idfed = idfed; }

	public String getRegTribut() { return regTribut; }
	public void setRegTribut(String regTribut) { this.regTribut = regTribut; }

	public String getContribICMS() { return contribICMS; }
	public void setContribICMS(String contribICMS) { this.contribICMS = contribICMS; }

	public String getInscEstRG() { return inscEstRG; }
	public void setInscEstRG(String inscEstRG) { this.inscEstRG = inscEstRG; }

	public String getOrgaoExp() { return orgaoExp; }
	public void setOrgaoExp(String orgaoExp) { this.orgaoExp = orgaoExp; }

	public String getInscrMunic() { return inscrMunic; }
	public void setInscrMunic(String inscrMunic) { this.inscrMunic = inscrMunic; }

	public String getCaixaPostal() { return caixaPostal; }
	public void setCaixaPostal(String caixaPostal) { this.caixaPostal = caixaPostal; }

	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }

	public String getContribISS() { return contribISS; }
	public void setContribISS(String contribISS) { this.contribISS = contribISS; }

	public String getFone1() { return fone1; }
	public void setFone1(String fone1) { this.fone1 = fone1; }

	public String getRamal1() { return ramal1; }
	public void setRamal1(String ramal1) { this.ramal1 = ramal1; }

	public String getFone2() { return fone2; }
	public void setFone2(String fone2) { this.fone2 = fone2; }

	public String getRamal2() { return ramal2; }
	public void setRamal2(String ramal2) { this.ramal2 = ramal2; }

	public String getFax() { return fax; }
	public void setFax(String fax) { this.fax = fax; }

	public String getRamalFax() { return ramalFax; }
	public void setRamalFax(String ramalFax) { this.ramalFax = ramalFax; }

	public String getWebsite() { return website; }
	public void setWebsite(String website) { this.website = website; }

	public String getMovAutonomo() { return movAutonomo; }
	public void setMovAutonomo(String movAutonomo) { this.movAutonomo = movAutonomo; }

	public String getCategoria() { return categoria; }
	public void setCategoria(String categoria) { this.categoria = categoria; }

	public String getModal() { return modal; }
	public void setModal(String modal) { this.modal = modal; }

	public String getNegocFrete() { return negocFrete; }
	public void setNegocFrete(String negocFrete) { this.negocFrete = negocFrete; }

	public String getFrotaDedic() { return frotaDedic; }
	public void setFrotaDedic(String frotaDedic) { this.frotaDedic = frotaDedic; }

	public String getRntrc() { return rntrc; }
	public void setRntrc(String rntrc) { this.rntrc = rntrc; }

	public String getInss() { return inss; }
	public void setInss(String inss) { this.inss = inss; }

	public Integer getDependentes() { return dependentes; }
	public void setDependentes(Integer dependentes) { this.dependentes = dependentes; }

	public Integer getMaxDocCarg() { return maxDocCarg; }
	public void setMaxDocCarg(Integer maxDocCarg) { this.maxDocCarg = maxDocCarg; }

	public String getTranspFatur() { return transpFatur; }
	public void setTranspFatur(String transpFatur) { this.transpFatur = transpFatur; }

	public String getNomeFatur() { return nomeFatur; }
	public void setNomeFatur(String nomeFatur) { this.nomeFatur = nomeFatur; }

	public String getAcaoOcor() { return acaoOcor; }
	public void setAcaoOcor(String acaoOcor) { this.acaoOcor = acaoOcor; }

	public String getAgrupDoctos() { return agrupDoctos; }
	public void setAgrupDoctos(String agrupDoctos) { this.agrupDoctos = agrupDoctos; }

	public String getPfCalc() { return pfCalc; }
	public void setPfCalc(String pfCalc) { this.pfCalc = pfCalc; }

	public String getPfFilial() { return pfFilial; }
	public void setPfFilial(String pfFilial) { this.pfFilial = pfFilial; }

	public String getPfUF() { return pfUF; }
	public void setPfUF(String pfUF) { this.pfUF = pfUF; }

	public String getPfClass() { return pfClass; }
	public void setPfClass(String pfClass) { this.pfClass = pfClass; }

	public String getPfTpFrete() { return pfTpFrete; }
	public void setPfTpFrete(String pfTpFrete) { this.pfTpFrete = pfTpFrete; }

	public Integer getGrpNormal() { return grpNormal; }
	public void setGrpNormal(Integer grpNormal) { this.grpNormal = grpNormal; }

	public Integer getGrpCompVal() { return grpCompVal; }
	public void setGrpCompVal(Integer grpCompVal) { this.grpCompVal = grpCompVal; }

	public Integer getGrpCompImp() { return grpCompImp; }
	public void setGrpCompImp(Integer grpCompImp) { this.grpCompImp = grpCompImp; }

	public Integer getGrpDevol() { return grpDevol; }
	public void setGrpDevol(Integer grpDevol) { this.grpDevol = grpDevol; }

	public Integer getGrpRedesp() { return grpRedesp; }
	public void setGrpRedesp(Integer grpRedesp) { this.grpRedesp = grpRedesp; }

	public Integer getGrpReentreg() { return grpReentreg; }
	public void setGrpReentreg(Integer grpReentreg) { this.grpReentreg = grpReentreg; }

	public Integer getGrpServico() { return grpServico; }
	public void setGrpServico(Integer grpServico) { this.grpServico = grpServico; }

	public String getEntregObrig() { return entregObrig; }
	public void setEntregObrig(String entregObrig) { this.entregObrig = entregObrig; }

	public String getCalcVencto() { return calcVencto; }
	public void setCalcVencto(String calcVencto) { this.calcVencto = calcVencto; }

	public Integer getPrazo() { return prazo; }
	public void setPrazo(Integer prazo) { this.prazo = prazo; }

	public String getDiaNaoUtil() { return diaNaoUtil; }
	public void setDiaNaoUtil(String diaNaoUtil) { this.diaNaoUtil = diaNaoUtil; }

	public String getTipoFrequen() { return tipoFrequen; }
	public void setTipoFrequen(String tipoFrequen) { this.tipoFrequen = tipoFrequen; }

	public Integer getDiaBase1() { return diaBase1; }
	public void setDiaBase1(Integer diaBase1) { this.diaBase1 = diaBase1; }

	public Integer getDiaBase2() { return diaBase2; }
	public void setDiaBase2(Integer diaBase2) { this.diaBase2 = diaBase2; }

	public Integer getDiaBase3() { return diaBase3; }
	public void setDiaBase3(Integer diaBase3) { this.diaBase3 = diaBase3; }

	public Integer getDiaBase4() { return diaBase4; }
	public void setDiaBase4(Integer diaBase4) { this.diaBase4 = diaBase4; }

	public Integer getDiaBase5() { return diaBase5; }
	public void setDiaBase5(Integer diaBase5) { this.diaBase5 = diaBase5; }

	public String getSegunda() { return segunda; }
	public void setSegunda(String segunda) { this.segunda = segunda; }

	public String getTerca() { return terca; }
	public void setTerca(String terca) { this.terca = terca; }

	public String getQuarta() { return quarta; }
	public void setQuarta(String quarta) { this.quarta = quarta; }

	public String getQuinta() { return quinta; }
	public void setQuinta(String quinta) { this.quinta = quinta; }

	public String getSexta() { return sexta; }
	public void setSexta(String sexta) { this.sexta = sexta; }

	public String getIcmsPresum() { return icmsPresum; }
	public void setIcmsPresum(String icmsPresum) { this.icmsPresum = icmsPresum; }

	public String getApuracIcms() { return apuracIcms; }
	public void setApuracIcms(String apuracIcms) { this.apuracIcms = apuracIcms; }

	public String getApuracIss() { return apuracIss; }
	public void setApuracIss(String apuracIss) { this.apuracIss = apuracIss; }

	public String getConfirmPfAuto() { return confirmPfAuto; }
	public void setConfirmPfAuto(String confirmPfAuto) { this.confirmPfAuto = confirmPfAuto; }

	public String getSubsTribut() { return subsTribut; }
	public void setSubsTribut(String subsTribut) { this.subsTribut = subsTribut; }

	public String getEmiteCte() { return emiteCte; }
	public void setEmiteCte(String emiteCte) { this.emiteCte = emiteCte; }

	public String getObservacoes() { return observacoes; }
	public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

	public String getCxPostEDI() { return cxPostEDI; }
	public void setCxPostEDI(String cxPostEDI) { this.cxPostEDI = cxPostEDI; }

	public String getGeraFatAut() { return geraFatAut; }
	public void setGeraFatAut(String geraFatAut) { this.geraFatAut = geraFatAut; }

	public String getGrupoEDI() { return grupoEDI; }
	public void setGrupoEDI(String grupoEDI) { this.grupoEDI = grupoEDI; }

	public String getGrpEmitGerenc() { return grpEmitGerenc; }
	public void setGrpEmitGerenc(String grpEmitGerenc) { this.grpEmitGerenc = grpEmitGerenc; }

	public Integer getPosicaoCte() { return posicaoCte; }
	public void setPosicaoCte(Integer posicaoCte) { this.posicaoCte = posicaoCte; }

	public String getCodigoErp() { return codigoErp; }
	public void setCodigoErp(String codigoErp) { this.codigoErp = codigoErp; }

	public String getLojaERP() { return lojaERP; }
	public void setLojaERP(String lojaERP) { this.lojaERP = lojaERP; }

	public String getTranspErp() { return transpErp; }
	public void setTranspErp(String transpErp) { this.transpErp = transpErp; }

	public String getValePedagio() { return valePedagio; }
	public void setValePedagio(String valePedagio) { this.valePedagio = valePedagio; }

	public String getOcorRetroat() { return ocorRetroat; }
	public void setOcorRetroat(String ocorRetroat) { this.ocorRetroat = ocorRetroat; }

	public Double getPercIssSimples() { return percIssSimples; }
	public void setPercIssSimples(Double percIssSimples) { this.percIssSimples = percIssSimples; }

	public String getRedespachante() { return redespachante; }
	public void setRedespachante(String redespachante) { this.redespachante = redespachante; }

	public String getEstExcIcms() { return estExcIcms; }
	public void setEstExcIcms(String estExcIcms) { this.estExcIcms = estExcIcms; }

	public String getTpServico() { return tpServico; }
	public void setTpServico(String tpServico) { this.tpServico = tpServico; }

	public String getCteSubcontrat() { return cteSubcontrat; }
	public void setCteSubcontrat(String cteSubcontrat) { this.cteSubcontrat = cteSubcontrat; }

	public String getCritAgrupDc() { return critAgrupDc; }
	public void setCritAgrupDc(String critAgrupDc) { this.critAgrupDc = critAgrupDc; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "Emitentes [id=" + id + ", filial=" + filial + ", codigo=" + codigo + ", nome=" + nome + ", fantasia=" + fantasia + ", abreviado=" + abreviado + ", natureza=" + natureza + ", grupo=" + grupo + ", nascCriacao=" + nascCriacao 
					  + ", dtCadastro=" + dtCadastro + ", origem=" + origem + ", situacao=" + situacao + ", empFilial=" + empFilial + ", transp=" + transp + ", cliente=" + cliente + ", fornecedor=" + fornecedor + ", autonomo=" + autonomo 
					  + ", endereco=" + endereco + ", complemento=" + complemento + ", bairro=" + bairro + ", cep=" + cep + ", nrCidade=" + nrCidade + ", idfed=" + idfed + ", regTribut=" + regTribut + ", contribICMS=" + contribICMS 
					  + ", inscEstRG=" + inscEstRG + ", orgaoExp=" + orgaoExp + ", inscrMunic=" + inscrMunic + ", caixaPostal=" + caixaPostal + ", email=" + email + ", contribISS=" + contribISS + ", fone1=" + fone1 + ", ramal1=" + ramal1 
					  + ", fone2=" + fone2 + ", ramal2=" + ramal2 + ", fax=" + fax + ", ramalFax=" + ramalFax + ", website=" + website + ", movAutonomo=" + movAutonomo + ", categoria=" + categoria + ", modal=" + modal + ", negocFrete=" + negocFrete 
					  + ", frotaDedic=" + frotaDedic + ", rntrc=" + rntrc + ", inss=" + inss + ", dependentes=" + dependentes + ", maxDocCarg=" + maxDocCarg + ", transpFatur=" + transpFatur + ", nomeFatur=" + nomeFatur + ", acaoOcor=" + acaoOcor 
					  + ", agrupDoctos=" + agrupDoctos + ", pfCalc=" + pfCalc + ", pfFilial=" + pfFilial + ", pfUF=" + pfUF + ", pfClass=" + pfClass + ", pfTpFrete=" + pfTpFrete + ", grpNormal=" + grpNormal + ", grpCompVal=" + grpCompVal 
					  + ", grpCompImp=" + grpCompImp + ", grpDevol=" + grpDevol + ", grpRedesp=" + grpRedesp + ", grpReentreg=" + grpReentreg + ", grpServico=" + grpServico + ", entregObrig=" + entregObrig + ", calcVencto=" + calcVencto 
					  + ", prazo=" + prazo + ", diaNaoUtil=" + diaNaoUtil + ", tipoFrequen=" + tipoFrequen + ", diaBase1=" + diaBase1 + ", diaBase2=" + diaBase2 + ", diaBase3=" + diaBase3 + ", diaBase4=" + diaBase4 + ", diaBase5=" + diaBase5 
					  + ", segunda=" + segunda + ", terca=" + terca + ", quarta=" + quarta + ", quinta=" + quinta + ", sexta=" + sexta + ", icmsPresum=" + icmsPresum + ", apuracIcms=" + apuracIcms + ", apuracIss=" + apuracIss 
					  + ", confirmPfAuto=" + confirmPfAuto + ", subsTribut=" + subsTribut + ", emiteCte=" + emiteCte + ", observacoes=" + observacoes + ", cxPostEDI=" + cxPostEDI + ", geraFatAut=" + geraFatAut + ", grupoEDI=" + grupoEDI 
					  + ", grpEmitGerenc=" + grpEmitGerenc + ", posicaoCte=" + posicaoCte + ", codigoErp=" + codigoErp + ", lojaERP=" + lojaERP + ", transpErp=" + transpErp + ", valePedagio=" + valePedagio + ", ocorRetroat=" + ocorRetroat 
					  + ", percIssSimples=" + percIssSimples + ", redespachante=" + redespachante + ", estExcIcms=" + estExcIcms + ", tpServico=" + tpServico + ", cteSubcontrat=" + cteSubcontrat + ", critAgrupDc=" + critAgrupDc + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, codigo, idfed);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		Emitentes other = (Emitentes) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial)	&& Objects.equals(codigo, other.codigo) && Objects.equals(idfed, other.idfed);
	}
}
