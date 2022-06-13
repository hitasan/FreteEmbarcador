import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Generica } from '../generica.interface';
import { GenericaService } from '../generica.service';

@Component({
  selector: 'app-generica-detail',
  templateUrl: './generica-detail.component.html',
  styleUrls: ['./generica-detail.component.css']
})
export class GenericaDetailComponent implements OnInit {

  generica: Generica;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private genericaService: GenericaService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.genericaService.get(id).subscribe((generica: Generica) => {
      this.generica = generica;
      this.title = generica.tabela;
    });
  }

  back() {
    this.router.navigate(['app/genericas']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de tabela generica?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/genericas/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.genericaService.delete(id).subscribe(() => {
      this.notification.success('Registro de tabela generica removido com sucesso');
      this.router.navigate([`app/genericas`]);
    });
  }
}
