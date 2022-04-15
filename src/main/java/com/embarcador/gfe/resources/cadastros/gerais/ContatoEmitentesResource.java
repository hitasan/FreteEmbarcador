package com.embarcador.gfe.resources.cadastros.gerais;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.gerais.ContatoEmitentes;

@RestController
@RequestMapping(value = "/contatoemitentes")
public class ContatoEmitentesResource {

	@GetMapping
	public ResponseEntity<ContatoEmitentes> findAll(){
		
		ContatoEmitentes ce = new ContatoEmitentes(null, "01", "00000000000000", "0001", "1", "CONTATO 01", "CONTATO01", "LOGISTICA", "ANALISTA DE LOGISTICA", "contato01@gmail.com", null, null, null, null, null, null, null, null, null, null, null, null, null);

		return ResponseEntity.ok().body(ce);
	}
}
