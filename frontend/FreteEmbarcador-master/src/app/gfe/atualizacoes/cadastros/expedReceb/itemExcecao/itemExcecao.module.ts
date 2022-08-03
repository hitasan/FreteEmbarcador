import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { ItemExcecaoService } from './itemExcecao.service';
import { ItemExcecaoRoutingModule } from './itemExcecao-routing.module';
import { ItemExcecaoListComponent } from './itemExcecao-list/itemExcecao-list.component';
import { ItemExcecaoFormComponent } from './itemExcecao-form/itemExcecao-form.component';
import { ItemExcecaoDetailComponent } from './itemExcecao-detail/itemExcecao-detail.component';

@NgModule({
  declarations: [
    ItemExcecaoListComponent,
    ItemExcecaoFormComponent,
    ItemExcecaoDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    PoModalModule,
    ItemExcecaoRoutingModule
  ],
  providers: [
    ItemExcecaoService
  ]
})
export class ItemExcecaoModule { }
