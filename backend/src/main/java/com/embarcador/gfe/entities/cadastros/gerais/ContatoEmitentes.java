package com.embarcador.gfe.entities.cadastros.gerais;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ContatoEmitentes implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Chave do registro
	private String filial;			// Filial do cadastro
	private String codEmitente;		// Codigo do Emitente - GU2_CDEMIT
	private String sequencia;       // Sequencia do Contato - GU2_SEQ
	private String situacao;       	// Situacao no sistema - GU2_SIT
	private String nome;			// Nome do Contato - GU2_NOME
	private String apelido;      	// Pseudonimo/Apelido- GU2_PSEUD
	private String setor; 			// Setor do Contato - GU2_SETOR
	private String funcao;          // Funcao do contato - GU2_CARGO
	private String email;          	// Endereco eletronico - GU2_EMAIL
	private String fone1;          	// Fone Principal - GU2_FONE1
	private Integer ramal1;         // Ramal Fone Principal - GU2_RAMAL1
	private String fone2;			// Fone Alternativo - GU2_FONE2
	private Integer ramal2;			// Ramal Fone Alternativo - GU2_RAMAL2
	private String fax;				// Fax - GU2_FAX
	private Integer ramalFax;       // Ramal Fax - GU2_RAMALF
	private String recebePreFat;    // Recebe Pre-faturas? - GU2_RECPRE
	private String observacoes;     // Observacoes - GU2_OBS
	private String recebeXmlNFe;    // Recebe XML de NFe? - GU2_RECNFE
	private String recebeRef;       // Recebe Referência? - GU2_RECREF
	private String recebeCotacao;   // Recebe Cotação? - GU2_RECCOT
	private String recebeAgendam;   // Recebe Aviso Agendamento? - GU2_RECAGE
	private String recebeContrato;  // Recebe Contrato? - GU2_RECCTR


	// Construtores da classe
	public ContatoEmitentes() {
	}

	public ContatoEmitentes(Long id, String filial, String codEmitente, String sequencia, String situacao, String nome, String apelido, String setor, String funcao, String email, String fone1, Integer ramal1, String fone2,
			                Integer ramal2, String fax, Integer ramalFax, String recebePreFat, String observacoes, String recebeXmlNFe, String recebeRef, String recebeCotacao, String recebeAgendam, String recebeContrato) {
		super();
		this.id = id;
		this.filial = filial;
		this.codEmitente = codEmitente;
		this.sequencia = sequencia;
		this.situacao = situacao;
		this.nome = nome;
		this.apelido = apelido;
		this.setor = setor;
		this.funcao = funcao;
		this.email = email;
		this.fone1 = fone1;
		this.ramal1 = ramal1;
		this.fone2 = fone2;
		this.ramal2 = ramal2;
		this.fax = fax;
		this.ramalFax = ramalFax;
		this.recebePreFat = recebePreFat;
		this.observacoes = observacoes;
		this.recebeXmlNFe = recebeXmlNFe;
		this.recebeRef = recebeRef;
		this.recebeCotacao = recebeCotacao;
		this.recebeAgendam = recebeAgendam;
		this.recebeContrato = recebeContrato;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getCodEmitente() { return codEmitente; }
	public void setCodEmitente(String codEmitente) { this.codEmitente = codEmitente; }

	public String getSequencia() { return sequencia; }
	public void setSequencia(String sequencia) { this.sequencia = sequencia; }

	public String getSituacao() { return situacao; }
	public void setSituacao(String situacao) { this.situacao = situacao; }

	public String getNome() { return nome; }
	public void setNome(String nome) { this.nome = nome; }

	public String getApelido() { return apelido; }
	public void setApelido(String apelido) { this.apelido = apelido; }

	public String getSetor() { return setor; }
	public void setSetor(String setor) { this.setor = setor; }

	public String getFuncao() { return funcao; }
	public void setFuncao(String funcao) { this.funcao = funcao; }

	public String getEmail() { return email; }
	public void setEmail(String email) { this.email = email; }

	public String getFone1() { return fone1; }
	public void setFone1(String fone1) { this.fone1 = fone1; }

	public Integer getRamal1() { return ramal1; }
	public void setRamal1(Integer ramal1) { this.ramal1 = ramal1; }

	public String getFone2() { return fone2; }
	public void setFone2(String fone2) { this.fone2 = fone2; }

	public Integer getRamal2() { return ramal2; }
	public void setRamal2(Integer ramal2) { this.ramal2 = ramal2; }

	public String getFax() { return fax; }
	public void setFax(String fax) { this.fax = fax; }

	public Integer getRamalFax() { return ramalFax; }
	public void setRamalFax(Integer ramalFax) { this.ramalFax = ramalFax; }

	public String getRecebePreFat() { return recebePreFat; }
	public void setRecebePreFat(String recebePreFat) { this.recebePreFat = recebePreFat; }

	public String getObservacoes() { return observacoes; }
	public void setObservacoes(String observacoes) { this.observacoes = observacoes; }

	public String getRecebeXmlNFe() { return recebeXmlNFe; }
	public void setRecebeXmlNFe(String recebeXmlNFe) { this.recebeXmlNFe = recebeXmlNFe; }

	public String getRecebeRef() { return recebeRef; }
	public void setRecebeRef(String recebeRef) { this.recebeRef = recebeRef; }

	public String getRecebeCotacao() { return recebeCotacao; }
	public void setRecebeCotacao(String recebeCotacao) { this.recebeCotacao = recebeCotacao; }

	public String getRecebeAgendam() { return recebeAgendam; }
	public void setRecebeAgendam(String recebeAgendam) { this.recebeAgendam = recebeAgendam; }

	public String getRecebeContrato() { return recebeContrato; }
	public void setRecebeContrato(String recebeContrato) { this.recebeContrato = recebeContrato; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "ContatoEmitentes [id=" + id + ", filial=" + filial + ", codEmitente=" + codEmitente + ", sequencia=" + sequencia + ", situacao=" + situacao + ", nome=" + nome + ", apelido=" + apelido + ", setor=" + setor + ", funcao=" + funcao 
				             + ", email=" + email + ", fone1=" + fone1 + ", ramal1=" + ramal1 + ", fone2=" + fone2 + ", ramal2=" + ramal2 + ", fax=" + fax + ", ramalFax=" + ramalFax + ", recebePreFat=" + recebePreFat + ", observacoes=" + observacoes
				             + ", recebeXmlNFe=" + recebeXmlNFe + ", recebeRef=" + recebeRef + ", recebeCotacao=" + recebeCotacao + ", recebeAgendam=" + recebeAgendam + ", recebeContrato=" + recebeContrato + "]";
	}

	
	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(id, filial, codEmitente, sequencia);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		ContatoEmitentes other = (ContatoEmitentes) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(codEmitente, other.codEmitente) && Objects.equals(sequencia, other.sequencia);
	}
}
