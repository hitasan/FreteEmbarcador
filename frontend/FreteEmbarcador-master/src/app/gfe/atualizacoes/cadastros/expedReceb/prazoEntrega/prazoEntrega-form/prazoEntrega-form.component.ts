import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat  } from '@po-ui/ng-components';

import { PrazoEntrega } from '../prazoEntrega.interface';
import { PrazoEntregaService } from '../prazoEntrega.service';

@Component({
  selector: 'app-prazoEntrega-form',
  templateUrl: './prazoEntrega-form.component.html',
  styleUrls: ['./prazoEntrega-form.component.css']
})
export class PrazoEntregaFormComponent implements OnInit {

  title = 'INCLUIR - Prazo de Entrega';
  prazoEntregaForm: FormGroup;
  isTableLoading = false;

  filial: string = '';
  codTabela: string = '';
	tipoTabela: string = '1 - Prazo';
	idaVolta: string = '2 - Não';
	iniValidade: string | Date;
	fimValidade: string | Date;
	cidOrigem: string = '';
	regOrigem: string = '';
	remetente: string = '';
	cidDest: string = '';
	regDest: string = '';
	destinatario: string = '';
	tipoOper: string = '';
	tipoVeiculo: string = '';
	codGrupo: string = '';
	transportador: string = '';
	modal: string = '1 - Indiferente';
	tipoPrazo: string = '0 - Dias Uteis';
	prazo: number = 0;
	prioridade: number = 0;
	classifFrete: string = '';
  rotaOrigem: string = '';
  rotaDestino: string = '';
  descTpOper: string = '';
  descTpVeic: string = '';
  descGrupo: string = '';
  descTransp: string = '';
  descClass: string = '';
	//dataInclusao: string | Date = new Date();
	//userAlterar: string = '';
	//dataAlteracao: string | Date = new Date();

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
    private prazoEntregaService: PrazoEntregaService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.prazoEntregaForm = this.fb.group({ filial: [''],
                                            codTabela: ['', Validators.required],
                                            tipoTabela: ['', Validators.required],
                                            iniValidade: ['', Validators.required],
                                            fimValidade: ['', Validators.required],
                                            idaVolta: [''],
                                            cidOrigem: [''],
                                            regOrigem: [''],
                                            remetente: [''],
                                            cidDest: [''],
                                            regDest: [''],
                                            destinatario: [''],
                                            tipoOper: [''],
                                            tipoVeiculo: [''],
                                            codGrupo: [''],
                                            transportador: [''],
                                            modal: [''],
                                            tipoPrazo: [''],
                                            prazo: [''],
                                            prioridade: [''],
                                            classifFrete: [''],
                                            rotaOrigem: [''],
                                            rotaDestino: [''],
                                            descTpOper: [''],
                                            descTpVeic: [''],
                                            descGrupo: [''],
                                            descTransp: [''],
                                            descClass: ['']
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.prazoEntregaService.get(id).subscribe((prazoEntrega: PrazoEntrega) => {
        this.prazoEntregaForm.patchValue(prazoEntrega);
        this.title = "ALTERAR - Prazos de Entrega";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.prazoEntregaForm.invalid) {
      this.markAsDirtyInvalidControls(this.prazoEntregaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const prazoEntrega = this.prazoEntregaForm.value;
    const operation = !!this.id ? this.prazoEntregaService.update(this.id, prazoEntrega) : this.prazoEntregaService.save(prazoEntrega);
    const successMessage = !!this.id ? 'Prazo de Entrega atualizado com sucesso' : 'Prazo de Entrega salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/prazoEntrega']);
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
