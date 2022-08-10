import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { TipoOperacao } from '../tipoOperacao.interface';
import { TipoOperacaoService } from '../tipoOperacao.service';

@Component({
  selector: 'app-tipoOperacao-detail',
  templateUrl: './tipoOperacao-detail.component.html',
  styleUrls: ['./tipoOperacao-detail.component.css']
})
export class TipoOperacaoDetailComponent implements OnInit {

  title = '';
  tipoOperacao: TipoOperacao;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private tipoOperacaoService: TipoOperacaoService) {
    }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.tipoOperacaoService.get(id).subscribe((tipoOperacao: TipoOperacao) => {
      this.tipoOperacao = tipoOperacao;
      this.title = "VISUALIZAR - Tipos de Operação";
    });
  }

  back() {
    this.router.navigate(['app/tipoOperacao']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Tipo de Operação?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/tipoOperacao/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.tipoOperacaoService.delete(id).subscribe(() => {
      this.notification.success('Tipos de Operação excluído com sucesso');
      this.router.navigate([`app/tipoOperacao`]);
    });
  }
}
