package com.embarcador.gfe.entities.cadastros.expedreceb;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ItemExcecao implements Serializable {

	private static final long serialVersionUID = 1L;

	// Atributos da classe
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;			// Chave do registro
	private String filial;      // Filial do sistema      - GUK_FILIAL
	private String item;        // Item                   - GUK_ITEM  
	private String descicao;   	// Descrição Item         - GUK_DSITEM
	private String classFrete;  // Classificação de Frete - GUK_CDCLFR
	private String tipoItem;   	// Tipo Tributação Item   - GUK_TPITEM


	// Construtores da classe
	public ItemExcecao() {
	}

	public ItemExcecao(Long id, String filial, String item, String descicao, String classFrete, String tipoItem) {
		super();
		this.id = id;
		this.filial = filial;
		this.item = item;
		this.descicao = descicao;
		this.classFrete = classFrete;
		this.tipoItem = tipoItem;
	}

	
	// Getters / Setters
	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getFilial() { return filial; }
	public void setFilial(String filial) { this.filial = filial; }

	public String getItem() { return item; }
	public void setItem(String item) { this.item = item; }

	public String getDescicao() { return descicao; }
	public void setDescicao(String descicao) { this.descicao = descicao; }

	public String getClassFrete() { return classFrete; }
	public void setClassFrete(String classFrete) { this.classFrete = classFrete; }

	public String getTipoItem() { return tipoItem; }
	public void setTipoItem(String tipoItem) { this.tipoItem = tipoItem; }

	
	// Metodo toString
	@Override
	public String toString() {
		return "ItemExcecao [id=" + id + ", filial=" + filial + ", item=" + item + ", descicao=" + descicao + ", classFrete=" + classFrete + ", tipoItem=" + tipoItem + "]";
	}


	// Hashcod / Equals
	@Override
	public int hashCode() {
		return Objects.hash(filial, id, item);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;

		ItemExcecao other = (ItemExcecao) obj;

		return Objects.equals(id, other.id) && Objects.equals(filial, other.filial) && Objects.equals(item, other.item);
	}
}
