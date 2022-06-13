import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaisesListComponent } from './pais-list/pais-list.component';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';

const routes: Routes = [
  { path: '', component: PaisesListComponent },
  { path: 'new', component: PaisFormComponent },
  { path: 'edit/:id', component: PaisFormComponent },
  { path: 'detail/:id', component: PaisDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
