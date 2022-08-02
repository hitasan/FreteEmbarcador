import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService, PoModalAction, PoModalComponent } from '@po-ui/ng-components';

import { UnidadeMedida } from '../unidadeMedida.interface';
import { UnidadeMedidaService } from '../unidadeMedida.service';

@Component({
  selector: 'app-unidadeMedida-list',
  templateUrl: './unidadeMedida-list.component.html',
  styleUrls: ['./unidadeMedida-list.component.css']
})
export class UnidadeMedidaListComponent implements OnInit {

  uMedida: Array<UnidadeMedida>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Incluir'   , separator: true, type: 'default', icon: 'po-icon-plus',    url: 'app/unidadeMedida/new' },
    { label: 'Visualizar', separator: true, type: 'default', icon: 'po-icon-eye',     url: 'app/unidadeMedida/detail/${unidadeMedida.id}'},
    { label: 'Alterar'   , separator: true, type: 'default', icon: 'po-icon-edit',    url: 'app/unidadeMedida/edit/${unidadeMedida.id}'},
    { label: 'Excluir'   , separator: true, type: 'danger' , icon: 'po-icon-delete',  url: 'app/unidadeMedida/detail/${unidadeMedida.id}'},
    { label: 'Importar'  , separator: true, type: 'default', icon: 'po-icon-upload',  action: this.advancedActionModal.bind(this)}
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Visualizar', separator: true, action: uMedida => this.router.navigate([`app/unidadeMedida/detail/${uMedida.id}`]) },
    { label: 'Alterar',    separator: true, action: uMedida => this.router.navigate([`app/unidadeMedida/edit/${uMedida.id}`])},
    { label: 'Excluir',    separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [{ label: 'Filial', property: 'filial' },
                                            { label: 'Un. Medida', property: 'uniMedida', width: '5%' },
                                            { label: 'Descrição', property: 'descricao' }];

  constructor( private router: Router,
               private uMedidaService: UnidadeMedidaService,
               private dialog: PoDialogService ) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.uMedidaService.getAll().subscribe((uMedida: Array<UnidadeMedida>) => {
      this.uMedida = uMedida;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: UnidadeMedida) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover esta Unidade de Medida?',
      title: 'Excluir',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.uMedidaService.delete(id).subscribe(() => {
      this.uMedida = this.uMedida.filter(uMedida => uMedida.id !== id);
      this.isTableLoading = false;
    });
  }

  // ================================================================================================================================================
  // FUNÇÕES PARA MODAL DE IMPORTAÇÃO
  // ================================================================================================================================================
  @ViewChild('advancedModal', { static: true }) advancedModal: PoModalComponent;

  advancedActionModal() {
    this.advancedModal.open();
  }

  public readonly advancedSecundaryAction: PoModalAction = {
    label: 'Modelo CSV',
    action: () => {
      this.downloadModelo.bind(this);
    }
  };

  downloadModelo() {
  }

  public readonly advancedPrimaryAction: PoModalAction = {
    label: 'Importar',
    action: () => { this.dialog.confirm({ message: 'Tem certeza que deseja importar os dados do arquivo selecionado?',
                                          title: 'Importação de unidade de medidas',
                                          confirm: this.loadDados.bind(this)}),
                    this.advancedModal.close();
                  }
  };

  loadDados() {
  }
}
