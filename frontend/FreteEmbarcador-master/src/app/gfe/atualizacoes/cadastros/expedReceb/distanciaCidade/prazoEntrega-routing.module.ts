import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrazoEntregaListComponent } from './prazoEntrega-list/prazoEntrega-list.component';
import { PrazoEntregaFormComponent } from './prazoEntrega-form/prazoEntrega-form.component';
import { PrazoEntregaDetailComponent } from './prazoEntrega-detail/prazoEntrega-detail.component';

const routes: Routes = [
  { path: '', component: PrazoEntregaListComponent },
  { path: 'new', component: PrazoEntregaFormComponent },
  { path: 'edit/:id', component: PrazoEntregaFormComponent },
  { path: 'detail/:id', component: PrazoEntregaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrazoEntregaRoutingModule { }
