import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupoEmitenteListComponent } from './grupoEmitentes-list/grupoEmitentes-list.component';
import { GrupoEmitenteFormComponent } from './grupoEmitentes-form/grupoEmitentes-form.component';
import { GrupoEmitenteDetailComponent } from './grupoEmitentes-detail/grupoEmitentes-detail.component';

const routes: Routes = [
  { path: '', component: GrupoEmitenteListComponent },
  { path: 'new', component: GrupoEmitenteFormComponent },
  { path: 'edit/:id', component: GrupoEmitenteFormComponent },
  { path: 'detail/:id', component: GrupoEmitenteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoEmitenteRoutingModule { }
