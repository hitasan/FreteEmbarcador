import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';

const routes: Routes = [
  { path: '', component: UsuarioListComponent },
  { path: 'new', component: UsuarioFormComponent },
  { path: 'edit/:id', component: UsuarioFormComponent },
  { path: 'detail/:id', component: UsuarioDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
