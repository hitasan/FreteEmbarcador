import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitizadorListComponent } from './unitizador-list/unitizador-list.component';
import { UnitizadorFormComponent } from './unitizador-form/unitizador-form.component';
import { UnitizadorDetailComponent } from './unitizador-detail/unitizador-detail.component';

const routes: Routes = [
  { path: '', component: UnitizadorListComponent },
  { path: 'new', component: UnitizadorFormComponent },
  { path: 'edit/:id', component: UnitizadorFormComponent },
  { path: 'detail/:id', component: UnitizadorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitizadorRoutingModule { }
