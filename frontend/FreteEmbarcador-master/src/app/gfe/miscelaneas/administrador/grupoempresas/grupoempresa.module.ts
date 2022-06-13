import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule } from '@po-ui/ng-components';

import { GrupoEmpresaRoutingModule } from './grupoempresa-routing.module';
import { GrupoEmpresaFormComponent } from './grupoempresa-form/grupoempresa-form.component';
import { GrupoEmpresaListComponent } from './grupoempresa-list/grupoempresa-list.component';
import { GrupoEmpresaDetailComponent } from './grupoempresa-detail/grupoempresa-detail.component';
import { GrupoEmpresaService } from './grupoempresa.service';

@NgModule({
  declarations: [
    GrupoEmpresaFormComponent,
    GrupoEmpresaListComponent,
    GrupoEmpresaDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    GrupoEmpresaRoutingModule
  ],
  providers: [
    GrupoEmpresaService
  ]
})
export class GrupoEmpresaModule { }
