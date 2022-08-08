import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { Veiculo } from '../veiculo.interface';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {

  veiculo: Array<Veiculo>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/veiculo/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/veiculo/detail/${veiculo.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/veiculo/edit/${veiculo.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/veiculo/detail/${veiculo.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: veiculo => this.router.navigate([`app/veiculo/detail/${veiculo.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: veiculo => this.router.navigate([`app/veiculo/edit/${veiculo.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial'      , property: 'filial' },
    { label: 'Cód Veículo' , property: 'codigo', width: '5%' },
    { label: 'Tipo Veículo', property: 'tipo', width: '5%' },
    { label: 'Placa'       , property: 'placa', width: '7%' },
    { label: 'Proprietário', property: 'proprietario', width: '5%' },
    { label: 'Tipo Propr.' , property: 'tpPropri', width: '5%' },
    { label: 'Tipo Acesso' , property: 'tipoAcesso', width: '10%' },
    { label: 'Situação'    , property: 'situacao', width: '5%' },
    { label: 'Volume Útil' , property: 'volume', width: '5%' },
    { label: 'Carga Útil'  , property: 'carga', width: '10%', type: 'number', format: '1.2-6' }
  ];


  constructor(
    private router: Router,
    private veiculoService: VeiculoService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.veiculoService.getAll().subscribe((veiculo: Array<Veiculo>) => {
      this.veiculo = veiculo;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Veiculo) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Veículo?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.veiculoService.delete(id).subscribe(() => {
      this.veiculo = this.veiculo.filter(veiculo => veiculo.id !== id);
      this.isTableLoading = false;
    });
  }
}
