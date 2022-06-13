import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { ParametroService } from '../parametro.service';
import { Parametro } from '../parametro.interface';

@Component({
  selector: 'app-parametro-form',
  templateUrl: './parametro-form.component.html',
  providers: [ParametroService],
  styleUrls: ['./parametro-form.component.css']
})
export class ParametroFormComponent implements OnInit {

  title = 'Novo parâmetro';
  parametroForm: FormGroup;

  private id;

  constructor(  private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private notification: PoNotificationService,
                private router: Router,
                public parametroService: ParametroService ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.id = id
  }

  ngOnInit() {
    this.parametroForm = this.fb.group({ filial: [''],
                                         parametro: ['', Validators.required],
                                         conteudo: ['', Validators.required],
                                         descricao: ['', Validators.required]
                                      });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.parametroService.get(id).subscribe((parametro: Parametro) => {
        this.parametroForm.patchValue(parametro);
        this.title = parametro.parametro;
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.parametroForm.invalid) {
      this.markAsDirtyInvalidControls(this.parametroForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const parametro = this.parametroForm.value;
    const operation = !!this.id ? this.parametroService.update(this.id, parametro) : this.parametroService.save(parametro);
    const successMessage = !!this.id ? 'Registro de tabela de parâmetros atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/parametros']);
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
