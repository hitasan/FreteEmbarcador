package com.embarcador.gfe.resources.cadastros;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.embarcador.gfe.entities.cadastros.Paises;

@RestController
@RequestMapping(value = "/paises")
public class PaisResource {

	@GetMapping
	public ResponseEntity<Paises> findAll(){
		Paises p = new Paises("01",			// filial
							 "102",			// codigo
							 "BRASIL",		// nome
							 "BRA",			// sigla
							 "BRASILEIRO",	// idioma
							 "PORTUGUES",	// descIdioma
							 null,			// dinalad
							 null,			// naladi
							 null,			// certOrigemAladi
							 null,			// certOrigemComum
							 null,			// certOrigemMercosul
							 null,			// certOrigemSGPC
							 null,			// exigeLincImport
							 null,			// paisIngles
							 null,			// codAbics
							 null,			// codigoRIEX
							 null,			// codSisxomex
							 null,			// codigoFiesp
							 null,			// claveMexico
							 null,			// nacionalidad
							 null,			// codERP
							 null);			// codPaisDUE
				
		return ResponseEntity.ok().body(p);
	}
}
