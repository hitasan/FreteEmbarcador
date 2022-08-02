import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoDocCargaListComponent } from './tipoDocCarga-list/tipoDocCarga-list.component';
import { TipoDocCargaFormComponent } from './tipoDocCarga-form/tipoDocCarga-form.component';
import { TipoDocCargaDetailComponent } from './tipoDocCarga-detail/tipoDocCarga-detail.component';

const routes: Routes = [
  { path: '', component: TipoDocCargaListComponent },
  { path: 'new', component: TipoDocCargaFormComponent },
  { path: 'edit/:id', component: TipoDocCargaFormComponent },
  { path: 'detail/:id', component: TipoDocCargaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDocCargaRoutingModule { }
