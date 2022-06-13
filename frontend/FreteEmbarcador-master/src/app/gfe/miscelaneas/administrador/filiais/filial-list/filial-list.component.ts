import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';

import { FilialService } from '../filial.service';
import { Filial } from '../filial.interface';

@Component({
  selector: 'app-filial-list',
  templateUrl: './filial-list.component.html',
  styleUrls: ['./filial-list.component.css']
})
export class FilialListComponent implements OnInit {

  filials: Array<Filial>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/filiais/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/filiais/edit', icon: 'po-icon-edit'},
    //{ label: 'Visualizar', url: 'app/filiais/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' },
    //{ label: 'Copiar', icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar',      separator: true, action: filial => this.router.navigate([`app/filiais/edit/${filial.id}`]),   icon: 'po-icon-edit' },
    { label: 'Visualizar',  separator: true, action: filial => this.router.navigate([`app/filiais/detail/${filial.id}`]), icon: 'po-icon-eye' },
    { label: 'Remover',     separator: true, action: this.onRemove.bind(this),                                            icon: 'po-icon-delete', type: 'danger' },
    { label: 'Copiar',      separator: true, action: filial => this.router.navigate([`app/filiais/copy/${filial.id}`]),   icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Código',         property: 'codigo', width: '5%' },
    { label: 'Descrição',      property: 'descricao' },
    { label: 'Nome Comercial', property: 'nomecomercial' },
    { label: 'CPF/CNPJ',       property: 'idfed', width: '15%', format:"" }
  ];

  constructor(
    private router: Router,
    private filialService: FilialService,
    private poNotification: PoNotificationService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.filialService.getAll().subscribe((filials: Array<Filial>) => {
      this.filials = filials;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Filial) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de filial?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.filialService.delete(id).subscribe(() => {
      this.filials = this.filials.filter(filial => filial.id !== id);
      this.isTableLoading = false;
    });
  }
}
