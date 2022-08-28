import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitanteListComponent } from './visitante-list/visitante-list.component';
import { VisitanteFormComponent } from './visitante-form/visitante-form.component';
import { VisitanteDetailComponent } from './visitante-detail/visitante-detail.component';

const routes: Routes = [
  { path: '', component: VisitanteListComponent },
  { path: 'new', component: VisitanteFormComponent },
  { path: 'edit/:id', component: VisitanteFormComponent },
  { path: 'detail/:id', component: VisitanteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitanteRoutingModule { }
