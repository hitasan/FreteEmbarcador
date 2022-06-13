import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

import { GenericaService } from '../generica.service';
import { Generica } from '../generica.interface';

@Component({
  selector: 'app-generica-list',
  templateUrl: './generica-list.component.html',
  styleUrls: ['./generica-list.component.css']
})
export class GenericaListComponent implements OnInit {

  genericas: Array<Generica>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/genericas/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/genericas/edit', icon: 'po-icon-edit'},
    //{ label: 'Visualizar', url: 'app/genericas/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' },
    //{ label: 'Copiar', icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar', separator: true, action: generica => this.router.navigate([`app/genericas/edit/${generica.id}`]) },
    { label: 'Visualizar', separator: true, action: generica => this.router.navigate([`app/genericas/detail/${generica.id}`]) },
    { label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) },
    { label: 'Copiar', separator: true, action: generica => this.router.navigate([`app/genericas/copy/${generica.id}`]), icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial', width: '30%' },
    { label: 'Tabela', property: 'tabela', width: '10%' },
    { label: 'Chave', property: 'chave', width: '20%' },
    { label: 'Descrição', property: 'descricao' }
  ];

  constructor(
    private router: Router,
    private genericaService: GenericaService,
    private poNotification: PoNotificationService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.genericaService.getAll().subscribe((genericas: Array<Generica>) => {
      this.genericas = genericas;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Generica) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de tabela generica?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.genericaService.delete(id).subscribe(() => {
      this.genericas = this.genericas.filter(generica => generica.id !== id);
      this.isTableLoading = false;
    });
  }
}
