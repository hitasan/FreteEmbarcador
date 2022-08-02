import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { GrupoEmitenteService } from '../grupoEmitentes.service';
import { GrupoEmitente } from '../grupoEmitentes.interface';

@Component({
  selector: 'app-grupoEmitentes-form',
  templateUrl: './grupoEmitentes-form.component.html',
  styleUrls: ['./grupoEmitentes-form.component.css']
})
export class GrupoEmitenteFormComponent implements OnInit {

  title = 'Incluir';
  grupoEmitentesForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private grupoEmitentesService: GrupoEmitenteService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.grupoEmitentesForm = this.fb.group({ grupo: ['', Validators.required],
                                              descricao: ['', Validators.required],
                                              situacao: ['', Validators.required],
                                              finalidade: ['', Validators.required],
                                              origem: ['', Validators.required]
                                            });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.grupoEmitentesService.get(id).subscribe((grupoEmitentes: GrupoEmitente) => {
        this.title = "Alterar";
        this.grupoEmitentesForm.patchValue(grupoEmitentes);
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.grupoEmitentesForm.invalid) {
      this.markAsDirtyInvalidControls(this.grupoEmitentesForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const grupoEmitentes = this.grupoEmitentesForm.value;

    const operation = !!this.id
      ? this.grupoEmitentesService.update(this.id, grupoEmitentes)
      : this.grupoEmitentesService.save(grupoEmitentes);

    const successMessage = !!this.id ? 'Grupo de Emitente atualizado com sucesso' : 'Grupo de Emitente salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/grupoEmitentes']);
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
