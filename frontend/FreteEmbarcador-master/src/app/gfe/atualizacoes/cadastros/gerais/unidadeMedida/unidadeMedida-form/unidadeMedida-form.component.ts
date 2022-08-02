import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoLookupColumn, PoDynamicFormField } from '@po-ui/ng-components';

import { UnidadeMedidaService } from '../unidadeMedida.service';
import { UnidadeMedida } from '../unidadeMedida.interface';

@Component({
  selector: 'app-unidadeMedida-form',
  templateUrl: './unidadeMedida-form.component.html',
  styleUrls: ['./unidadeMedida-form.component.css']
})
export class UnidadeMedidaFormComponent implements OnInit {

  title = 'Incluir';
  uMedidaForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public uMedidaService: UnidadeMedidaService) { const { id } = this.activatedRoute.snapshot.params;
                                                         this.id = id }

  ngOnInit() {
    this.uMedidaForm = this.fb.group({ filial: [''],
                                       uniMedida: ['', Validators.required],
                                       descricao: ['', Validators.required],
                                       codSiscomex: [''],
                                       codMercosul: [''],
                                       codRiex: [''],
                                       codUMSRF: [''],
                                       codCertFiesp: [''],
                                       codUMFCI: [''],
                                       codERP: ['']
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.uMedidaService.get(id).subscribe((uMedida: UnidadeMedida) => {
        this.uMedidaForm.patchValue(uMedida);
        this.title = "pais.nome FORM";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.uMedidaForm.invalid) {
      this.markAsDirtyInvalidControls(this.uMedidaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const uMedida = this.uMedidaForm.value;
    const operation = !!this.id ? this.uMedidaService.update(this.id, uMedida) : this.uMedidaService.save(uMedida);
    const successMessage = !!this.id ? 'Unidade de Medida atualizada com sucesso' : 'Unidade de Medida salva com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/unidadeMedida']);
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
