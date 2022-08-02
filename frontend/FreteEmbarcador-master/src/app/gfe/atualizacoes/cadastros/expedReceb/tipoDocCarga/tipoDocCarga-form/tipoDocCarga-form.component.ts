import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption  } from '@po-ui/ng-components';

import { TipoDocCarga } from '../tipoDocCarga.interface';
import { TipoDocCargaService } from '../tipoDocCarga.service';

@Component({
  selector: 'app-tipoDocCarga-form',
  templateUrl: './tipoDocCarga-form.component.html',
  styleUrls: ['./tipoDocCarga-form.component.css']
})
export class TipoDocCargaFormComponent implements OnInit {

  title = 'INCLUIR - Tipo de Documento de Carga';
  tipoDocCargaForm: FormGroup;
  isTableLoading = false;

  tpTransp: string = '1 - Normal';
  sentido: string = '0 - Indiferente';
  tpContab: string = '1 - Despesa';
  enviaEdiNfe: string = '2 - Não';
  situacao: string = '1 - Ativo';
  calculoFret: string = '1 - Manual';
  emitePreFat: string = '1 - Sim';
  dataEntAut: string = '0 - Data Informada';

  private id;

  readonly tpTranspOpt: Array<PoSelectOption> = [
    { label: '1 - Normal', value: '1 - Normal' },
    { label: '2 - Retorno', value: '2 - Retorno' },
    { label: '3 - Serviço', value: '3 - Serviço' },
    { label: '4 - Nenhum', value: '4 - Nenhum' }
  ];
  readonly sentidoOpt: Array<PoSelectOption> = [
    { label: '0 - Indiferente', value: '0 - Indiferente' },
    { label: '1 - Entrada', value: '1 - Entrada' },
    { label: '2 - Saída', value: '2 - Saída' },
    { label: '3 - Externo', value: '3 - Externo' },
    { label: '4 - Interno', value: '4 - Interno' }
  ];
  readonly tpContabOpt: Array<PoSelectOption> = [
    { label: '1 - Despesa', value: '1 - Despesa' },
    { label: '2 - Custo', value: '2 - Custo' },
    { label: '3 - Nenhum', value: '3 - Nenhum' },
    { label: '4 - Uso Doc Carga', value: '4 - Uso Doc Carga' }
  ];
  readonly enviaEdiNfeOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly situacaoOpt: Array<PoSelectOption> = [
    { label: '1 - Ativo', value: '1 - Ativo' },
    { label: '2 - Inativo', value: '2 - Inativo' }
  ];
  readonly calculoFretOpt: Array<PoSelectOption> = [
    { label: '1 - Manual', value: '1 - Manual' },
    { label: '2 - Automático', value: '2 - Automático' }
  ];
  readonly emitePreFatOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly dataEntAutOpt: Array<PoSelectOption> = [
    { label: '0 - Data Informada', value: '0 - Data Informada' },
    { label: '1 - Data Criação Doc Carga', value: '1 - Data Criação Doc Carga' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private tipoDocCargaService: TipoDocCargaService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.tipoDocCargaForm = this.fb.group({ filial: [''],
                                            tipo: ['', Validators.required],
                                            descricao: ['', Validators.required],
                                            tpTransp: [''],
                                            sentido: [''],
                                            tpContab: [''],
                                            enviaEdiNfe: [''],
                                            situacao: [''],
                                            calculoFret: [''],
                                            emitePreFat: [''],
                                            dataEntAut: ['']
                                          });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.tipoDocCargaService.get(id).subscribe((tpDocCarga: TipoDocCarga) => {
        this.tipoDocCargaForm.patchValue(tpDocCarga);
        this.title = "ALTERAR - Tipo de Documento de Carga";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.tipoDocCargaForm.invalid) {
      this.markAsDirtyInvalidControls(this.tipoDocCargaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const tipoDocCarga = this.tipoDocCargaForm.value;

    const operation = !!this.id ? this.tipoDocCargaService.update(this.id, tipoDocCarga) : this.tipoDocCargaService.save(tipoDocCarga);

    const successMessage = !!this.id ? 'Tipo de Documento de Carga atualizado com sucesso' : 'Tipo de Documento de Carga salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/tipoDocCarga']);
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
