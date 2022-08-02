import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { UnidadeMedida } from '../unidadeMedida.interface';
import { UnidadeMedidaService } from '../unidadeMedida.service';

@Component({
  selector: 'app-unidadeMedida-detail',
  templateUrl: './unidadeMedida-detail.component.html',
  styleUrls: ['./unidadeMedida-detail.component.css']
})
export class UnidadeMedidaDetailComponent implements OnInit {

  title = '';
  uMedida: UnidadeMedida;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private uMedidaService: UnidadeMedidaService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.uMedidaService.get(id).subscribe((uMedida: UnidadeMedida) => {
      this.uMedida = uMedida;
      this.title = 'pais.nome Detail';
    });
  }

  back() {
    this.router.navigate(['app/unidadeMedida']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover esta unidade de medida?',
      title: 'Excluir',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/unidadeMedida/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.uMedidaService.delete(id).subscribe(() => {
      this.notification.success('Unidade de Medida removido com sucesso');
      this.router.navigate([`app/unidadeMedida`]);
    });
  }
}
