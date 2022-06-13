import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

import { CidadesService } from '../cidades.service';
import { Cidade } from '../cidade.interface';

@Component({
  selector: 'app-cidades-list',
  templateUrl: './cidades-list.component.html',
  styleUrls: ['./cidades-list.component.css']
})
export class CidadesListComponent implements OnInit {

  cidades: Array<Cidade>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/cidades/new', icon: 'po-icon-plus' }
  ];

  readonly tableActions: Array<PoTableAction> = [
    { label: 'Editar', action: cidade => this.router.navigate([`app/cidades/edit/${cidade.id}`])},
    { label: 'Visualizar', action: cidade => this.router.navigate([`app/cidades/detail/${cidade.id}`]) },
    { label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Nome', property: 'name' },
    { label: 'Email', property: 'email' },
    { label: 'CPF', property: 'cpf' }
  ];

  constructor(
    private router: Router,
    private cidadeService: CidadesService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.cidadeService.getAll().subscribe((cidades: Array<Cidade>) => {
      this.cidades = cidades;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Cidade) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover esta cidade?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.cidadeService.delete(id).subscribe(() => {
      this.cidades = this.cidades.filter(cidade => cidade.id !== id);
      this.isTableLoading = false;
    });
  }
}
