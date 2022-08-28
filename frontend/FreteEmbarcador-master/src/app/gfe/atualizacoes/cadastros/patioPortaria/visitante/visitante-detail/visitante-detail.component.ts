import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Visitante } from '../visitante.interface';
import { VisitanteService } from '../visitante.service';

@Component({
  selector: 'app-visitante-detail',
  templateUrl: './visitante-detail.component.html',
  styleUrls: ['./visitante-detail.component.css']
})
export class VisitanteDetailComponent implements OnInit {

  title = '';
  visitante: Visitante;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private visitanteService: VisitanteService) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.visitanteService.get(id).subscribe((visitante: Visitante) => {
      this.visitante = visitante;
      this.title = "VISUALIZAR - Visitantes";
    });
  }

  back() {
    this.router.navigate(['app/visitante']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Visitante?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/visitante/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.visitanteService.delete(id).subscribe(() => {
      this.notification.success('Visitante excluído com sucesso');
      this.router.navigate([`app/visitante`]);
    });
  }
}
