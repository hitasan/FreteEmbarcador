import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotoristaListComponent } from './motorista-list/motorista-list.component';
import { MotoristaFormComponent } from './motorista-form/motorista-form.component';
import { MotoristaDetailComponent } from './motorista-detail/motorista-detail.component';

const routes: Routes = [
  { path: '', component: MotoristaListComponent },
  { path: 'new', component: MotoristaFormComponent },
  { path: 'edit/:id', component: MotoristaFormComponent },
  { path: 'detail/:id', component: MotoristaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotoristaRoutingModule { }
