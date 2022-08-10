import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat  } from '@po-ui/ng-components';

import { TipoOperacao } from '../tipoOperacao.interface';
import { TipoOperacaoService } from '../tipoOperacao.service';

@Component({
  selector: 'app-tipoOperacao-form',
  templateUrl: './tipoOperacao-form.component.html',
  styleUrls: ['./tipoOperacao-form.component.css']
})
export class TipoOperacaoFormComponent implements OnInit {

  title = 'INCLUIR - Tipo de Operação';
  tipoOperacaoForm: FormGroup;
  isTableLoading = false;

  filial: string = '';
	tipoOper: string = '';
	descricao: string = '';
	sentido: string = '0 - Todos';
	situacao: string = '1 - Ativo';
	libRomAut: string = '0 - Data Informada';
	valePedagio: string = '1 - Não se aplica';

  private id;

  readonly sentidoOpt: Array<PoSelectOption> = [
    { label: '0 - Todos', value: '0 - Todos' },
    { label: '1 - Entrada', value: '1 - Entrada' },
    { label: '2 - Saida', value: '2 - Saida' },
    { label: '3 - Externo', value: '3 - Externo' },
    { label: '4 - Interno', value: '4 - Interno' }
  ];
  readonly situacaoOpt: Array<PoSelectOption> = [
    { label: '1 - Ativo', value: '1 - Ativo' },
    { label: '2 - Inativo', value: '2 - Inativo' }
  ];
  readonly libRomAutOpt: Array<PoSelectOption> = [
    { label: '0 - Data Informada', value: '0 - Data Informada' },
    { label: '1 - Data Emissão Doc. Carga', value: '2 - Data Emissao Doc. Carga' }
  ];
  readonly valePedagioOpt: Array<PoSelectOption> = [
    { label: '1 - Não se aplica', value: '1 - Não se aplica' },
    { label: '2 - Opcional', value: '2 - Opcional' },
    { label: '3 - Obrigatório', value: '3 - Obrigatório' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private tipoOperacaoService: TipoOperacaoService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.tipoOperacaoForm = this.fb.group({ filial: [''],
                                            tipoOper: ['', Validators.required],
                                            descricao: ['', Validators.required],
                                            sentido: ['', Validators.required],
                                            situacao: ['', Validators.required],
                                            libRomAut: [''],
                                            valePedagio: [''],
                                          });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.tipoOperacaoService.get(id).subscribe((tipoOperacao: TipoOperacao) => {
        this.tipoOperacaoForm.patchValue(tipoOperacao);
        this.title = "ALTERAR - Tipo de Operação";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.tipoOperacaoForm.invalid) {
      this.markAsDirtyInvalidControls(this.tipoOperacaoForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const tipoOperacao = this.tipoOperacaoForm.value;
    const operation = !!this.id ? this.tipoOperacaoService.update(this.id, tipoOperacao) : this.tipoOperacaoService.save(tipoOperacao);
    const successMessage = !!this.id ? 'Tipo de Operação atualizado com sucesso' : 'Tipo de Operação salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/tipoOperacao']);
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
