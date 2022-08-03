import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { Unitizador } from '../unitizador.interface';
import { UnitizadorService } from '../unitizador.service';

@Component({
  selector: 'app-unitizador-list',
  templateUrl: './unitizador-list.component.html',
  styleUrls: ['./unitizador-list.component.css']
})
export class UnitizadorListComponent implements OnInit {

  unitizador: Array<Unitizador>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/unitizador/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/unitizador/detail/${unitizador.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/unitizador/edit/${unitizador.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/unitizador/detail/${unitizador.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: unitizador => this.router.navigate([`app/unitizador/detail/${unitizador.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: unitizador => this.router.navigate([`app/unitizador/edit/${unitizador.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Unitizador', property: 'unitizador', width: '10%' },
    { label: 'Descrição', property: 'descricao' },
    { label: 'Tara', property: 'tara', width: '5%' },
    { label: 'Volume', property: 'volume', width: '5%' },
    { label: 'Vol. Ocupado', property: 'volOcupado', width: '10%' },
    { label: 'Situação', property: 'situacao', width: '7%' }
  ];

  constructor(
    private router: Router,
    private unitizadorService: UnitizadorService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.unitizadorService.getAll().subscribe((unitizador: Array<Unitizador>) => {
     this.unitizador = unitizador;
     this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Unitizador) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este Unitizador?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.unitizadorService.delete(id).subscribe(() => {
      this.unitizador = this.unitizador.filter(unitizador => unitizador.id !== id);
      this.isTableLoading = false;
    });
  }
}
