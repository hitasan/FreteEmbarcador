package com.embarcador.gfe.resources.cadastros.gerais;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.gerais.UnidadeMedidas;

@RestController
@RequestMapping(value = "/unidademedidas")
public class UnidadeMedidasResource {

	@GetMapping
	public ResponseEntity<UnidadeMedidas> findAll(){
		
		UnidadeMedidas um = new UnidadeMedidas(null,		// Chave do registro
				                               "01",		// Filial do cadastro
				                               "KG",		// Sigla da unidade de medida
				                               "Quilograma",// Descrição
				                               null,		// Codigo SISCOMEX
				                               null,		// Codigo SISCOMEX MERCOSUL
				                               null,		// Codigo RIEX
				                               null,		// Codigo da unidade de medida da SRF
				                               null,        // Codigo certificado origem FIESP
				                               null,		// Codigo da unidade de medida para FCI
				                               null);		// Codigo da unidade de medida no ERP

		return ResponseEntity.ok().body(um);
	}
}
