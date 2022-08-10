import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoOperacaoListComponent } from './tipoOperacao-list/tipoOperacao-list.component';
import { TipoOperacaoFormComponent } from './tipoOperacao-form/tipoOperacao-form.component';
import { TipoOperacaoDetailComponent } from './tipoOperacao-detail/tipoOperacao-detail.component';

const routes: Routes = [
  { path: '', component: TipoOperacaoListComponent },
  { path: 'new', component: TipoOperacaoFormComponent },
  { path: 'edit/:id', component: TipoOperacaoFormComponent },
  { path: 'detail/:id', component: TipoOperacaoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoOperacaoRoutingModule { }
