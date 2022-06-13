import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { EmpresaDetailComponent } from './empresa-detail/empresa-detail.component';

const routes: Routes = [
  { path: '', component: EmpresaListComponent },
  { path: 'new', component: EmpresaFormComponent },
  { path: 'edit/:id', component: EmpresaFormComponent },
  { path: 'copy/:id', component: EmpresaFormComponent },
  { path: 'detail/:id', component: EmpresaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
