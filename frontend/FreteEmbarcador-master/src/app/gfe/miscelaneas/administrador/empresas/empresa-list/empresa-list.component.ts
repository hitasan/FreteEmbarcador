import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';

import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa.interface';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

  empresas: Array<Empresa>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/empresas/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/empresas/edit', icon: 'po-icon-edit'},
    //{ label: 'Visualizar', url: 'app/empresas/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' },
    //{ label: 'Copiar', icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar',      separator: true, action: empresa => this.router.navigate([`app/empresas/edit/${empresa.id}`]),    icon: 'po-icon-edit' },
    { label: 'Visualizar',  separator: true, action: empresa => this.router.navigate([`app/empresas/detail/${empresa.id}`]),  icon: 'po-icon-eye' },
    { label: 'Remover',     separator: true, action: this.onRemove.bind(this),                                                icon: 'po-icon-delete', type: 'danger' },
    { label: 'Copiar',      separator: true, action: empresa => this.router.navigate([`app/empresas/copy/${empresa.id}`]),    icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Código', property: 'codigo', width: '10%' },
    { label: 'Descrição', property: 'descricao' }
  ];

  constructor(
    private router: Router,
    private empresaService: EmpresaService,
    private poNotification: PoNotificationService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.empresaService.getAll().subscribe((empresas: Array<Empresa>) => {
      this.empresas = empresas;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Empresa) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de empresa?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.empresaService.delete(id).subscribe(() => {
      this.empresas = this.empresas.filter(empresa => empresa.id !== id);
      this.isTableLoading = false;
    });
  }
}
