import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { PracaPedagio } from '../pracaPedagio.interface';
import { PracaPedagioService } from '../pracaPedagio.service';

@Component({
  selector: 'app-pracaPedagio-list',
  templateUrl: './pracaPedagio-list.component.html',
  styleUrls: ['./pracaPedagio-list.component.css']
})
export class PracaPedagioListComponent implements OnInit {

  pracaPedagio: Array<PracaPedagio>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/pracaPedagio/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/pracaPedagio/detail/${pracaPedagio.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/pracaPedagio/edit/${pracaPedagio.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/pracaPedagio/detail/${pracaPedagio.id}' },
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: pracaPedagio => this.router.navigate([`app/pracaPedagio/detail/${pracaPedagio.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: pracaPedagio => this.router.navigate([`app/pracaPedagio/edit/${pracaPedagio.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) },
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial'        , property: 'filial' },
    { label: 'Praça'         , property: 'praca', width: '10%' },
    { label: 'Descrição'     , property: 'descricao' },
    { label: 'Situação'      , property: 'situacao', width: '5%', type: 'label', labels:[{label: 'Inativo', value: '1 - Inativo'},{label: 'Ativo', value: '2 - Ativo'}] },
    { label: 'Rodovia'       , property: 'rodovia' },
    { label: 'Concessionária', property: 'concessiona'},
  ];

  constructor(
    private router: Router,
    private pracaPedagioService: PracaPedagioService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.pracaPedagioService.getAll().subscribe((pracaPedagio: Array<PracaPedagio>) => {
      this.pracaPedagio = pracaPedagio;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: PracaPedagio) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir esta Praça de Pedágio?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.pracaPedagioService.delete(id).subscribe(() => {
      this.pracaPedagio = this.pracaPedagio.filter(pracaPedagio => pracaPedagio.id !== id);
      this.isTableLoading = false;
    });
  }
}
