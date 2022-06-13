import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Filial } from '../filial.interface';
import { FilialService } from '../filial.service';

@Component({
  selector: 'app-filial-detail',
  templateUrl: './filial-detail.component.html',
  styleUrls: ['./filial-detail.component.css']
})
export class FilialDetailComponent implements OnInit {

  filial: Filial;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private filialService: FilialService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.filialService.get(id).subscribe((filial: Filial) => {
      this.filial = filial;
      this.title = "Visualização";
    });
  }

  back() {
    this.router.navigate(['app/filiais']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de filial?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/filiais/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.filialService.delete(id).subscribe(() => {
      this.notification.success('Registro de filial removido com sucesso');
      this.router.navigate([`app/filiais`]);
    });
  }
}
