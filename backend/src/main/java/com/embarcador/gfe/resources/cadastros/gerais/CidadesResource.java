package com.embarcador.gfe.resources.cadastros.gerais;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.gerais.Cidades;

@RestController
@RequestMapping(value = "/cidades")
public class CidadesResource {

	@GetMapping
	public ResponseEntity<Cidades> findAll(){
		Cidades c = new Cidades(null, "01", "11111111", "SAO PAULO", null, null, null, null, null, null, null, null, null);
		
		return ResponseEntity.ok().body(c);
	}
}
