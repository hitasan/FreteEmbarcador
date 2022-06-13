import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoEmpresaListComponent } from './grupoempresa-list/grupoempresa-list.component';
import { GrupoEmpresaFormComponent } from './grupoempresa-form/grupoempresa-form.component';
import { GrupoEmpresaDetailComponent } from './grupoempresa-detail/grupoempresa-detail.component';

const routes: Routes = [
  { path: '', component: GrupoEmpresaListComponent },
  { path: 'new', component: GrupoEmpresaFormComponent },
  { path: 'edit/:id', component: GrupoEmpresaFormComponent },
  { path: 'copy/:id', component: GrupoEmpresaFormComponent },
  { path: 'detail/:id', component: GrupoEmpresaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoEmpresaRoutingModule { }
