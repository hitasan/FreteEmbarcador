import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { TipoOperacao } from '../tipoOperacao.interface';
import { TipoOperacaoService } from '../tipoOperacao.service';

@Component({
  selector: 'app-tipoOperacao-list',
  templateUrl: './tipoOperacao-list.component.html',
  styleUrls: ['./tipoOperacao-list.component.css']
})
export class TipoOperacaoListComponent implements OnInit {

  tipoOperacao: Array<TipoOperacao>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/tipoOperacao/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/tipoOperacao/detail/${tipoOperacao.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/tipoOperacao/edit/${tipoOperacao.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/tipoOperacao/detail/${tipoOperacao.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: tipoOperacao => this.router.navigate([`app/tipoOperacao/detail/${tipoOperacao.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: tipoOperacao => this.router.navigate([`app/tipoOperacao/edit/${tipoOperacao.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial'   , property: 'filial' },
    { label: 'Tipo Oper', property: 'tipoOper', width: '10%' },
    { label: 'Descrição', property: 'descricao' },
    { label: 'Sentido'  , property: 'sentido', width: '10%' },
    { label: 'Situação' , property: 'situacao', width: '10%' }
  ];

  constructor(
    private router: Router,
    private tipoOperacaoService: TipoOperacaoService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.tipoOperacaoService.getAll().subscribe((tipoOperacao: Array<TipoOperacao>) => {
      this.tipoOperacao = tipoOperacao;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: TipoOperacao) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Tipo de Operação?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.tipoOperacaoService.delete(id).subscribe(() => {
      this.tipoOperacao = this.tipoOperacao.filter(tipoOperacao => tipoOperacao.id !== id);
      this.isTableLoading = false;
    });
  }
}
