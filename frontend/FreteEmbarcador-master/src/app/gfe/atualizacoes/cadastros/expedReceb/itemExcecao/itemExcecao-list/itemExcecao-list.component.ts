import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { ItemExcecao } from '../itemExcecao.interface';
import { ItemExcecaoService } from '../itemExcecao.service';

@Component({
  selector: 'app-itemExcecao-list',
  templateUrl: './itemExcecao-list.component.html',
  styleUrls: ['./itemExcecao-list.component.css']
})
export class ItemExcecaoListComponent implements OnInit {

  itemExcecao: Array<ItemExcecao>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/itemExcecao/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/itemExcecao/detail/${itemExcecao.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/itemExcecao/edit/${itemExcecao.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/itemExcecao/detail/${itemExcecao.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: itemExcecao => this.router.navigate([`app/itemExcecao/detail/${itemExcecao.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: itemExcecao => this.router.navigate([`app/itemExcecao/edit/${itemExcecao.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Item', property: 'item', width: '10%' },
    { label: 'Descrição', property: 'descricao' },
    { label: 'Classif. Frete', property: 'classFrete', width: '5%' },
    { label: 'Tipo Item', property: 'tipoItem', width: '5%' }
  ];

  constructor(
    private router: Router,
    private itemExcecaoService: ItemExcecaoService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.itemExcecaoService.getAll().subscribe((itemExcecao: Array<ItemExcecao>) => {
     this.itemExcecao = itemExcecao;
     this.isTableLoading = false;
    });
  }

  private onRemove({ id }: ItemExcecao) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Item?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.itemExcecaoService.delete(id).subscribe(() => {
      this.itemExcecao = this.itemExcecao.filter(itemExcecao => itemExcecao.id !== id);
      this.isTableLoading = false;
    });
  }
}
