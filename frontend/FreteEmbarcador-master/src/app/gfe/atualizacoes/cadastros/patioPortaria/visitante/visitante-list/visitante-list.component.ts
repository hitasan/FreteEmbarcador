import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { Visitante } from '../visitante.interface';
import { VisitanteService } from '../visitante.service';

@Component({
  selector: 'app-visitante-list',
  templateUrl: './visitante-list.component.html',
  styleUrls: ['./visitante-list.component.css']
})
export class VisitanteListComponent implements OnInit {

  visitante: Array<Visitante>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/visitante/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/visitante/detail/${visitante.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/visitante/edit/${visitante.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/visitante/detail/${visitante.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: visitante => this.router.navigate([`app/visitante/detail/${visitante.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: visitante => this.router.navigate([`app/visitante/edit/${visitante.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial'       , property: 'filial', width: '5%' },
    { label: 'Visitante'    , property: 'visitante', width: '5%' },
    { label: 'Nome'         , property: 'nome' },
    { label: 'CPF'          , property: 'cpf', width: '10%' },
    { label: 'Funcionário'  , property: 'funcionario', width: '5%', type: 'label', labels:[{label: 'Sim', value: '1 - Sim'},{label: 'Não', value: '2 - Não'}] },
    { label: 'Data Implant.', property: 'dataImplant', width: '5%', type: 'date' }
  ];

  constructor(
    private router: Router,
    private visitanteService: VisitanteService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.visitanteService.getAll().subscribe((visitante: Array<Visitante>) => {
      this.visitante = visitante;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Visitante) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Visitante?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.visitanteService.delete(id).subscribe(() => {
      this.visitante = this.visitante.filter(visitante => visitante.id !== id);
      this.isTableLoading = false;
    });
  }
}
