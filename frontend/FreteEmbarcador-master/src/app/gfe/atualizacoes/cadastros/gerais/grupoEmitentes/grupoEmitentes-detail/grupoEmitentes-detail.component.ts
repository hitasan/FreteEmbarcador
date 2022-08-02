import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { GrupoEmitente } from '../grupoEmitentes.interface';
import { GrupoEmitenteService } from '../grupoEmitentes.service';

@Component({
  selector: 'app-grupoEmitentes-detail',
  templateUrl: './grupoEmitentes-detail.component.html',
  styleUrls: ['./grupoEmitentes-detail.component.css']
})
export class GrupoEmitenteDetailComponent implements OnInit {

  grupoEmitentes: GrupoEmitente;
  title = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private grupoEmitentesService: GrupoEmitenteService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.grupoEmitentesService.get(id).subscribe((grupoEmitentes: GrupoEmitente) => {
      this.grupoEmitentes = grupoEmitentes;

      this.title = "Visualizar";
    });
  }

  back() {
    this.router.navigate(['app/grupoEmitentes']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Grupo de Emitente?',
      title: 'Excluir',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/grupoEmitentes/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.grupoEmitentesService.delete(id).subscribe(() => {
      this.notification.success('Grupo de Emitente excluído com sucesso');

      this.router.navigate([`app/grupoEmitentes`]);
    });
  }
}
