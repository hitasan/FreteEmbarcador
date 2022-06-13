import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.interface';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  providers: [EmpresaService],
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  title = 'Nova Empresa';
  empresaForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public empresaService: EmpresaService) { const { id } = this.activatedRoute.snapshot.params;
                                             this.id = id }

  ngOnInit() {
    this.empresaForm = this.fb.group({ codigo: ['', Validators.required],
                                       descricao: ['', Validators.required]
                                    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.empresaService.get(id).subscribe((empresa: Empresa) => {
        this.empresaForm.patchValue(empresa);
        this.title = "TESTANDO".concat(empresa.codigo);
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.empresaForm.invalid) {
      this.markAsDirtyInvalidControls(this.empresaForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const empresa = this.empresaForm.value;
    const operation = !!this.id ? this.empresaService.update(this.id, empresa) : this.empresaService.save(empresa);
    const successMessage = !!this.id ? 'Registro de empresa atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/empresas']);
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
