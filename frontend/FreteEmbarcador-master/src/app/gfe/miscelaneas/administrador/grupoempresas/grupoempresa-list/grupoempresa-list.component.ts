import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';

import { GrupoEmpresaService } from '../grupoempresa.service';
import { GrupoEmpresa } from '../grupoempresa.interface';

@Component({
  selector: 'app-grupoempresa-list',
  templateUrl: './grupoempresa-list.component.html',
  styleUrls: ['./grupoempresa-list.component.css']
})
export class GrupoEmpresaListComponent implements OnInit {

  grupoempresas: Array<GrupoEmpresa>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/grupoempresas/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/grupoempresas/edit', icon: 'po-icon-edit' },
    //{ label: 'Visualizar', url: 'app/grupoempresas/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' },
    //{ label: 'Copiar', icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar',      separator: true, action: grupoempresa => this.router.navigate([`app/grupoempresas/edit/${grupoempresa.id}`]),   icon: 'po-icon-edit' },
    { label: 'Visualizar',  separator: true, action: grupoempresa => this.router.navigate([`app/grupoempresas/detail/${grupoempresa.id}`]), icon: 'po-icon-eye' },
    { label: 'Remover',     separator: true, action: this.onRemove.bind(this),                                                              icon: 'po-icon-delete', type: 'danger' },
    { label: 'Copiar',      separator: true, action: grupoempresa => this.router.navigate([`app/grupoempresas/copy/${grupoempresa.id}`]),   icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Código', property: 'codigo', width: '10%' },
    { label: 'Descrição', property: 'descricao' },
    { label: 'Tamanho', property: 'chave', width: '5%' },
    { label: 'Layout', property: 'layout', width: '15%' }
  ];

  constructor(
    private router: Router,
    private grupoempresaService: GrupoEmpresaService,
    private poNotification: PoNotificationService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.grupoempresaService.getAll().subscribe((grupoempresas: Array<GrupoEmpresa>) => {
      this.grupoempresas = grupoempresas;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: GrupoEmpresa) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de grupo de empresa?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.grupoempresaService.delete(id).subscribe(() => {
      this.grupoempresas = this.grupoempresas.filter(grupoempresa => grupoempresa.id !== id);
      this.isTableLoading = false;
    });
  }
}
