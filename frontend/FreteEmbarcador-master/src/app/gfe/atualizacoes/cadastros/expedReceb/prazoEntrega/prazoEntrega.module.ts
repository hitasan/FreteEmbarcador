import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { PrazoEntregaService } from './prazoEntrega.service';
import { PrazoEntregaRoutingModule } from './prazoEntrega-routing.module';
import { PrazoEntregaListComponent } from './prazoEntrega-list/prazoEntrega-list.component';
import { PrazoEntregaFormComponent } from './prazoEntrega-form/prazoEntrega-form.component';
import { PrazoEntregaDetailComponent } from './prazoEntrega-detail/prazoEntrega-detail.component';

@NgModule({
  declarations: [
    PrazoEntregaListComponent,
    PrazoEntregaFormComponent,
    PrazoEntregaDetailComponent
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
    PoTabsModule,
    PrazoEntregaRoutingModule
  ],
  providers: [
    PrazoEntregaService
  ]
})
export class PrazoEntregaModule { }
