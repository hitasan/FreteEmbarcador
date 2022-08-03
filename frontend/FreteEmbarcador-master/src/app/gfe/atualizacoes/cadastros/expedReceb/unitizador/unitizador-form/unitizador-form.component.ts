import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption  } from '@po-ui/ng-components';

import { Unitizador } from '../unitizador.interface';
import { UnitizadorService } from '../unitizador.service';

@Component({
  selector: 'app-unitizador-form',
  templateUrl: './unitizador-form.component.html',
  styleUrls: ['./unitizador-form.component.css']
})
export class UnitizadorFormComponent implements OnInit {

  title = 'INCLUIR - Unitizadores';
  unitizadorForm: FormGroup;
  isTableLoading = false;

  tara: number = 0.000;
  volume: number = 0.000;
  volOcupado: number = 0.000;
  situacao: string = '1 - Ativo';
  identUnitiz: string = '1 - Nao Informada';
  finalidade: string = '1 - Faturamento/NF';

  private id;

  readonly situacaoOpt: Array<PoSelectOption> = [
    { label: '1 - Ativo', value: '1 - Ativo' },
    { label: '2 - Inativo', value: '2 - Inativo' }
  ];
  readonly identUnitizOpt: Array<PoSelectOption> = [
    { label: '1 - Nao Informada', value: '1 - Nao Informada' },
    { label: '2 - Opcional', value: '2 - Opcional' },
    { label: '3 - Obrigatoria', value: '3 - Obrigatoria' }
  ];
  readonly finalidadeOpt: Array<PoSelectOption> = [
    { label: '1 - Faturamento/NF', value: '1 - Faturamento/NF' },
    { label: '2 - Patios e Portaria', value: '2 - Patios e Portaria' },
    { label: '3 - Ambos', value: '3 - Ambos' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private unitizadorService: UnitizadorService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.unitizadorForm = this.fb.group({ unitizador: ['', Validators.required],
                                          descricao: ['', Validators.required],
                                          tara: [''],
                                          volume: [0],
                                          volOcupado: [0],
                                          situacao: ['', Validators.required],
                                          identUnitiz: [''],
                                          finalidade: ['']
                                        });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.unitizadorService.get(id).subscribe((unitizador: Unitizador) => {
        this.unitizadorForm.patchValue(unitizador);
        this.title = "ALTERAR - Unitizadores";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.unitizadorForm.invalid) {
      this.markAsDirtyInvalidControls(this.unitizadorForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const unitizador = this.unitizadorForm.value;

    const operation = !!this.id ? this.unitizadorService.update(this.id, unitizador) : this.unitizadorService.save(unitizador);

    const successMessage = !!this.id ? 'Unitizador atualizado com sucesso' : 'Unitizador salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/unitizador']);
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
}
