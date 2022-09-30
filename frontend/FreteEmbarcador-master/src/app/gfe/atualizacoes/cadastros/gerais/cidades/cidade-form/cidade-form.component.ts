import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { PoNotificationService, PoTableColumn, PoSelectOption, PoDialogService, PoTableAction } from '@po-ui/ng-components';

import { CidadesService } from '../cidades.service';
import { Cidade } from '../cidade.interface';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {
  @ViewChild('buttonClick', { read: ElementRef, static: true }) buttonClickRef: ElementRef;

  cidadeForm: FormGroup;
  title = 'Cidade - INCLUIR';
  pais: string;
  nomePais: string;
  cidade: string;
  nome: string;
  estado: string;
  sigla: string;
  suframa: string = '2 - Não';
  percISSFrete: number;
  cepInicial: string;
  cepFinal: string;
  situacao: string = '1 - Ativo';

  isTableLoading = false;

  private id;

  readonly columnsTbl: Array<PoTableColumn> = [
    { label: 'Tp Ocorrência', property: 'tpOcor', width: '20%' },
    { label: 'Dsc Tp Oco', property: 'descrTpOco' },
    { label: '% ISS', property: 'percISS', type: 'number', width: '20%' }
  ];

  readonly suframaOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
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
    private dialog: PoDialogService,
    private cidadeService: CidadesService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
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

    this.percIssForm = this.fb.group({ tpOcor: ['', Validators.required],
                                       descOcor: [''],
                                       VlrPISS: ['', Validators.required]
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.cidadeService.get(id).subscribe((cidade: Cidade) => {
        this.cidadeForm.patchValue(cidade);
        this.percIssForm.patchValue(cidade.percIss);
        this.isTableLoading = false;
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

  //------------------------------------------------------------------------
  //GRID
  //------------------------------------------------------------------------
  position: string = 'right-top';
  properties: Array<string> = [];

  percISSTpOcorr: Array<any>;

  percIssForm: FormGroup;
  tpOcor: string;
  descOcor: string;
  percISS: number = 0.0;

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Editar' , separator: true, type: 'default', icon: 'po-icon-edit'/*, action: removeGrid.bind(this)*/},
    { label: 'Remover', separator: true, type: 'danger' , icon: 'po-icon-delete'/*, action: removeGrid.bind(this)*/ }
  ];

  addGrid() {
    if (this.percIssForm.invalid) {
      this.markAsDirtyInvalidControls(this.percIssForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    // REGRA PARA ADICIONAR NO GRID
  }

  removeGrid({ id }: Cidade) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover esta cidade?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;
    // REGRA PARA REMOVER DO GRID
  }
}
