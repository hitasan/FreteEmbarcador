import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Pais } from '../pais.interface';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {

  title = '';
  pais: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private paisService: PaisesService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.paisService.get(id).subscribe((pais: Pais) => {
      this.pais = pais;
      this.title = pais.nome;
    });
  }

  back() {
    this.router.navigate(['app/paises']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este país?',
      title: 'Excluir',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/paises/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.paisService.delete(id).subscribe(() => {
      this.notification.success('País removido com sucesso');
      this.router.navigate([`app/paises`]);
    });
  }
}
