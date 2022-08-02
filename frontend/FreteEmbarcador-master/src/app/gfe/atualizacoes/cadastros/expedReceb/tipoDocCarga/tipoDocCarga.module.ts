import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { TipoDocCargaService } from './tipoDocCarga.service';
import { TipoDocCargaRoutingModule } from './tipoDocCarga-routing.module';
import { TipoDocCargaListComponent } from './tipoDocCarga-list/tipoDocCarga-list.component';
import { TipoDocCargaFormComponent } from './tipoDocCarga-form/tipoDocCarga-form.component';
import { TipoDocCargaDetailComponent } from './tipoDocCarga-detail/tipoDocCarga-detail.component';

@NgModule({
  declarations: [
    TipoDocCargaListComponent,
    TipoDocCargaFormComponent,
    TipoDocCargaDetailComponent
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
    TipoDocCargaRoutingModule
  ],
  providers: [
    TipoDocCargaService
  ]
})
export class TipoDocCargaModule { }
