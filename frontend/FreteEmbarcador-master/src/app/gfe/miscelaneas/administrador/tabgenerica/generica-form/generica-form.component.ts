import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoFieldModule, PoNotificationService, PoLookupColumn, PoDynamicFormField } from '@po-ui/ng-components';

import { GenericaService } from '../generica.service';
import { Generica } from '../generica.interface';

@Component({
  selector: 'app-generica-form',
  templateUrl: './generica-form.component.html',
  //providers: [GenericaService],
  styleUrls: ['./generica-form.component.css']
})
export class GenericaFormComponent implements OnInit {

  title = 'Novo registro - Tabela Generica';
  idioma: string;
  codPaisDUE: string;
  genericaForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public genericaService: GenericaService) { const { id } = this.activatedRoute.snapshot.params;
                                               this.id = id }

  ngOnInit() {
    this.genericaForm = this.fb.group({ filial: [''],
                                        tabela: ['', Validators.required],
                                        chave: ['', Validators.required],
                                        descricao: ['', Validators.required]
                                      });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.genericaService.get(id).subscribe((generica: Generica) => {
        this.genericaForm.patchValue(generica);
        this.title = generica.tabela;
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.genericaForm.invalid) {
      this.markAsDirtyInvalidControls(this.genericaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const generica = this.genericaForm.value;
    const operation = !!this.id ? this.genericaService.update(this.id, generica) : this.genericaService.save(generica);
    const successMessage = !!this.id ? 'Registro de tabela generica atualizado com sucesso' : 'Registro de tabela generica salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/genericas']);
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
