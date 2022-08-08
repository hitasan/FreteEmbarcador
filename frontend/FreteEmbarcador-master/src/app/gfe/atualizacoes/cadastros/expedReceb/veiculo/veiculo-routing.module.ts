import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculoDetailComponent } from './veiculo-detail/veiculo-detail.component';

const routes: Routes = [
  { path: '', component: VeiculoListComponent },
  { path: 'new', component: VeiculoFormComponent },
  { path: 'edit/:id', component: VeiculoFormComponent },
  { path: 'detail/:id', component: VeiculoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule { }
