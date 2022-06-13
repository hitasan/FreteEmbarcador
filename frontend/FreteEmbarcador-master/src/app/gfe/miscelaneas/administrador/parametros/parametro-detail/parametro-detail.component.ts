import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Parametro } from '../parametro.interface';
import { ParametroService } from '../parametro.service';

@Component({
  selector: 'app-parametro-detail',
  templateUrl: './parametro-detail.component.html',
  styleUrls: ['./parametro-detail.component.css']
})
export class ParametroDetailComponent implements OnInit {

  parametro: Parametro;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private parametroService: ParametroService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.parametroService.get(id).subscribe((parametro: Parametro) => {
      this.parametro = parametro;
      this.title = "Visualização";
    });
  }

  back() {
    this.router.navigate(['app/parametros']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de parâmetro?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/parametros/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.parametroService.delete(id).subscribe(() => {
      this.notification.success('Registro de parâmetro removido com sucesso');
      this.router.navigate([`app/parametros`]);
    });
  }
}
