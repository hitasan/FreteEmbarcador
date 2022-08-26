import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { DistanciaCidade } from '../distanciaCidade.interface';
import { DistanciaCidadeService } from '../distanciaCidade.service';

@Component({
  selector: 'app-distanciaCidade-detail',
  templateUrl: './distanciaCidade-detail.component.html',
  styleUrls: ['./distanciaCidade-detail.component.css']
})
export class DistanciaCidadeDetailComponent implements OnInit {

  title = '';
  distanciaCidade: DistanciaCidade;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private distanciaCidadeService: DistanciaCidadeService) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.distanciaCidadeService.get(id).subscribe((distanciaCidade: DistanciaCidade) => {
      this.distanciaCidade = distanciaCidade;
      this.title = "VISUALIZAR - Distância entre Cidades";
    });
  }

  back() {
    this.router.navigate(['app/distanciaCidade']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este cadastro de Distância entre Cidades?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/distanciaCidade/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.distanciaCidadeService.delete(id).subscribe(() => {
      this.notification.success('Distância entre Cidades excluído com sucesso');
      this.router.navigate([`app/distanciaCidade`]);
    });
  }
}
