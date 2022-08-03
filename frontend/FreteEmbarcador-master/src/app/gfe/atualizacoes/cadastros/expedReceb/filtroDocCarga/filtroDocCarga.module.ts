import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { FiltroDocCargaService } from './filtroDocCarga.service';
import { FiltroDocCargaRoutingModule } from './filtroDocCarga-routing.module';
import { FiltroDocCargaListComponent } from './filtroDocCarga-list/filtroDocCarga-list.component';
import { FiltroDocCargaFormComponent } from './filtroDocCarga-form/filtroDocCarga-form.component';
import { FiltroDocCargaDetailComponent } from './filtroDocCarga-detail/filtroDocCarga-detail.component';

@NgModule({
  declarations: [
    FiltroDocCargaListComponent,
    FiltroDocCargaFormComponent,
    FiltroDocCargaDetailComponent
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
    FiltroDocCargaRoutingModule
  ],
  providers: [
    FiltroDocCargaService
  ]
})
export class FiltroDocCargaModule { }
