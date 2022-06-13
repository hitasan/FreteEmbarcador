import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericaListComponent } from './generica-list/generica-list.component';
import { GenericaFormComponent } from './generica-form/generica-form.component';
import { GenericaDetailComponent } from './generica-detail/generica-detail.component';

const routes: Routes = [
  { path: '', component: GenericaListComponent },
  { path: 'new', component: GenericaFormComponent },
  { path: 'edit/:id', component: GenericaFormComponent },
  { path: 'copy/:id', component: GenericaFormComponent },
  { path: 'detail/:id', component: GenericaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericasRoutingModule { }
