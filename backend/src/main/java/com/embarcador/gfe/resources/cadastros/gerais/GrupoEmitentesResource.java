package com.embarcador.gfe.resources.cadastros.gerais;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.gerais.GrupoEmitentes;

@RestController
@RequestMapping(value = "/grupoemitentes")
public class GrupoEmitentesResource {

	@GetMapping
	public ResponseEntity<GrupoEmitentes> findAll(){
		
		GrupoEmitentes ge = new GrupoEmitentes(null, "01", "TRANSP", "TRANSPORTADORES", null, null, null);

		return ResponseEntity.ok().body(ge);
	}
}
