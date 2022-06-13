import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { CidadesService } from '../cidades.service';
import { Cidade } from '../cidade.interface';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {

  title = 'Nova cidade';

  cidadeForm: FormGroup;

  private id;

  readonly genreOptions = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'another', label: 'Outro' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private cidadeService: CidadesService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.cidadeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      birthday: [''],
      genre: [''],
      cpf: ['', Validators.required],
      zipcode: ['', Validators.required],
      address_number: []
    });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.cidadeService.get(id).subscribe((cidade: Cidade) => {
        this.cidadeForm.patchValue(cidade);

        this.title = cidade.name;
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.cidadeForm.invalid) {
      this.markAsDirtyInvalidControls(this.cidadeForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const cidade = this.cidadeForm.value;

    const operation = !!this.id
      ? this.cidadeService.update(this.id, cidade)
      : this.cidadeService.save(cidade);

    const successMessage = !!this.id ? 'Cidade atualizada com sucesso' : 'Cidade salva com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/cidades']);
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
