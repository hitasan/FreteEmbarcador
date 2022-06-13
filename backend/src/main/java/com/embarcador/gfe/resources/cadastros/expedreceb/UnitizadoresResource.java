package com.embarcador.gfe.resources.cadastros.expedreceb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.expedreceb.Unitizadores;

@RestController
@RequestMapping(value = "/unitizadores")
public class UnitizadoresResource {

	@GetMapping
	public ResponseEntity<Unitizadores> findAll(){

		Unitizadores un = new Unitizadores(null, "01", "PALLET", "PALLET DE MADEIRA", 0.0, 0.0, 0.0, null, null, null);

		return ResponseEntity.ok().body(un);
	}
}
