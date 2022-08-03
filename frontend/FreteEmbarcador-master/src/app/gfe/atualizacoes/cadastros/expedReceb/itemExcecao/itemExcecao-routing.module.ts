import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemExcecaoListComponent } from './itemExcecao-list/itemExcecao-list.component';
import { ItemExcecaoFormComponent } from './itemExcecao-form/itemExcecao-form.component';
import { ItemExcecaoDetailComponent } from './itemExcecao-detail/itemExcecao-detail.component';

const routes: Routes = [
  { path: '', component: ItemExcecaoListComponent },
  { path: 'new', component: ItemExcecaoFormComponent },
  { path: 'edit/:id', component: ItemExcecaoFormComponent },
  { path: 'detail/:id', component: ItemExcecaoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemExcecaoRoutingModule { }
