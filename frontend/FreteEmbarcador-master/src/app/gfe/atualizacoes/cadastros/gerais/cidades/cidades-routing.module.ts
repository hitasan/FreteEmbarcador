import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadesListComponent } from './cidade-list/cidades-list.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeDetailComponent } from './cidade-detail/cidade-detail.component';
import { CidadeImportComponent } from './cidade-import/cidade-import.component';

const routes: Routes = [
  { path: '', component: CidadesListComponent },
  { path: 'new', component: CidadeFormComponent },
  { path: 'import', component: CidadeImportComponent },
  { path: 'edit/:id', component: CidadeFormComponent },
  { path: 'detail/:id', component: CidadeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadesRoutingModule { }
