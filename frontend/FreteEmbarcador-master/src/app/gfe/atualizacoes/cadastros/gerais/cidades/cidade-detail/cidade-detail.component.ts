import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService, PoTableColumn } from '@po-ui/ng-components';

import { Cidade } from '../cidade.interface';
import { CidadesService } from '../cidades.service';

@Component({
  selector: 'app-cidade-detail',
  templateUrl: './cidade-detail.component.html',
  styleUrls: ['./cidade-detail.component.css']
})
export class CidadeDetailComponent implements OnInit {

  title = 'Visualização';
  cidade: Cidade;
  percISSTpOcorr: Array<any>;

  readonly columnsTbl: Array<PoTableColumn> = [
    { label: 'Tp Ocorrência', property: 'tpOcor', width: '20%' },
    { label: 'Dsc Tp Oco', property: 'descrTpOco' },
    { label: '% ISS', property: 'percISS', type: 'number', width: '20%' }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private cidadeService: CidadesService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.cidadeService.get(id).subscribe((cidade: Cidade) => {
      this.cidade = cidade;

      this.title = "TESTANDO CIDADE DETAIL";
    });
  }

  back() {
    this.router.navigate(['app/cidades']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza remover esta cidade?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/cidades/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.cidadeService.delete(id).subscribe(() => {
      this.notification.success('Cidade removida com sucesso');

      this.router.navigate([`app/cidades`]);
    });
  }
}
