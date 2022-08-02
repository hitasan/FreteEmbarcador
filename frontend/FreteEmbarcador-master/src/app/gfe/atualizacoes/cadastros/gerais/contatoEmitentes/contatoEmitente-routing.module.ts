import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatoEmitenteListComponent } from './contatoEmitente-list/contatoEmitente-list.component';
import { ContatoEmitenteFormComponent } from './contatoEmitente-form/contatoEmitente-form.component';
import { ContatoEmitenteDetailComponent } from './contatoEmitente-detail/contatoEmitente-detail.component';
import { ContatoEmitenteImportComponent } from './contatoEmitente-import/contatoEmitente-import.component';

const routes: Routes = [
  { path: '', component: ContatoEmitenteListComponent },
  { path: 'new', component: ContatoEmitenteFormComponent },
  { path: 'import', component: ContatoEmitenteImportComponent },
  { path: 'edit/:id', component: ContatoEmitenteFormComponent },
  { path: 'detail/:id', component: ContatoEmitenteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoEmitenteRoutingModule { }
