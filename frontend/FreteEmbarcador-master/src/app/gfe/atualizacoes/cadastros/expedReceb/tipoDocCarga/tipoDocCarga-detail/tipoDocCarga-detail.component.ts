import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { TipoDocCarga } from '../tipoDocCarga.interface';
import { TipoDocCargaService } from '../tipoDocCarga.service';

@Component({
  selector: 'app-tipoDocCarga-detail',
  templateUrl: './tipoDocCarga-detail.component.html',
  styleUrls: ['./tipoDocCarga-detail.component.css']
})
export class TipoDocCargaDetailComponent implements OnInit {

  title = '';
  tipoDocCarga: TipoDocCarga;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private tipoDocCargaService: TipoDocCargaService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.tipoDocCargaService.get(id).subscribe((tpDocCarga: TipoDocCarga) => {
      this.tipoDocCarga = tpDocCarga;

      this.title = "VISUALIZAR - Tipo de Documento de Carga";
    });
  }

  back() {
    this.router.navigate(['app/tipoDocCarga']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza remover este Tipo de Documento de Carga?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/tipoDocCarga/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.tipoDocCargaService.delete(id).subscribe(() => {
      this.notification.success('Tipo de Documento de Carga removido com sucesso');

      this.router.navigate([`app/tipoDocCarga`]);
    });
  }
}
