import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistanciaCidadeListComponent } from './distanciaCidade-list/distanciaCidade-list.component';
import { DistanciaCidadeFormComponent } from './distanciaCidade-form/distanciaCidade-form.component';
import { DistanciaCidadeDetailComponent } from './distanciaCidade-detail/distanciaCidade-detail.component';

const routes: Routes = [
  { path: '', component: DistanciaCidadeListComponent },
  { path: 'new', component: DistanciaCidadeFormComponent },
  { path: 'edit/:id', component: DistanciaCidadeFormComponent },
  { path: 'detail/:id', component: DistanciaCidadeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistanciaCidadeRoutingModule { }
