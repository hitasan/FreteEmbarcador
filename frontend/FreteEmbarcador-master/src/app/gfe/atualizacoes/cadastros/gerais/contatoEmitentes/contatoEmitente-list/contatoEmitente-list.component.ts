import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService, PoModalAction, PoModalComponent } from '@po-ui/ng-components';

import { ContatoEmitente } from '../contatoEmitente.interface';
import { ContatoEmitenteService } from '../contatoEmitente.service';

@Component({
  selector: 'app-contatoEmitente-list',
  templateUrl: './contatoEmitente-list.component.html',
  styleUrls: ['./contatoEmitente-list.component.css']
})
export class ContatoEmitenteListComponent implements OnInit {

  isTableLoading = false;
  contatoEmitente: Array<ContatoEmitente>;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar',  icon: 'po-icon-plus',    url: 'app/contatoEmitente/new' },
    { label: 'Visualizar', icon: 'po-icon-eye',     url: 'app/contatoEmitente/detail/${contatoEmitente.id}'},
    { label: 'Editar',     icon: 'po-icon-edit',    url: 'app/contatoEmitente/edit/${contatoEmitente.id}'},
    { label: 'Excluir',    icon: 'po-icon-delete',  url: 'app/contatoEmitente/detail/${contatoEmitente.id}', type: 'danger'},
    { label: 'Importar',   icon: 'po-icon-upload',  action: this.advancedActionModal.bind(this)}
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Visualizar', action: contatoEmitente => this.router.navigate([`app/contatoEmitente/detail/${contatoEmitente.id}`]) },
    { label: 'Editar', action: contatoEmitente => this.router.navigate([`app/contatoEmitente/edit/${contatoEmitente.id}`])},
    { label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) },
    { label: 'Copiar', separator: true, icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [{ label: 'Filial', property: 'filial' },
                                            { label: 'Sequência', property: 'sequencia' },
                                            { label: 'Situação', property: 'situacao' },
                                            { label: 'Nome', property: 'nome', width: '30%' },
                                            { label: 'Atende por', property: 'apelido'},
                                            { label: 'Setor', property: 'setor' },
                                            { label: 'Função', property: 'funcao' },
                                            { label: 'E-mail', property: 'email', width: '10%' },
                                            { label: 'Fone 1', property: 'fone1' },
                                            { label: 'Ramal 1', property: 'ramal1' },
                                            { label: 'Fone 2', property: 'fone2' },
                                            { label: 'Ramal 2', property: 'ramal2' },
                                            { label: 'Rec. Pre-Fat', property: 'recebePreFat' },
                                            { label: 'Rec. XML NFe', property: 'recebeXMLNFe' },
                                            { label: 'Rec. NF Ref.', property: 'recebeRef' },
                                            { label: 'Rec. Cotação', property: 'recebeCotacao' }];

  constructor( private router: Router,
               private contatoEmitenteService: ContatoEmitenteService,
               private dialog: PoDialogService ) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.contatoEmitenteService.getAll().subscribe((contatoEmitente: Array<ContatoEmitente>) => {
      this.isTableLoading = false;
      this.contatoEmitente = contatoEmitente;
    });
  }

  private onRemove({ id }: ContatoEmitente) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este Contato de Emitente?',
      title: 'Excluir',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.contatoEmitenteService.delete(id).subscribe(() => {
      this.contatoEmitente = this.contatoEmitente.filter(contatoEmitente => contatoEmitente.id !== id);
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
                                          title: 'Importação de contatos de emitentes',
                                          confirm: this.loadDados.bind(this)}),
                    this.advancedModal.close();
                  }
  };

  loadDados() {
  }
}
