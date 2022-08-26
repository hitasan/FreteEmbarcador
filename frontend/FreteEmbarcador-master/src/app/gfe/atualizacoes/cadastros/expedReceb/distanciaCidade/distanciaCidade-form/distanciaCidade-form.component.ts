import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat  } from '@po-ui/ng-components';

import { DistanciaCidade } from '../distanciaCidade.interface';
import { DistanciaCidadeService } from '../distanciaCidade.service';

@Component({
  selector: 'app-distanciaCidade-form',
  templateUrl: './distanciaCidade-form.component.html',
  styleUrls: ['./distanciaCidade-form.component.css']
})
export class DistanciaCidadeFormComponent implements OnInit {

  title = 'INCLUIR - Distância entre Cidades';
  distanciaCidadeForm: FormGroup;
  isTableLoading = false;

  filial: string = '';
  codTabela: string = '';
	tipoTabela: string = '2 - Distância';
	idaVolta: string = '2 - Não';
	iniValidade: string | Date;
	fimValidade: string | Date;
	cidOrigem: string = '';
	cidDest: string = '';
	prioridade: number = 0;
  rotaOrigem: string = '';
  rotaDestino: string = '';
	tipoOper: string = '';
  descTpOper: string = '';
	tipoVeiculo: string = '';
  descTpVeic: string = '';
	codGrupo: string = '';
  descGrupo: string = '';
	transportador: string = '';
  descTransp: string = '';
	modal: string = '1 - Indiferente';
	classifFrete: string = '';
  descClass: string = '';
	distEstimad: number = 0;

  private id;

  readonly tipoTabelaOpt: Array<PoSelectOption> = [
    { label: '1 - Prazo', value: '1 - Prazo' },
    { label: '2 - Distância', value: '2 - Distância' }
  ];
  readonly idaVoltaOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly modalOpt: Array<PoSelectOption> = [
    { label: '1 - Indiferente', value: '1 - Indiferente' },
    { label: '2 - Rodoviario', value: '2 - Rodoviario' },
    { label: '3 - Ferroviario', value: '3 - Ferroviario' },
    { label: '4 - Aereo', value: '4 - Aereo' },
    { label: '5 - Aquaviario', value: '5 - Aquaviario' },
    { label: '6 - Dutoviario', value: '6 - Dutoviario' },
    { label: '7 - Multimodal', value: '7 - Multimodal' }
  ];
  readonly tipoPrazoOpt: Array<PoSelectOption> = [
    { label: '0 - Dias Uteis', value: '0 - Dias Uteis' },
    { label: '1 - Dias Corridos', value: '1 - Dias Corridos' },
    { label: '2 - Horas', value: '2 - Horas' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private distanciaCidadeService: DistanciaCidadeService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.distanciaCidadeForm = this.fb.group({filial: [''],
                                              codTabela: [''],
                                              tipoTabela: ['', Validators.required],
                                              iniValidade: ['', Validators.required],
                                              fimValidade: ['', Validators.required],
                                              idaVolta: [''],
                                              cidOrigem: [''],
                                              cidDest: [''],
                                              prioridade: [''],
                                              rotaOrigem: [''],
                                              rotaDestino: [''],
                                              tipoOper: [''],
                                              descTpOper: [''],
                                              tipoVeiculo: [''],
                                              descTpVeic: [''],
                                              codGrupo: [''],
                                              descGrupo: [''],
                                              transportador: [''],
                                              descTransp: [''],
                                              modal: [''],
                                              classifFrete: [''],
                                              descClass: [''],
                                              distEstimad: [0]
                                            });
    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.distanciaCidadeService.get(id).subscribe((distanciaCidade: DistanciaCidade) => {
        this.distanciaCidadeForm.patchValue(distanciaCidade);
        this.title = "ALTERAR - Distância entre Cidades";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.distanciaCidadeForm.invalid) {
      this.markAsDirtyInvalidControls(this.distanciaCidadeForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const distanciaCidade = this.distanciaCidadeForm.value;
    const operation = !!this.id ? this.distanciaCidadeService.update(this.id, distanciaCidade) : this.distanciaCidadeService.save(distanciaCidade);
    const successMessage = !!this.id ? 'Distância entre Cidades atualizada com sucesso' : 'Distância entre Cidades salva com sucesso.';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/distanciaCidade']);
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
