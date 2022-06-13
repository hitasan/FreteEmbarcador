import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoPageAction, PoTableAction, PoTableColumn, PoDialogService } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

import { PaisesService } from '../paises.service';
import { Pais } from '../pais.interface';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisesListComponent implements OnInit {

  paises: Array<Pais>;
  isTableLoading = false;

  readonly actions: Array<PoPageAction> = [
    { label: 'Adicionar', url: 'app/paises/new', icon: 'po-icon-plus' },
    //{ label: 'Editar', action: pais => this.router.navigate([`app/paises/edit/${pais.id}`])},
    //{ label: 'Visualizar', action: pais => this.router.navigate([`app/paises/detail/${pais.id}`]) },
    //{ label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) },
    //{ label: 'Copiar', separator: true, icon: 'po-icon po-icon-copy' }
  ];

  readonly tableActions: Array<PoTableAction> = [ // Comentar apos botões funcionarem pois ações dever ser pelo botões para nao ter menu em cada item da tabela
    { label: 'Editar', action: pais => this.router.navigate([`app/paises/edit/${pais.id}`])},
    { label: 'Visualizar', action: pais => this.router.navigate([`app/paises/detail/${pais.id}`]) },
    { label: 'Remover', separator: true, type: 'danger', icon: 'po-icon-delete', action: this.onRemove.bind(this) },
    { label: 'Copiar', separator: true, icon: 'po-icon po-icon-copy' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { label: 'Filial', property: 'filial' },
    { label: 'Id', property: 'id' },
    { label: 'Cod. do País', property: 'codigo' },
    { label: 'Descrição', property: 'nome' },
    { label: 'Sigla', property: 'sigla' },
    { label: 'Idioma', property: 'idioma' },
    { label: 'Descr. Idioma', property: 'descIdioma' },
    { label: 'Dinalad', property: 'dinalad' },
    { label: 'Naladi', property: 'naladi' },
    { label: 'C.O Aladi', property: 'certOrigemAladi' },
    { label: 'C.O. Comum', property: 'certOrigemComum' },
    { label: 'C.O. Mercosul', property: 'certOrigemMercosul' },
    { label: 'C.O. SGPC', property: 'certOrigemSGPC' },
    { label: 'Exige L.I.', property: 'exigeLincImport' },
    { label: 'País Inglês', property: 'paisIngles' },
    { label: 'Cod. Abics', property: 'codAbics' },
    { label: 'Cod. RIEX', property: 'codigoRIEX' },
    { label: 'Cod. Siscomex', property: 'codSisxomex' },
    { label: 'Cod. Fiesp', property: 'codigoFiesp' },
    { label: 'Clave Mexico', property: 'claveMexico' },
    { label: 'Nacionalidade', property: 'nacionalidad' },
    { label: 'Codigo ERP', property: 'codERP' },
    { label: 'Cod. País D.U.E.', property: 'codPaisDUE' }
  ];

  constructor(
    private router: Router,
    private paisService: PaisesService,
    private dialog: PoDialogService) { }

  ngOnInit() {
    this.isTableLoading = true;

    this.paisService.getAll().subscribe((paises: Array<Pais>) => {
      this.paises = paises;
      this.isTableLoading = false;
    });
  }

  private onRemove({ id }: Pais) {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este país?',
      title: 'Remoção',
      confirm: this.confirmRemove.bind(this, id)
    });
  }

  private confirmRemove(id: number) {
    this.isTableLoading = true;

    this.paisService.delete(id).subscribe(() => {
      this.paises = this.paises.filter(pais => pais.id !== id);
      this.isTableLoading = false;
    });
  }
}
