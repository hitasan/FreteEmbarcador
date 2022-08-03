import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { FiltroDocCarga } from '../filtroDocCarga.interface';
import { FiltroDocCargaService } from '../filtroDocCarga.service';

@Component({
  selector: 'app-filtroDocCarga-list',
  templateUrl: './filtroDocCarga-list.component.html',
  styleUrls: ['./filtroDocCarga-list.component.css']
})
export class FiltroDocCargaListComponent implements OnInit {

  filtroDocCarga: Array<FiltroDocCarga>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/filtroDocCarga/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/filtroDocCarga/detail/${filtroDocCarga.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/filtroDocCarga/edit/${filtroDocCarga.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/filtroDocCarga/detail/${filtroDocCarga.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: filtroDocCarga => this.router.navigate([`app/filtroDocCarga/detail/${filtroDocCarga.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: filtroDocCarga => this.router.navigate([`app/filtroDocCarga/edit/${filtroDocCarga.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Tabela', property: 'tabela', width: '10%' },
    { label: 'Campo', property: 'campo', width: '10%' },
    { label: 'Valor', property: 'valor' },
    { label: 'Ação', property: 'acao', width: '10%' }
  ];

  constructor(
    private router: Router,
    private filtroDocCargaService: FiltroDocCargaService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.filtroDocCargaService.getAll().subscribe((filtroDocCarga: Array<FiltroDocCarga>) => {
     this.filtroDocCarga = filtroDocCarga;
     this.isTableLoading = false;
    });
  }

  private onRemove({ id }: FiltroDocCarga) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Filtro?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.filtroDocCargaService.delete(id).subscribe(() => {
      this.filtroDocCarga = this.filtroDocCarga.filter(filtroDocCarga => filtroDocCarga.id !== id);
      this.isTableLoading = false;
    });
  }
}
