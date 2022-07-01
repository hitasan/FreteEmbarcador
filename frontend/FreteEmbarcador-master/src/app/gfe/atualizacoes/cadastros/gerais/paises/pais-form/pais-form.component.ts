import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoLookupColumn, PoDynamicFormField } from '@po-ui/ng-components';

import { PaisesService } from '../paises.service';
import { Pais } from '../pais.interface';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {

  title = 'Novo país';
  idioma: string;
  codPaisDUE: string;
  paisForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public paisService: PaisesService) { const { id } = this.activatedRoute.snapshot.params;
                                         this.id = id }

  ngOnInit() {
    this.paisForm = this.fb.group({ filial: [''],
                                    codigo: ['', Validators.required],
                                    nome: ['', Validators.required],
                                    sigla: [''],
                                    idioma: ['', Validators.required],
                                    descIdioma: ['', Validators.required],
                                    dinalad: [''],
                                    naladi: ['', Validators.required],
                                    certOrigemAladi: [''],
                                    certOrigemComum: [''],
                                    certOrigemMercosul: [''],
                                    certOrigemSGPC: [''],
                                    exigeLincImport: [''],
                                    paisIngles: ['', Validators.required],
                                    codAbics: [''],
                                    codigoRIEX: [''],
                                    codSisxomex: [''],
                                    codigoFiesp: [''],
                                    claveMexico: [''],
                                    nacionalidad: [''],
                                    codERP: [''],
                                    codPaisDUE: ['']
                                  });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.paisService.get(id).subscribe((pais: Pais) => {
        this.paisForm.patchValue(pais);
        this.title = pais.nome;
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.paisForm.invalid) {
      this.markAsDirtyInvalidControls(this.paisForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const pais = this.paisForm.value;
    const operation = !!this.id ? this.paisService.update(this.id, pais) : this.paisService.save(pais);
    const successMessage = !!this.id ? 'País atualizado com sucesso' : 'País salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/paises']);
    });
  }

  private markAsDirtyInvalidControls(controls: { [key: string]: AbstractControl }) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];

        if (control.invalid) {
          control.markAsDirty();
        }
      }
    }
  }

  // ======================================================================================================================
  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Código' },
    { property: 'name', label: 'Descrição' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Selection Informations', optional: true, gridColumns: 6, label: 'Código' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return `${value.label}`;  // `${value.nickname} - ${value.label}`;
  }
}
