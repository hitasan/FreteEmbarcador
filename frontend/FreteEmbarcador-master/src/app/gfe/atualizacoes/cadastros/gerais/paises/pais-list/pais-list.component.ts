import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService, PoModalAction, PoModalComponent } from '@po-ui/ng-components';

import { PaisesService } from '../paises.service';
import { Pais } from '../pais.interface';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises: Array<Pais>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar',  icon: 'po-icon-plus',    url: 'app/paises/new' },
    { label: 'Editar',     icon: 'po-icon-edit',    url: 'app/paises/edit/${pais.id}'},
    { label: 'Visualizar', icon: 'po-icon-eye',     url: 'app/paises/detail/${pais.id}'},
    { label: 'Excluir',    icon: 'po-icon-delete',  url: 'app/paises/detail/${pais.id}', type: 'danger'},
    { label: 'Importar',   icon: 'po-icon-upload',  action: this.advancedActionModal.bind(this)}
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar', action: pais => this.router.navigate([`app/paises/edit/${pais.id}`])},
    { label: 'Visualizar', action: pais => this.router.navigate([`app/paises/detail/${pais.id}`]) },
    { label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) },
    { label: 'Copiar', separator: true, icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [{ label: 'Filial', property: 'filial' },
                                            { label: 'Cod. do País', property: 'codigo', width: '5%' },
                                            { label: 'Descrição', property: 'nome' },
                                            { label: 'Sigla', property: 'sigla', width: '5%' },
                                            { label: 'Cod. Abics', property: 'codAbics', width: '7%' },
                                            { label: 'Cod. Fiesp', property: 'codigoFiesp', width: '7%' },
                                            { label: 'Codigo ERP', property: 'codERP', width: '7%' },
                                            { label: 'Cod. País D.U.E.', property: 'codPaisDUE', width: '10%' }];

  constructor( private router: Router,
               private paisService: PaisesService,
               private dialog: PoDialogService ) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.paisService.getAll().subscribe((paises: Array<Pais>) => {
      this.paises = paises;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Pais) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este país?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.paisService.delete(id).subscribe(() => {
      this.paises = this.paises.filter(pais => pais.id !== id);
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
                                          title: 'Importação de países',
                                          confirm: this.loadDados.bind(this)}),
                    this.advancedModal.close();
                  }
  };

  loadDados() {
  }
}
