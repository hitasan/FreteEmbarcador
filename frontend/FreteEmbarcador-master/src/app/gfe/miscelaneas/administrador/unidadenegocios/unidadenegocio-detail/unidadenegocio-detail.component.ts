import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { UnidadeNegocio } from '../unidadenegocio.interface';
import { UnidadeNegocioService } from '../unidadenegocio.service';

@Component({
  selector: 'app-unidadenegocio-detail',
  templateUrl: './unidadenegocio-detail.component.html',
  styleUrls: ['./unidadenegocio-detail.component.css']
})
export class UnidadeNegocioDetailComponent implements OnInit {

  unidadenegocio: UnidadeNegocio;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private unidadenegocioService: UnidadeNegocioService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.unidadenegocioService.get(id).subscribe((unidadenegocio: UnidadeNegocio) => {
      this.unidadenegocio = unidadenegocio;
      this.title = "Visualização";
    });
  }

  back() {
    this.router.navigate(['app/unidadenegocios']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de unidade de negocio?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/unidadenegocios/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.unidadenegocioService.delete(id).subscribe(() => {
      this.notification.success('Registro de unidade de negocio removido com sucesso');
      this.router.navigate([`app/unidadenegocios`]);
    });
  }
}
