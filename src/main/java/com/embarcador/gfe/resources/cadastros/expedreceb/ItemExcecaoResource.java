package com.embarcador.gfe.resources.cadastros.expedreceb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.expedreceb.ItemExcecao;

@RestController
@RequestMapping(value = "/itensexcecao")
public class ItemExcecaoResource {

	@GetMapping
	public ResponseEntity<ItemExcecao> findAll(){

		ItemExcecao it = new ItemExcecao(null, "01", "0000000000", "PRODUTO PADRAO", null, null);

		return ResponseEntity.ok().body(it);
	}
}
