import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Unitizador } from '../unitizador.interface';
import { UnitizadorService } from '../unitizador.service';

@Component({
  selector: 'app-unitizador-detail',
  templateUrl: './unitizador-detail.component.html',
  styleUrls: ['./unitizador-detail.component.css']
})
export class UnitizadorDetailComponent implements OnInit {

  title = '';
  unitizador: Unitizador;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private unitizadorService: UnitizadorService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.unitizadorService.get(id).subscribe((unitizador: Unitizador) => {
      this.unitizador = unitizador;

      this.title = "VISUALIZAR - Unitizadores";
    });
  }

  back() {
    this.router.navigate(['app/unitizador']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Unitizador?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/unitizador/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.unitizadorService.delete(id).subscribe(() => {
      this.notification.success('Unitizador excluido com sucesso');

      this.router.navigate([`app/unitizador`]);
    });
  }
}
