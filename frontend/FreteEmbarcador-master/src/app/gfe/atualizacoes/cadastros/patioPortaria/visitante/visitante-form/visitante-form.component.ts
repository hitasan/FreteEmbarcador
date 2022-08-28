import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat  } from '@po-ui/ng-components';

import { Visitante } from '../visitante.interface';
import { VisitanteService } from '../visitante.service';

@Component({
  selector: 'app-visitante-form',
  templateUrl: './visitante-form.component.html',
  styleUrls: ['./visitante-form.component.css']
})
export class VisitanteFormComponent implements OnInit {

  title = 'INCLUIR - Visitantes';
  visitanteForm: FormGroup;
  isTableLoading = false;

  filial: string = '';
  visitante: string = '';
	nome: string = '';
	apelido: string = '';
	dataImplant: string | Date = new Date();
	cpf: string = '';
	rgVisitante: string = '';
	orgaoExped: string = '';
	funcionario: string = '2 - Não';
	endereco: string = '';
	bairro: string = '';
	cep: string = '';
	nrCidade: string = '';
	fone: string = '';
	observacao: string = '';
	nmCidade: string = '';
	uf: string = '';

  private id;

  readonly funcionarioOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private visitanteService: VisitanteService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.visitanteForm = this.fb.group({filial: [''],
                                        visitante: [''],
                                        nome: ['', Validators.required],
                                        cpf: ['', Validators.required],
                                        funcionario: ['', Validators.required],
                                        dataImplant: [''],
                                        rgVisitante: [''],
                                        orgaoExped: [''],
                                        endereco: [''],
                                        bairro: [''],
                                        cep: [''],
                                        nrCidade: [''],
                                        fone: [''],
                                        observacao: [''],
                                        nmCidade: [''],
                                        uf: ['']
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.visitanteService.get(id).subscribe((visitante: Visitante) => {
        this.visitanteForm.patchValue(visitante);
        this.title = "ALTERAR - Visitantes";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.visitanteForm.invalid) {
      this.markAsDirtyInvalidControls(this.visitanteForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const visitante = this.visitanteForm.value;
    const operation = !!this.id ? this.visitanteService.update(this.id, visitante) : this.visitanteService.save(visitante);
    const successMessage = !!this.id ? 'Visitante atualizado com sucesso' : 'Visitante salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/visitante']);
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
