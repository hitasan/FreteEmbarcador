import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { PrazoEntrega } from '../prazoEntrega.interface';
import { PrazoEntregaService } from '../prazoEntrega.service';

@Component({
  selector: 'app-prazoEntrega-list',
  templateUrl: './prazoEntrega-list.component.html',
  styleUrls: ['./prazoEntrega-list.component.css']
})
export class PrazoEntregaListComponent implements OnInit {

  prazoEntrega: Array<PrazoEntrega>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/prazoEntrega/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/prazoEntrega/detail/${prazoEntrega.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/prazoEntrega/edit/${prazoEntrega.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/prazoEntrega/detail/${prazoEntrega.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: prazoEntrega => this.router.navigate([`app/prazoEntrega/detail/${prazoEntrega.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: prazoEntrega => this.router.navigate([`app/prazoEntrega/edit/${prazoEntrega.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial'       , property: 'filial' },
    { label: 'Cód Tabela'   , property: 'codTabela', width: '5%' },
    { label: 'Tipo Tabela'  , property: 'tipoTabela', width: '5%' },
    { label: 'Rota Origem'  , property: 'rotaOrigem' },
    { label: 'Rota Destino' , property: 'rotaDestino' },
    { label: 'Tipo Oper.'   , property: 'tipoOper', width: '5%' },
    { label: 'Tipo Veículo' , property: 'tipoVeiculo', width: '5%' },
    { label: 'Cod. Grupo'   , property: 'codGrupo', width: '5%' },
    { label: 'Transportador', property: 'transportador', width: '5%' },
    { label: 'Modal'        , property: 'modal', width: '10%' },
    { label: 'Tipo Prazo'   , property: 'tipoPrazo', width: '10%' },
    { label: 'Prazo'        , property: 'prazo', width: '5%' },
    { label: 'Class. Frete' , property: 'classifFrete', width: '5%' }
  ];

  constructor(
    private router: Router,
    private prazoEntregaService: PrazoEntregaService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.prazoEntregaService.getAll().subscribe((prazoEntrega: Array<PrazoEntrega>) => {
      this.prazoEntrega = prazoEntrega;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: PrazoEntrega) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Prazo de Entrega?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.prazoEntregaService.delete(id).subscribe(() => {
      this.prazoEntrega = this.prazoEntrega.filter(prazoEntrega => prazoEntrega.id !== id);
      this.isTableLoading = false;
    });
  }
}
