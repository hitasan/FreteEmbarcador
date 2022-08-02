import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadeMedidaListComponent } from './unidadeMedida-list/unidadeMedida-list.component';
import { UnidadeMedidaFormComponent } from './unidadeMedida-form/unidadeMedida-form.component';
import { UnidadeMedidaDetailComponent } from './unidadeMedida-detail/unidadeMedida-detail.component';
import { UnidadeMedidaImportComponent } from './unidadeMedida-import/unidadeMedida-import.component';

const routes: Routes = [
  { path: '', component: UnidadeMedidaListComponent },
  { path: 'new', component: UnidadeMedidaFormComponent },
  { path: 'import', component: UnidadeMedidaImportComponent },
  { path: 'edit/:id', component: UnidadeMedidaFormComponent },
  { path: 'detail/:id', component: UnidadeMedidaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadeMedidaRoutingModule { }
