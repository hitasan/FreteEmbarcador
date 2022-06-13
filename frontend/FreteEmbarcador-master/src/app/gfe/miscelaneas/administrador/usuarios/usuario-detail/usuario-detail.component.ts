import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Usuario } from '../usuario.interface';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuario: Usuario;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.usuarioService.get(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      this.title = "Visualização";
    });
  }

  back() {
    this.router.navigate(['app/usuarios']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de usuário?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/usuarios/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.usuarioService.delete(id).subscribe(() => {
      this.notification.success('Registro de usuário removido com sucesso');
      this.router.navigate([`app/usuarios`]);
    });
  }
}
