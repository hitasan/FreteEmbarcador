package com.embarcador.gfe.resources.cadastros.gerais;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.gerais.Emitentes;

@RestController
@RequestMapping(value = "/emitentes")
public class EmitentesResource {

	@GetMapping
	public ResponseEntity<Emitentes> findAll(){

		Emitentes em = new Emitentes(null, "01", "00000000000000", "TRANSPORTADOR PADRAO", "TRANSP PADRAO", "TRANSP PADRAO", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

		return ResponseEntity.ok().body(em);
	}
}
