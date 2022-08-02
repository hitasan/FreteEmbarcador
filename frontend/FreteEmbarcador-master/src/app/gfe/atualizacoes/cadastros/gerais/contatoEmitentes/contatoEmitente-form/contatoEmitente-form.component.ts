import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoLookupColumn, PoDynamicFormField } from '@po-ui/ng-components';

import { ContatoEmitenteService } from '../contatoEmitente.service';
import { ContatoEmitente } from '../contatoEmitente.interface';

@Component({
  selector: 'app-contatoEmitente-form',
  templateUrl: './contatoEmitente-form.component.html',
  styleUrls: ['./contatoEmitente-form.component.css']
})
export class ContatoEmitenteFormComponent implements OnInit {

  title = 'Novo país FORM';
  contatoEmitenteForm: FormGroup;

  private id;

  constructor( private activatedRoute: ActivatedRoute,
               private fb: FormBuilder,
               private notification: PoNotificationService,
               private router: Router,
               public contatoEmitenteService: ContatoEmitenteService) { const { id } = this.activatedRoute.snapshot.params;
                                                                        this.id = id }

  ngOnInit() {
    this.contatoEmitenteForm = this.fb.group({ codEmitente: ['', Validators.required],
                                               sequencia: ['', Validators.required],
                                               situacao: ['', Validators.required],
                                               nome: ['', Validators.required],
                                               apelido: [''],
                                               setor: [''],
                                               funcao: [''],
                                               email: [''],
                                               fone1: [''],
                                               ramal1: [''],
                                               fone2: [''],
                                               ramal2: [''],
                                               fax: [''],
                                               ramalFax: [''],
                                               recebePreFat: [''],
                                               observecoes: [''],
                                               recebeXmlNFe: [''],
                                               recebeRef: [''],
                                               recebeCotacao: [''],
                                               recebeAgendam: [''],
                                               recebeContrato: ['']
                                            });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.contatoEmitenteService.get(id).subscribe((contatoEmitente: ContatoEmitente) => {
        this.contatoEmitenteForm.patchValue(contatoEmitente);
        this.title = "pais.nome FORM";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.contatoEmitenteForm.invalid) {
      this.markAsDirtyInvalidControls(this.contatoEmitenteForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const contatoEmitente = this.contatoEmitenteForm.value;
    const operation = !!this.id ? this.contatoEmitenteService.update(this.id, contatoEmitente) : this.contatoEmitenteService.save(contatoEmitente);
    const successMessage = !!this.id ? 'Contato atualizado com sucesso' : 'Contato salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/contatoEmitente']);
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
