import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { TipoDocCarga } from '../tipoDocCarga.interface';
import { TipoDocCargaService } from '../tipoDocCarga.service';

@Component({
  selector: 'app-tipoDocCarga-list',
  templateUrl: './tipoDocCarga-list.component.html',
  styleUrls: ['./tipoDocCarga-list.component.css']
})
export class TipoDocCargaListComponent implements OnInit {

  tipoDocCarga: Array<TipoDocCarga>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/tipoDocCarga/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/tipoDocCarga/detail/${tipoDocCarga.id}' },
    { label: 'Alterar'    , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/tipoDocCarga/edit/${tipoDocCarga.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/tipoDocCarga/detail/${tipoDocCarga.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: tipoDocCarga => this.router.navigate([`app/tipoDocCarga/detail/${tipoDocCarga.id}`]) },
    { label: 'Alterar'    , separator: true, type: 'default', icon: 'po-icon-edit'  , action: tipoDocCarga => this.router.navigate([`app/tipoDocCarga/edit/${tipoDocCarga.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Tipo Docto', property: 'tipo', width: '5%' },
    { label: 'Descrição', property: 'descricao' },
    { label: 'Tipo Transp.', property: 'tpTransp', width: '10%' },
    { label: 'Sentido', property: 'sentido', width: '10%' },
    { label: 'Tipo Contab.', property: 'tpContab', width: '12%' },
    { label: 'Situação', property: 'situacao', width: '7%' }
  ];

  constructor(
    private router: Router,
    private tipoDocCargaService: TipoDocCargaService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.tipoDocCargaService.getAll().subscribe((tiposDocCarga: Array<TipoDocCarga>) => {
     this.tipoDocCarga = tiposDocCarga;
     this.isTableLoading = false;
    });
  }

  private onRemove({ id }: TipoDocCarga) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este Tipo de Documento de Carga?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.tipoDocCargaService.delete(id).subscribe(() => {
      this.tipoDocCarga = this.tipoDocCarga.filter(tipoDocCarga => tipoDocCarga.id !== id);
      this.isTableLoading = false;
    });
  }
}
