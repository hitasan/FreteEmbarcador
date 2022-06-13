package com.embarcador.gfe.resources.cadastros.expedreceb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.expedreceb.Veiculos;

@RestController
@RequestMapping(value = "/veiculos")
public class VeiculosResource {

	@GetMapping
	public ResponseEntity<Veiculos> findAll(){

		Veiculos v = new Veiculos(null, "01", "000000", "BAU", "ABC1234", "SC", null, null, null, null, null, null, null, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, null, null, null, null, 0.0, null, null, null, null);

		return ResponseEntity.ok().body(v);
	}
}
