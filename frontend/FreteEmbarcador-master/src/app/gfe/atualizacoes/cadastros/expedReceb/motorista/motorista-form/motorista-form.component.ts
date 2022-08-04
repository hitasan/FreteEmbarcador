import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat  } from '@po-ui/ng-components';

import { Motorista } from '../motorista.interface';
import { MotoristaService } from '../motorista.service';

@Component({
  selector: 'app-motorista-form',
  templateUrl: './motorista-form.component.html',
  styleUrls: ['./motorista-form.component.css']
})
export class MotoristaFormComponent implements OnInit {

  title = 'INCLUIR - Motorista / Ajudante';
  motoristaForm: FormGroup;
  isTableLoading = false;

  codMotAjud: string = '';
	nome: string = '';
	apelido: string = '';
	tipo: string = '1 - Motorista';
	cpf: string = '';
	rg: string = '';
	expedidor: string = '';
	transportador: string = '';
	nomeTrp: string = '';
	sitMotAjud: string = '1 - Ativo';
	dtSituacao: string | Date;
	motSituacao: string = 'CADASTRAL';
	observacoes: string = '';
	nrCnh: string = '';
	regCnh: string = '';
	dtExpedCnh: string | Date;
	dtVenctCnh: string | Date;
	municipioCnh: string = '';
	estadoCnh: string = '';
	catCnh: string = '';
	mopp: string = '2 - Não';

  private id;

  readonly tipoOpt: Array<PoSelectOption> = [
    { label: '1 - Motorista', value: '1 - Motorista' },
    { label: '2 - Ajudante', value: '2 - Ajudante' }
  ];
  readonly situacaoOpt: Array<PoSelectOption> = [
    { label: '1 - Ativo', value: '1 - Ativo' },
    { label: '2 - Inativo', value: '2 - Inativo' },
    { label: '3 - Entr. Proib.', value: '3 - Entr. Proib.' }
  ];
  readonly moppOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private motoristaService: MotoristaService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.motoristaForm = this.fb.group({filial: [''],
                                        codMotAjud: ['', Validators.required],
                                        nome: ['', Validators.required],
                                        apelido: [''],
                                        tipo: ['', Validators.required],
                                        cpf: ['', Validators.required],
                                        rg: [''],
                                        expedidor: [''],
                                        transportador: [''],
                                        sitMotAjud: ['', Validators.required],
                                        dtSituacao: [''],
                                        motSituacao: [''],
                                        observacoes: [''],
                                        nrCnh: [''],
                                        regCnh: [''],
                                        dtExpedCnh: [''],
                                        dtVenctCnh: [''],
                                        municipioCnh: [''],
                                        estadoCnh: [''],
                                        catCnh: [''],
                                        mopp: ['']
                                        });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.motoristaService.get(id).subscribe((motorista: Motorista) => {
        this.motoristaForm.patchValue(motorista);
        this.title = "ALTERAR - Motorista / Ajudante";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.motoristaForm.invalid) {
      this.markAsDirtyInvalidControls(this.motoristaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const motorista = this.motoristaForm.value;

    const operation = !!this.id ? this.motoristaService.update(this.id, motorista) : this.motoristaService.save(motorista);

    const successMessage = !!this.id ? 'Motorista/Ajudante atualizado com sucesso' : 'Motorista/Ajudante salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/motorista']);
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
