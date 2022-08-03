import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { FiltroDocCarga } from '../filtroDocCarga.interface';
import { FiltroDocCargaService } from '../filtroDocCarga.service';

@Component({
  selector: 'app-filtroDocCarga-detail',
  templateUrl: './filtroDocCarga-detail.component.html',
  styleUrls: ['./filtroDocCarga-detail.component.css']
})
export class FiltroDocCargaDetailComponent implements OnInit {

  title = '';
  filtroDocCarga: FiltroDocCarga;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private filtroDocCargaService: FiltroDocCargaService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.filtroDocCargaService.get(id).subscribe((filtroDocCarga: FiltroDocCarga) => {
      this.filtroDocCarga = filtroDocCarga;
      this.title = "VISUALIZAR - Filtros de Documento de Carga";
    });
  }

  back() {
    this.router.navigate(['app/filtroDocCarga']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Filtro?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/filtroDocCarga/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.filtroDocCargaService.delete(id).subscribe(() => {
      this.notification.success('Filtro excluído com sucesso');
      this.router.navigate([`app/filtroDocCarga`]);
    });
  }
}
