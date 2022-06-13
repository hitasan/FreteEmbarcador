import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { UnidadeNegocioService } from '../unidadenegocio.service';
import { UnidadeNegocio } from '../unidadenegocio.interface';

@Component({
  selector: 'app-unidadenegocio-form',
  templateUrl: './unidadenegocio-form.component.html',
  styleUrls: ['./unidadenegocio-form.component.css']
})
export class UnidadeNegocioFormComponent implements OnInit {

  title = 'Nova Unidade de Negocio';
  unidadenegocioForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public unidadenegocioService: UnidadeNegocioService) { const { id } = this.activatedRoute.snapshot.params;
                                                           this.id = id }

  ngOnInit() {
    this.unidadenegocioForm = this.fb.group({ codigo: ['', Validators.required],
                                              descricao: ['', Validators.required]
                                            });
    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.unidadenegocioService.get(id).subscribe((unidadenegocio: UnidadeNegocio) => {
        this.unidadenegocioForm.patchValue(unidadenegocio);
        this.title = "Alteração";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.unidadenegocioForm.invalid) {
      this.markAsDirtyInvalidControls(this.unidadenegocioForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const unidadenegocio = this.unidadenegocioForm.value;
    const operation = !!this.id ? this.unidadenegocioService.update(this.id, unidadenegocio) : this.unidadenegocioService.save(unidadenegocio);
    const successMessage = !!this.id ? 'Registro de unidade de negocio atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/unidadenegocios']);
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
