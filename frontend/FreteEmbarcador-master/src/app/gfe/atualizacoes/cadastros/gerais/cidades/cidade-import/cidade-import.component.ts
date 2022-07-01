import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

import { CidadesService } from '../cidades.service';
import { Cidade } from '../cidade.interface';

@Component({
  selector: 'app-cidade-import',
  templateUrl: './cidade-import.component.html',
  styleUrls: ['./cidade-import.component.css']
})
export class CidadeImportComponent implements OnInit {

  title = 'Importação de cidades';

  cidadeImport: FormGroup;

  private id;

  readonly genreOptions = [ { value: 'male', label: 'Masculino' },
                            { value: 'female', label: 'Feminino' },
                            { value: 'another', label: 'Outro' },
                          ];

  constructor( private activatedRoute: ActivatedRoute,
               private fb: FormBuilder,
               private notification: PoNotificationService,
               private router: Router,
               private cidadeService: CidadesService) {
                const { id } = this.activatedRoute.snapshot.params;
                this.id = id;
               }

  ngOnInit() {
    this.cidadeImport = this.fb.group({ file: ['', Validators.required] });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.cidadeService.get(id).subscribe((cidade: Cidade) => {
        this.cidadeImport.patchValue(cidade);

        this.title = "Importação de cidades";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.cidadeImport.invalid) {
      this.markAsDirtyInvalidControls(this.cidadeImport.controls);
      this.notification.warning('Obrigatório informar o arquivo para importação.');
      return;
    }

    const cidade = this.cidadeImport.value;

    const operation = !!this.id
      ? this.cidadeService.update(this.id, cidade)
      : this.cidadeService.save(cidade);

    const successMessage = !!this.id ? 'Importação realizada com sucesso' : 'Importação com sucesso';

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
