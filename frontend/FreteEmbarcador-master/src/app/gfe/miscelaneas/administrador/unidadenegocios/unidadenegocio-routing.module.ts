import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeNegocioListComponent } from './unidadenegocio-list/unidadenegocio-list.component';
import { UnidadeNegocioFormComponent } from './unidadenegocio-form/unidadenegocio-form.component';
import { UnidadeNegocioDetailComponent } from './unidadenegocio-detail/unidadenegocio-detail.component';

const routes: Routes = [
  { path: '', component: UnidadeNegocioListComponent },
  { path: 'new', component: UnidadeNegocioFormComponent },
  { path: 'edit/:id', component: UnidadeNegocioFormComponent },
  { path: 'copy/:id', component: UnidadeNegocioFormComponent },
  { path: 'detail/:id', component: UnidadeNegocioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadeNegocioRoutingModule { }
