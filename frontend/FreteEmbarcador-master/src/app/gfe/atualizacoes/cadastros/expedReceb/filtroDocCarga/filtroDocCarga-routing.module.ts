import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroDocCargaListComponent } from './filtroDocCarga-list/filtroDocCarga-list.component';
import { FiltroDocCargaFormComponent } from './filtroDocCarga-form/filtroDocCarga-form.component';
import { FiltroDocCargaDetailComponent } from './filtroDocCarga-detail/filtroDocCarga-detail.component';

const routes: Routes = [
  { path: '', component: FiltroDocCargaListComponent },
  { path: 'new', component: FiltroDocCargaFormComponent },
  { path: 'edit/:id', component: FiltroDocCargaFormComponent },
  { path: 'detail/:id', component: FiltroDocCargaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltroDocCargaRoutingModule { }
