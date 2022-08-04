import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';

import { Motorista } from '../motorista.interface';
import { MotoristaService } from '../motorista.service';

@Component({
  selector: 'app-motorista-list',
  templateUrl: './motorista-list.component.html',
  styleUrls: ['./motorista-list.component.css']
})
export class MotoristaListComponent implements OnInit {

  motorista: Array<Motorista>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus'  , url: 'app/motorista/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , url: 'app/motorista/detail/${motorista.id}' },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , url: 'app/motorista/edit/${motorista.id}' },
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', url: 'app/motorista/detail/${motorista.id}' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye'   , action: motorista => this.router.navigate([`app/motorista/detail/${motorista.id}`]) },
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit'  , action: motorista => this.router.navigate([`app/motorista/edit/${motorista.id}`])},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Cód Mot/Ajud', property: 'codMotAjud', width: '10%' },
    { label: 'Nome', property: 'nome'},
    { label: 'Pseud/Apelido', property: 'apelido' },
    { label: 'Tipo', property: 'tipo', width: '10%' },
    { label: 'CPF', property: 'cpf', width: '10%' },
    { label: 'Sit Mot/Ajud', property: 'sitMotAjud', width: '10%' }
  ];

  constructor(
    private router: Router,
    private motoristaService: MotoristaService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.motoristaService.getAll().subscribe((motorista: Array<Motorista>) => {
     this.motorista = motorista;
     this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Motorista) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Motorista/Ajudante?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.motoristaService.delete(id).subscribe(() => {
      this.motorista = this.motorista.filter(motorista => motorista.id !== id);
      this.isTableLoading = false;
    });
  }
}
