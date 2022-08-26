import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { DistanciaCidade } from '../distanciaCidade.interface';
import { DistanciaCidadeService } from '../distanciaCidade.service';

@Component({
  selector: 'app-distanciaCidade-list',
  templateUrl: './distanciaCidade-list.component.html',
  styleUrls: ['./distanciaCidade-list.component.css']
})
export class DistanciaCidadeListComponent implements OnInit {

  distanciaCidade: Array<DistanciaCidade>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/distanciaCidade/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/distanciaCidade/detail/${distanciaCidade.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/distanciaCidade/edit/${distanciaCidade.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/distanciaCidade/detail/${distanciaCidade.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: distanciaCidade => this.router.navigate([`app/distanciaCidade/detail/${distanciaCidade.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: distanciaCidade => this.router.navigate([`app/distanciaCidade/edit/${distanciaCidade.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial'        , property: 'filial' },
    { label: 'Cód Tabela'    , property: 'codTabela', width: '5%' },
    { label: 'Tipo Tabela'   , property: 'tipoTabela', width: '5%', type: 'label', labels:[{label: 'Prazo', value: '1 - Prazo'},{label: 'Distância', value: '2 - Distância'}] },
    { label: 'Rota Origem'   , property: 'rotaOrigem' },
    { label: 'Rota Destino'  , property: 'rotaDestino' },
    { label: 'Tipo Oper.'    , property: 'tipoOper', width: '5%' },
    { label: 'Tipo Veículo'  , property: 'tipoVeiculo', width: '5%' },
    { label: 'Cod Grupo'     , property: 'codGrupo', width: '5%' },
    { label: 'Transportador' , property: 'transportador', width: '5%' },
    { label: 'Modal'         , property: 'modal', width: '10%', type: 'label', labels:[{label:'Indiferente', value:'1 - Indiferente'},{label:'Rodoviario', value:'2 - Rodoviario'},{label:'Ferroviario', value:'3 - Ferroviario'},{label:'Aereo', value: '4 - Aereo'},{label:'Aquaviario', value:'5 - Aquaviario'},{label:'Dutoviario', value:'6 - Dutoviario'},{label:'Multimodal', value:'7 - Multimodal'}] },
    { label: 'Dist. Estimada', property: 'distEstimad', width: '5%' },
    { label: 'Class Frete'   , property: 'classifFrete', width: '5%' },
  ];

  constructor(
    private router: Router,
    private distanciaCidadeService: DistanciaCidadeService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.distanciaCidadeService.getAll().subscribe((distanciaCidade: Array<DistanciaCidade>) => {
      this.distanciaCidade = distanciaCidade;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: DistanciaCidade) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este cadastro de Distância entre Cidades?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.distanciaCidadeService.delete(id).subscribe(() => {
      this.distanciaCidade = this.distanciaCidade.filter(distanciaCidade => distanciaCidade.id !== id);
      this.isTableLoading = false;
    });
  }
}
