import { AbstractControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption, PoLookupColumn, PoDynamicFormField  } from '@po-ui/ng-components';

import { ItemExcecao } from '../itemExcecao.interface';
import { ItemExcecaoService } from '../itemExcecao.service';

@Component({
  selector: 'app-itemExcecao-form',
  templateUrl: './itemExcecao-form.component.html',
  styleUrls: ['./itemExcecao-form.component.css']
})
export class ItemExcecaoFormComponent implements OnInit {

  title = 'INCLUIR - Itens com Exceção';
  itemExcecaoForm: FormGroup;
  isTableLoading = false;

  item: string = '';
  descricao: string = '';
  classFrete: string = '';
  tipoItem: string = '';

  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    private itemExcecaoService: ItemExcecaoService) {
      const { id } = this.activatedRoute.snapshot.params;
      this.id = id;
  }

  ngOnInit() {
    this.itemExcecaoForm = this.fb.group({ filial: [''],
                                           item: ['', Validators.required],
                                           descricao: ['', Validators.required],
                                           classFrete: [''],
                                           tipoItem: ['']
                                        });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    if (id) {
      this.itemExcecaoService.get(id).subscribe((itemExcecao: ItemExcecao) => {
        this.itemExcecaoForm.patchValue(itemExcecao);
        this.title = "ALTERAR - Itens com Exceção";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.itemExcecaoForm.invalid) {
      this.markAsDirtyInvalidControls(this.itemExcecaoForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const itemExcecao = this.itemExcecaoForm.value;

    const operation = !!this.id ? this.itemExcecaoService.update(this.id, itemExcecao) : this.itemExcecaoService.save(itemExcecao);

    const successMessage = !!this.id ? 'Item atualizado com sucesso' : 'Item salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/itemExcecao']);
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
  // Funções de controle do lookup
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
