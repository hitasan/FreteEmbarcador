import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { PrazoEntrega } from '../prazoEntrega.interface';
import { PrazoEntregaService } from '../prazoEntrega.service';

@Component({
  selector: 'app-prazoEntrega-detail',
  templateUrl: './prazoEntrega-detail.component.html',
  styleUrls: ['./prazoEntrega-detail.component.css']
})
export class PrazoEntregaDetailComponent implements OnInit {

  title = '';
  prazoEntrega: PrazoEntrega;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private prazoEntregaService: PrazoEntregaService) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.prazoEntregaService.get(id).subscribe((prazoEntrega: PrazoEntrega) => {
      this.prazoEntrega = prazoEntrega;
      this.title = "VISUALIZAR - Prazos de Entrega";
    });
  }

  back() {
    this.router.navigate(['app/prazoEntrega']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Prazo de Entrega?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/prazoEntrega/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.prazoEntregaService.delete(id).subscribe(() => {
      this.notification.success('Prazo de Entrega excluído com sucesso');
      this.router.navigate([`app/prazoEntrega`]);
    });
  }
}
