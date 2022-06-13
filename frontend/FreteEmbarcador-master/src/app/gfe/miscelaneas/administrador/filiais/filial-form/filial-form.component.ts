import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { FilialService } from '../filial.service';
import { Filial } from '../filial.interface';

@Component({
  selector: 'app-filial-form',
  templateUrl: './filial-form.component.html',
  styleUrls: ['./filial-form.component.css']
})
export class FilialFormComponent implements OnInit {

  title = 'Nova Filial';
  filialForm: FormGroup;

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public filialService: FilialService) { const { id } = this.activatedRoute.snapshot.params;
                                           this.id = id }

  ngOnInit() {
    this.filialForm = this.fb.group({ codigo: ['', Validators.required],
                                      descricao: ['', Validators.required],
                                      nomecomercial: ['', Validators.required],
                                      razaosocial: ['', Validators.required],
                                      idfed: ['', Validators.required],
                                      telefone: [''],
                                      fax: [''],
                                      inscrmunicipal: [''],
                                      inscrestadual: ['']
                                      });
    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.filialService.get(id).subscribe((filial: Filial) => {
        this.filialForm.patchValue(filial);
        this.title = "Alteração";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.filialForm.invalid) {
      this.markAsDirtyInvalidControls(this.filialForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const filial = this.filialForm.value;
    const operation = !!this.id ? this.filialService.update(this.id, filial) : this.filialService.save(filial);
    const successMessage = !!this.id ? 'Registro de filial atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/filiais']);
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
