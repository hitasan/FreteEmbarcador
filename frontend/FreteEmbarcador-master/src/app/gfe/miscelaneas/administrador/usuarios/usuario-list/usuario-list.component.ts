import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService,PoNotificationService } from '@po-ui/ng-components';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.interface';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios: Array<Usuario>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/usuarios/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', url: 'app/usuarios/edit', icon: 'po-icon-edit'},
    //{ label: 'Visualizar', url: 'app/usuarios/detail', icon: 'po-icon-eye' },
    //{ label: 'Remover', type: 'danger', icon: 'po-icon-delete' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar', separator: true, action: usuario => this.router.navigate([`app/usuarios/edit/${usuario.id}`]), icon: 'po-icon-edit' },
    { label: 'Visualizar', separator: true, action: usuario => this.router.navigate([`app/usuarios/detail/${usuario.id}`]), icon: 'po-icon-eye' },
    { label: 'Remover', separator: true, type: 'danger', action: this.onRemove.bind(this), icon: 'po-icon-delete' },
    { label: 'Copiar', separator: true, action: usuario => this.router.navigate([`app/usuarios/copy/${usuario.id}`]), icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Id', property: 'id', width: '5%' },
    { label: 'Login', property: 'codigo', width: '10%' },
    { label: 'Nome', property: 'nome' },
    { label: 'Email', property: 'email', width: '20%' },
    { label: 'Status', property: 'status', width: '15%' }
  ];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.usuarioService.getAll().subscribe((usuarios: Array<Usuario>) => {
      this.usuarios = usuarios;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Usuario) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de usuário?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.usuarioService.delete(id).subscribe(() => {
      this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
      this.isTableLoading = false;
    });
  }
}
