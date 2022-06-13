import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { GrupoEmpresa } from '../grupoempresa.interface';
import { GrupoEmpresaService } from '../grupoempresa.service';

@Component({
  selector: 'app-grupoempresa-detail',
  templateUrl: './grupoempresa-detail.component.html',
  styleUrls: ['./grupoempresa-detail.component.css']
})
export class GrupoEmpresaDetailComponent implements OnInit {

  grupoempresa: GrupoEmpresa;
  title = 'Detalhando';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private grupoempresaService: GrupoEmpresaService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.grupoempresaService.get(id).subscribe((grupoempresa: GrupoEmpresa) => {
      this.grupoempresa = grupoempresa;
      this.title = "Visualização";
    });
  }

  back() {
    this.router.navigate(['app/grupoempresas']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de grupo de empresa?',
      title: 'Exclusão',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/grupoempresas/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.grupoempresaService.delete(id).subscribe(() => {
      this.notification.success('Registro de grupo de empresa removido com sucesso');
      this.router.navigate([`app/grupoempresas`]);
    });
  }
}
