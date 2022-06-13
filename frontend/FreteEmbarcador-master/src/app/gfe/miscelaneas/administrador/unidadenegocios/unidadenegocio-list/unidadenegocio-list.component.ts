import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';

import { UnidadeNegocioService } from '../unidadenegocio.service';
import { UnidadeNegocio } from '../unidadenegocio.interface';

@Component({
  selector: 'app-unidadenegocio-list',
  templateUrl: './unidadenegocio-list.component.html',
  styleUrls: ['./unidadenegocio-list.component.css']
})
export class UnidadeNegocioListComponent implements OnInit {

  unidadenegocios: Array<UnidadeNegocio>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/unidadenegocios/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/unidadenegocios/edit', icon: 'po-icon-edit'},
    //{ label: 'Visualizar', url: 'app/unidadenegocios/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' },
    //{ label: 'Copiar', icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar',     separator: true, action: unidadenegocio => this.router.navigate([`app/unidadenegocios/edit/${unidadenegocio.id}`]),   icon: 'po-icon-edit' },
    { label: 'Visualizar', separator: true, action: unidadenegocio => this.router.navigate([`app/unidadenegocios/detail/${unidadenegocio.id}`]), icon: 'po-icon-eye' },
    { label: 'Remover',    separator: true, action: this.onRemove.bind(this),                                                                    icon: 'po-icon-delete', type: 'danger' },
    { label: 'Copiar',     separator: true, action: unidadenegocio => this.router.navigate([`app/unidadenegocios/copy/${unidadenegocio.id}`]),   icon: 'po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Código', property: 'codigo', width: '10%' },
    { label: 'Descrição', property: 'descricao' }
  ];

  constructor(
    private router: Router,
    private unidadenegocioService: UnidadeNegocioService,
    private poNotification: PoNotificationService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.unidadenegocioService.getAll().subscribe((unidadenegocios: Array<UnidadeNegocio>) => {
      this.unidadenegocios = unidadenegocios;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: UnidadeNegocio) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de unidade de negocio?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.unidadenegocioService.delete(id).subscribe(() => {
      this.unidadenegocios = this.unidadenegocios.filter(unidadenegocio => unidadenegocio.id !== id);
      this.isTableLoading = false;
    });
  }
}
