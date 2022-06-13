package com.embarcador.gfe.resources.cadastros.expedreceb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.expedreceb.TipoDoctoCarga;

@RestController
@RequestMapping(value = "/tiposdoctocarga")
public class TipoDoctoCargaResource {

	@GetMapping
	public ResponseEntity<TipoDoctoCarga> findAll(){
		
		TipoDoctoCarga tp = new TipoDoctoCarga(null, "01", "NFE", "NOTA FISCAL DE ENTRADA", null, null, null, null, null, null, null, null);

		return ResponseEntity.ok().body(tp);
	}
}
