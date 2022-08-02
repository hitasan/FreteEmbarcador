import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { GrupoEmitenteService } from '../grupoEmitentes.service';
import { GrupoEmitente } from '../grupoEmitentes.interface';

@Component({
  selector: 'app-grupoEmitentes-list',
  templateUrl: './grupoEmitentes-list.component.html',
  styleUrls: ['./grupoEmitentes-list.component.css']
})
export class GrupoEmitenteListComponent implements OnInit {

  grupoEmitentes: Array<GrupoEmitente>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir', separator: true, type: 'default', url: 'app/grupoEmitentes/new', icon: 'po-icon-plus' },
    { label: 'Visualizar', separator: true, type: 'default', url: 'app/grupoEmitentes/detail/${grupoEmitentes.id}', icon: 'po-icon-eye' },
    { label: 'Editar', separator: true, type: 'default', url: 'app/grupoEmitentes/edit/${grupoEmitentes.id}', icon: 'po-icon-edit' },
    { label: 'Excluir', separator: true, type: 'default', url: 'app/grupoEmitentes/detail/${grupoEmitentes.id}', icon: 'po-icon-delete' },
    { label: 'Importar', separator: true, type: 'danger', url: 'app/grupoEmitentes/import', icon: 'po-icon-upload' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, action: grupoEmitentes => this.router.navigate([`app/grupoEmitentes/detail/${grupoEmitentes.id}`]) },
    { label: 'Editar', separator: true, action: grupoEmitentes => this.router.navigate([`app/grupoEmitentes/edit/${grupoEmitentes.id}`])},
    { label: 'Excluir', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Grupo', property: 'grupo', width: '10%' },
    { label: 'Descrição', property: 'descricao' },
    { label: 'Situação', property: 'situacao', width: '10%' }
  ];

  constructor(
    private router: Router,
    private grupoEmitentesService: GrupoEmitenteService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.grupoEmitentesService.getAll().subscribe((grupoEmitentes: Array<GrupoEmitente>) => {
      this.grupoEmitentes = grupoEmitentes;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: GrupoEmitente) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este Grupo de Emitente?',
      title: 'Excluir',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.grupoEmitentesService.delete(id).subscribe(() => {
      this.grupoEmitentes = this.grupoEmitentes.filter(grupoEmitentes => grupoEmitentes.id !== id);
      this.isTableLoading = false;
    });
  }
}
