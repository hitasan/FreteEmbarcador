import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';
//import { Observable } from 'rxjs';

import { ParametroService } from '../parametro.service';
import { Parametro } from '../parametro.interface';

@Component({
  selector: 'app-parametro-list',
  templateUrl: './parametro-list.component.html',
  styleUrls: ['./parametro-list.component.css']
})
export class ParametroListComponent implements OnInit {

  parametros: Array<Parametro>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/parametros/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/parametros/edit', icon: 'po-icon-edit'},
    //{ label: 'Visualizar', url: 'app/parametros/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' },
    //{ label: 'Copiar', icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar', separator: true, action: parametro => this.router.navigate([`app/parametros/edit/${parametro.id}`]), icon: 'po-icon-edit' },
    { label: 'Visualizar', separator: true, action: parametro => this.router.navigate([`app/parametros/detail/${parametro.id}`]), icon: 'po-icon-eye' },
    { label: 'Remover', separator: true, type: 'danger', action: this.onRemove.bind(this), icon: 'po-icon-delete' },
    { label: 'Copiar', separator: true, action: parametro => this.router.navigate([`app/parametros/copy/${parametro.id}`]), icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial', width: '25%' },
    { label: 'Id', property: 'id', width: '5%' },
    { label: 'Parâmetro', property: 'parametro', width: '10%' },
    { label: 'Descrição', property: 'descricao', width: '25%' },
    { label: 'Conteudo', property: 'conteudo' }
  ];

  constructor(
    private router: Router,
    private parametroService: ParametroService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.parametroService.getAll().subscribe((parametros: Array<Parametro>) => {
      this.parametros = parametros;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Parametro) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de parâmetro?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.parametroService.delete(id).subscribe(() => {
      this.parametros = this.parametros.filter(parametro => parametro.id !== id);
      this.isTableLoading = false;
    });
  }
}
