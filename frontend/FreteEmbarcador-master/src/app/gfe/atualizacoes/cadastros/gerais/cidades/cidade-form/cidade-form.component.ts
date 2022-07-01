import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoLookupColumn, PoDynamicFormField, PoTableColumn } from '@po-ui/ng-components';

import { CidadesService } from '../cidades.service';
import { Cidade } from '../cidade.interface';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {

  title = 'Cidade - INCLUIR';
  cidadeForm: FormGroup;

  percISSTpOcorr: Array<any>;
  isTableLoading = false;

  private id;

  readonly columnsTbl: Array<PoTableColumn> = [
    { label: 'Tp Ocorrência', property: 'tpOcor', width: '10%' },
    { label: 'Dsc Tp Oco', property: 'descrTpOco' },
    { label: '% ISS', property: 'percISS', type: 'number', width: '20%' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private cidadeService: CidadesService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    //this.isTableLoading = true;
    this.cidadeForm = this.fb.group({ cidade: ['', Validators.required],
                                      nome: ['', Validators.required],
                                      estado: ['', Validators.required],
                                      pais: ['', Validators.required],
                                      sigla: ['', Validators.required],
                                      suframa: [''],
                                      cepInicial: [''],
                                      cepFinal: [''],
                                      percISSFrete: [0],
                                      situacao: [''],
                                      regiaoRelat: ['']
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.cidadeService.get(id).subscribe((cidade: Cidade) => {
        this.cidadeForm.patchValue(cidade);

        this.title = "TESTANDO CADASTRO CIDADES";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.cidadeForm.invalid) {
      this.markAsDirtyInvalidControls(this.cidadeForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const cidade = this.cidadeForm.value;

    const operation = !!this.id ? this.cidadeService.update(this.id, cidade) : this.cidadeService.save(cidade);

    const successMessage = !!this.id ? 'Cidade atualizada com sucesso' : 'Cidade salva com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/cidades']);
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
