import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField, PoDatepickerIsoFormat, PoTableColumn  } from '@po-ui/ng-components';

import { PracaPedagio } from '../pracaPedagio.interface';
import { PracaPedagioService } from '../pracaPedagio.service';

@Component({
  selector: 'app-pracaPedagio-form',
  templateUrl: './pracaPedagio-form.component.html',
  styleUrls: ['./pracaPedagio-form.component.css']
})
export class PracaPedagioFormComponent implements OnInit {

  filial: string = '';
	praca: string = '';
	descricao: string = '';
	situacao: string = '2 - Ativo';
	rodovia: string = '';
	concessiona: string = '';
  pracaPedagio: Array<PracaPedagio>;
  pracaTarifa: Array<any>;
  pracaRota: Array<any>;

  title = 'INCLUIR - Praça de Pedágio';
  pracaPedagioForm: FormGroup;
  isTableLoading = false;

  private id;

  readonly situacaoOpt: Array<PoSelectOption> = [
    { label: '1 - Inativo', value: '1 - Inativo' },
    { label: '2 - Ativo', value: '2 - Ativo' }
  ];

  readonly colxtar: Array<PoTableColumn> = [
    { label: 'Data vig. ini'  , property: 'dtVigIni', width: '5%' },
    { label: 'Cat. Pedágio'   , property: 'catPed', width: '10%' },
    { label: 'Desc. Cat. Ped.', property: 'descCatPed' },
    { label: 'Valor'          , property: 'valor', width: '10%' }
  ];
  readonly colxrota: Array<PoTableColumn> = [
    { label: 'Cidade Origem'    , property: 'cidOrigem', width: '10%' },
    { label: 'Nome Origem'      , property: 'nomeOrigem' },
    { label: 'UF Origem'        , property: 'ufOrigem', width: '5%' },
    { label: 'Cidade Destino'   , property: 'cidDestino', width: '10%' },
    { label: 'Nome Destino'     , property: 'nomeDestino' },
    { label: 'UF Destino'       , property: 'ufDestino', width: '5%' },
    { label: 'Região Origem'    , property: 'regOrigem', width: '5%' },
    { label: 'Nome Reg. Origem' , property: 'nomeRegOrigem' },
    { label: 'Região Destino'   , property: 'regDestino', width: '5%' },
    { label: 'Nome Reg. Destino', property: 'nomeRegDestino' }
  ];

  constructor( private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private pracaPedagioService: PracaPedagioService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
    }

    ngOnInit() {
    this.pracaPedagioForm = this.fb.group({ filial: [''],
                                            praca: ['', Validators.required],
                                            descricao: ['', Validators.required],
                                            situacao: ['', Validators.required],
                                            rodovia: [''],
                                            concessiona: ['']
                                          });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.pracaPedagioService.get(id).subscribe((pracaPedagio: PracaPedagio) => {
        this.pracaPedagioForm.patchValue(pracaPedagio);
        //this.pracaTarifa = Array<pracaPedagio.pracaTarifa>;
        //this.pracaRota = pracaPedagio.pracaRota;
        this.title = "ALTERAR - Praça de Pedágio";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.pracaPedagioForm.invalid) {
      this.markAsDirtyInvalidControls(this.pracaPedagioForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const pracaPedagio = this.pracaPedagioForm.value;
    const operation = !!this.id ? this.pracaPedagioService.update(this.id, pracaPedagio) : this.pracaPedagioService.save(pracaPedagio);
    const successMessage = !!this.id ? 'Praça de Pedágio atualizado com sucesso' : 'Praça de Pedágio salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/pracaPedagio']);
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
