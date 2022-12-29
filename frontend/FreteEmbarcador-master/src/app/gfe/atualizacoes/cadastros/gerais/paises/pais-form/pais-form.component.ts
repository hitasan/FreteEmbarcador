import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoLookupColumn, PoDynamicFormField, PoSelectOption } from '@po-ui/ng-components';

import { Pais } from '../pais.interface';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.css']
})
export class PaisFormComponent implements OnInit {

  title = 'INCLUIR - País';
  codigo: string;
  nome: string = '';
  sigla: string = '';
  idioma: string = '';
  descIdioma: string = '';
  dinalad: string = '';
  paisIngles: string = '';
  nacionalidad: string = '';
  codERP: string = '';
  codPaisDUE: string = '';
  naladi: string = '2 - Não';
  certOrigemAladi: string = '2 - Não';
  certOrigemComum: string = '2 - Não';
  certOrigemMercosul: string = '2 - Não';
  certOrigemSGPC: string = '2 - Não';
  exigeLicImport: string = '2 - Não';
  paisForm: FormGroup;

  private id;

  readonly naladiOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly certOriAladiOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly certOriComumOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly certMercosulOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly certSGPCOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];
  readonly exigeLIOpt: Array<PoSelectOption> = [
    { label: '1 - Sim', value: '1 - Sim' },
    { label: '2 - Não', value: '2 - Não' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public paisService: PaisesService) { const { id } = this.activatedRoute.snapshot.params;
                                         this.id = id }

  ngOnInit() {
    this.paisForm = this.fb.group({ filial: [''],
                                    codigo: ['', Validators.required],
                                    nome: ['', Validators.required],
                                    sigla: [''],
                                    idioma: ['', Validators.required],
                                    descIdioma: ['', Validators.required],
                                    dinalad: [''],
                                    naladi: ['', Validators.required],
                                    certOrigemAladi: [''],
                                    certOrigemComum: [''],
                                    certOrigemMercosul: [''],
                                    certOrigemSGPC: [''],
                                    exigeLicImport: [''],
                                    paisIngles: ['', Validators.required],
                                    codAbics: [''],
                                    codigoRIEX: [''],
                                    codSisxomex: [''],
                                    codigoFiesp: [''],
                                    claveMexico: [''],
                                    nacionalidad: [''],
                                    codERP: [''],
                                    codPaisDUE: ['']
                                  });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.paisService.get(id).subscribe((pais: Pais) => {
        this.paisForm.patchValue(pais);
        this.title = "ALTERAR - País";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.paisForm.invalid) {
      this.markAsDirtyInvalidControls(this.paisForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const pais = this.paisForm.value;
    const operation = !!this.id ? this.paisService.update(this.id, pais) : this.paisService.save(pais);
    const successMessage = !!this.id ? 'País atualizado com sucesso' : 'País salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/paises']);
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


  changeOptions(event): void {
    this.paisService.getIdioma(event).subscribe(
      result => { this.descIdioma = result; this.notification.success(result)},
      err => {this.notification.success(err); console.error(err)}
    );
  }
}
