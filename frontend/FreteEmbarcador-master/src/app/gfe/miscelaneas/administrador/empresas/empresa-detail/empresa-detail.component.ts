import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Empresa } from '../empresa.interface';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {

  empresa: Empresa;
  title = 'Detalhando Empresa';

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private empresaService: EmpresaService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.empresaService.get(id).subscribe((empresa: Empresa) => {
      this.empresa = empresa;
      this.title = "Visualização";
    });
  }

  back() {
    this.router.navigate(['app/empresas']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este registro de empresa?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/empresas/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.empresaService.delete(id).subscribe(() => {
      this.notification.success('Registro de empresa removido com sucesso');
      this.router.navigate([`app/empresas`]);
    });
  }
}
