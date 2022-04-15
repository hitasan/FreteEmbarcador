package com.embarcador.gfe.resources.cadastros.expedreceb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.expedreceb.FiltroDocCarga;

@RestController
@RequestMapping(value = "/filtrosdoccarga")
public class FiltroDocCargaResource {

	@GetMapping
	public ResponseEntity<FiltroDocCarga> findAll(){

		FiltroDocCarga fdc = new FiltroDocCarga(null, "01", "GW1", "TIPODC", "CTE", "BLOQUEAR");

		return ResponseEntity.ok().body(fdc);
	}
}
