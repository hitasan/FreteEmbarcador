import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { GrupoEmpresaService } from '../grupoempresa.service';
import { GrupoEmpresa } from '../grupoempresa.interface';

@Component({
  selector: 'app-grupoempresa-form',
  templateUrl: './grupoempresa-form.component.html',
  styleUrls: ['./grupoempresa-form.component.css']
})
export class GrupoEmpresaFormComponent implements OnInit {

  title = 'Novo Grupo de Empresa';
  grupoempresaForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public grupoempresaService: GrupoEmpresaService) { const { id } = this.activatedRoute.snapshot.params;
                                                       this.id = id }

  ngOnInit() {
    this.grupoempresaForm = this.fb.group({ codigo: ['', Validators.required],
                                            descricao: ['', Validators.required],
                                            tamanho: [0, Validators.required],
                                            layout: ['', Validators.required]
                                          });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.grupoempresaService.get(id).subscribe((grupoempresa: GrupoEmpresa) => {
        this.grupoempresaForm.patchValue(grupoempresa);
        this.title = "Alteração";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.grupoempresaForm.invalid) {
      this.markAsDirtyInvalidControls(this.grupoempresaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const grupoempresa = this.grupoempresaForm.value;
    const operation = !!this.id ? this.grupoempresaService.update(this.id, grupoempresa) : this.grupoempresaService.save(grupoempresa);
    const successMessage = !!this.id ? 'Registro de grupo de empresa atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/grupoempresas']);
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
