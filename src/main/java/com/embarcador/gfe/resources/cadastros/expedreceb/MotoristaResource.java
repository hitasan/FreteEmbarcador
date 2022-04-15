package com.embarcador.gfe.resources.cadastros.expedreceb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.expedreceb.Motorista;

@RestController
@RequestMapping(value = "/motoristas")
public class MotoristaResource {

	@GetMapping
	public ResponseEntity<Motorista> findAll(){

		Motorista m = new Motorista(null, "01", "000000", "MOTORISTA 01", "PILOTO", "MOTORISTA", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

		return ResponseEntity.ok().body(m);
	}
}
