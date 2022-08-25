import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService, PoTableColumn } from '@po-ui/ng-components';

import { PracaPedagio } from '../pracaPedagio.interface';
import { PracaPedagioService } from '../pracaPedagio.service';

@Component({
  selector: 'app-pracaPedagio-detail',
  templateUrl: './pracaPedagio-detail.component.html',
  styleUrls: ['./pracaPedagio-detail.component.css']
})
export class PracaPedagioDetailComponent implements OnInit {

  title = '';
  pracaPedagio: PracaPedagio;
  pracaXtarifa: Array<PracaPedagio>;
  pracaXrota: Array<PracaPedagio>;

  readonly colxtar: Array<PoTableColumn> = [
    { label: 'Data vig. ini'  , property: 'dtVigIni', width: '5%' },
    { label: 'Cat. Pedágio'   , property: 'catPed', width: '10%' },
    { label: 'Desc. Cat. Ped.', property: 'descCatPed' },
    { label: 'Valor'          , property: 'valor', width: '10%' }
  ];
  readonly colxrota: Array<PoTableColumn> = [
    { label: 'Cidade Origem'    , property: 'cidOrigem', width: '10%' },
    { label: 'Nome Origem'      , property: 'nomeOrigem' },
    { label: 'UF Origem'        , property: 'ufOrigem', width: '5%' },
    { label: 'Cidade Destino'   , property: 'cidDestino', width: '10%' },
    { label: 'Nome Destino'     , property: 'nomeDestino' },
    { label: 'UF Destino'       , property: 'ufDestino', width: '5%' },
    { label: 'Região Origem'    , property: 'regOrigem', width: '5%' },
    { label: 'Nome Reg. Origem' , property: 'nomeRegOrigem' },
    { label: 'Região Destino'   , property: 'regDestino', width: '5%' },
    { label: 'Nome Reg. Destino', property: 'nomeRegDestino' }
  ];

  constructor( private activatedRoute: ActivatedRoute,
               private notification: PoNotificationService,
               private dialog: PoDialogService,
               private router: Router,
               private pracaPedagioService: PracaPedagioService) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.pracaPedagioService.get(id).subscribe((pracaPedagio: PracaPedagio) => {
      this.pracaPedagio = pracaPedagio;
      this.title = "VISUALIZAR - Praça de Pedágio";
    });
  }

  back() {
    this.router.navigate(['app/pracaPedagio']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir esta Praça de Pedágio?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/pracaPedagio/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.pracaPedagioService.delete(id).subscribe(() => {
      this.notification.success('Praça de Pedágio excluída com sucesso');
      this.router.navigate([`app/pracaPedagio`]);
    });
  }
}
