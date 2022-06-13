import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParametroListComponent } from './parametro-list/parametro-list.component';
import { ParametroFormComponent } from './parametro-form/parametro-form.component';
import { ParametroDetailComponent } from './parametro-detail/parametro-detail.component';

const routes: Routes = [
  { path: '', component: ParametroListComponent },
  { path: 'new', component: ParametroFormComponent },
  { path: 'edit/:id', component: ParametroFormComponent },
  { path: 'detail/:id', component: ParametroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametroRoutingModule { }
