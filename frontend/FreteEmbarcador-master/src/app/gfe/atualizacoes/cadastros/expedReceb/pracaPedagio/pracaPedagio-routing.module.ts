import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracaPedagioListComponent } from './pracaPedagio-list/pracaPedagio-list.component';
import { PracaPedagioFormComponent } from './pracaPedagio-form/pracaPedagio-form.component';
import { PracaPedagioDetailComponent } from './pracaPedagio-detail/pracaPedagio-detail.component';

const routes: Routes = [
  { path: '', component: PracaPedagioListComponent },
  { path: 'new', component: PracaPedagioFormComponent },
  { path: 'edit/:id', component: PracaPedagioFormComponent },
  { path: 'detail/:id', component: PracaPedagioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracaPedagioRoutingModule { }
