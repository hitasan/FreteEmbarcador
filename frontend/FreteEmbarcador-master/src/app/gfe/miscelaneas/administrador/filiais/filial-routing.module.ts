import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilialListComponent } from './filial-list/filial-list.component';
import { FilialFormComponent } from './filial-form/filial-form.component';
import { FilialDetailComponent } from './filial-detail/filial-detail.component';

const routes: Routes = [
  { path: '', component: FilialListComponent },
  { path: 'new', component: FilialFormComponent },
  { path: 'edit/:id', component: FilialFormComponent },
  { path: 'copy/:id', component: FilialFormComponent },
  { path: 'detail/:id', component: FilialDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilialRoutingModule { }
