import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat  } from '@po-ui/ng-components';

import { Veiculo } from '../veiculo.interface';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-form',
  templateUrl: './veiculo-form.component.html',
  styleUrls: ['./veiculo-form.component.css']
})
export class VeiculoFormComponent implements OnInit {

  title = 'INCLUIR - Veículos';
  veiculoForm: FormGroup;
  isTableLoading = false;

  filial: string = '';
	codigo: string = '';
	tipo: string = '';
	placa: string = '';
	ufPlaca: string = '';
	proprietario: string = '';
	nomePropr: string = '';
	tpPropri: string = '2 - Próprio';
	tipoAcesso: string = '1 - Sem restrições';
	situacao: string = '1 - Ativo';
	descSituacao: string = 'CADASTRO';
	dataCadastro: string | Date = new Date();
	dataSituacao: string | Date = new Date();
	altura: number = 0;
	largura: number = 0;
	comprimento: number = 0;
	volume: number = 0;
	tara: number = 0;
	carga: number = 0;
	pesoBrutoTotal: number = 0;
	observacoes: string = '';
	marcaModelo: string = '';
	anoFabric: string = '';
	renavam: string = '';
	hodometro: number = 0;
	dataHodometro: string | Date = new Date();
	nrCIV: string = '';
	nrCIPP: number = 0;
	tipoOperacao: string = '';

  private id;

  readonly tipoProprOpt: Array<PoSelectOption> = [
    { label: '1 - Terceiro', value: '1 - Terceiro' },
    { label: '2 - Próprio', value: '2 - Próprio' },
    { label: '3 - Alugado', value: '3 - Alugado' },
    { label: '4 - Outros', value: '4 - Outros' }
  ];
  readonly tipoAcessoOpt: Array<PoSelectOption> = [
    { label: '1 - Sem restrições', value: '1 - Sem restrições' },
    { label: '2 - Sob permissão', value: '2 - Sob permissão' },
    { label: '3 - Suspenso', value: '3 - Suspenso' },
    { label: '4 - Não permitido', value: '4 - Não permitido' }
  ];
  readonly situacaoOpt: Array<PoSelectOption> = [
    { label: '1 - Ativo', value: '1 - Ativo' },
    { label: '2 - Inativo', value: '2 - Inativo' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private veiculoService: VeiculoService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.veiculoForm = this.fb.group({  filial: [''],
                                        codigo: ['', Validators.required],
                                        tipo: ['', Validators.required],
                                        placa: ['', Validators.required],
                                        ufPlaca: [''],
                                        proprietario: [''],
                                        nomePropr: [''],
                                        tpPropri: [''],
                                        tipoAcesso: [''],
                                        situacao: [''],
                                        descSituacao: [''],
                                        dataCadastro: [''],
                                        dataSituacao: [''],
                                        altura: [0],
                                        largura: [0],
                                        comprimento: [0],
                                        volume: [0],
                                        tara: [0],
                                        carga: [0],
                                        pesoBrutoTotal: [0],
                                        observacoes: [''],
                                        marcaModelo: [''],
                                        anoFabric: [''],
                                        renavam: [''],
                                        hodometro: [0],
                                        dataHodometro: [''],
                                        nrCIV: [''],
                                        nrCIPP: [0],
                                        tipoOperacao: ['']
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.veiculoService.get(id).subscribe((veiculo: Veiculo) => {
        this.veiculoForm.patchValue(veiculo);
        this.title = "ALTERAR - Veículos";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.veiculoForm.invalid) {
      this.markAsDirtyInvalidControls(this.veiculoForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const veiculo = this.veiculoForm.value;

    const operation = !!this.id ? this.veiculoService.update(this.id, veiculo) : this.veiculoService.save(veiculo);

    const successMessage = !!this.id ? 'Veículo atualizado com sucesso' : 'Veículo salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/veiculo']);
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
