import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { CidadesService } from '../cidades.service';
import { Cidade } from '../cidade.interface';

@Component({
  selector: 'app-cidades-list',
  templateUrl: './cidades-list.component.html',
  styleUrls: ['./cidades-list.component.css']
})
export class CidadesListComponent implements OnInit {

  cidades: Array<Cidade>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', separator: true, type: 'default', url: 'app/cidades/new', icon: 'po-icon-plus' },
    { label: 'Visualizar', separator: true, type: 'default', url: 'app/cidades/detail/${cidade.id}', icon: 'po-icon-eye' },
    { label: 'Editar', separator: true, type: 'default', url: 'app/cidades/edit/${cidade.id}', icon: 'po-icon-edit' },
    { label: 'Excluir', separator: true, type: 'default', url: 'app/cidades/detail/${cidade.id}', icon: 'po-icon-delete' },
    { label: 'Importar', separator: true, type: 'danger', url: 'app/cidades/import', icon: 'po-icon-upload' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Editar', separator: true, action: cidade => this.router.navigate([`app/cidades/edit/${cidade.id}`])},
    { label: 'Visualizar', separator: true, action: cidade => this.router.navigate([`app/cidades/detail/${cidade.id}`]) },
    { label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Código', property: 'cidade', width: '5%' },
    { label: 'Nome', property: 'nome' },
    { label: 'Estado', property: 'estado', width: '15%' },
    { label: 'País', property: 'pais', width: '5%' },
    { label: 'Sigla', property: 'sigla', width: '7%' },
    { label: 'CEP Inicial', property: 'cepInicial', width: '8%' },
    { label: 'CEP Final', property: 'cepFinal', width: '8%' },
    { label: 'Situação', property: 'situacao', width: '7%', type: 'label', labels:[{label: 'Ativo', color: 'color-10', value: '1 - Ativo'},{label: 'Inativo',color: 'color-07', value: '2 - Inativo'}] }
  ];

  constructor(
    private router: Router,
    private cidadeService: CidadesService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.cidadeService.getAll().subscribe((cidades: Array<Cidade>) => {
      this.cidades = cidades;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Cidade) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover esta cidade?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.cidadeService.delete(id).subscribe(() => {
      this.cidades = this.cidades.filter(cidade => cidade.id !== id);
      this.isTableLoading = false;
    });
  }
}
