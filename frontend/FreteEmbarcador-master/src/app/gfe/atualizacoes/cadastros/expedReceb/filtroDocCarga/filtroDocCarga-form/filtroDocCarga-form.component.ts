import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField  } from '@po-ui/ng-components';

import { FiltroDocCarga } from '../filtroDocCarga.interface';
import { FiltroDocCargaService } from '../filtroDocCarga.service';

@Component({
  selector: 'app-filtroDocCarga-form',
  templateUrl: './filtroDocCarga-form.component.html',
  styleUrls: ['./filtroDocCarga-form.component.css']
})
export class FiltroDocCargaFormComponent implements OnInit {

  title = 'INCLUIR - Filtros de Documento de Carga';
  filtroDocCargaForm: FormGroup;
  isTableLoading = false;

  item: string = '';
  tabela: string = 'GW1 - Docto Carga';
	campo: string = '';
	valor: string = '';
	acao: string = '1 - Rejeita';

  private id;

  readonly tabelaOpt: Array<PoSelectOption> = [
    { label: 'GW1 - Docto Carga', value: 'GW1 - Docto Carga' },
    { label: 'GW8 - Itens', value: 'GW8 - Itens' },
    { label: 'GWU - Trechos', value: 'GWU - Trechos' }
  ];
  readonly acaoOpt: Array<PoSelectOption> = [
    { label: '1 - Rejeita', value: '1 - Rejeita' },
    { label: '2 - Bloqueia', value: '2 - Bloqueia' },
    { label: '3 - Libera', value: '3 - Libera' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private filtroDocCargaService: FiltroDocCargaService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.filtroDocCargaForm = this.fb.group({ filial: [''],
                                              item: ['', Validators.required],
                                              tabela: ['', Validators.required],
                                              campo: ['', Validators.required],
                                              valor: ['', Validators.required],
                                              acao: ['', Validators.required],
                                        });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.filtroDocCargaService.get(id).subscribe((filtroDocCarga: FiltroDocCarga) => {
        this.filtroDocCargaForm.patchValue(filtroDocCarga);
        this.title = "ALTERAR - Filtros de Documento de Carga";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.filtroDocCargaForm.invalid) {
      this.markAsDirtyInvalidControls(this.filtroDocCargaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const filtroDocCarga = this.filtroDocCargaForm.value;

    const operation = !!this.id ? this.filtroDocCargaService.update(this.id, filtroDocCarga) : this.filtroDocCargaService.save(filtroDocCarga);

    const successMessage = !!this.id ? 'Filtro atualizado com sucesso' : 'Filtro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/filtroDocCarga']);
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
  // Funções de controle do lookup
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
