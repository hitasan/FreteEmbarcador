import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule } from '@po-ui/ng-components';

import { UnidadeNegocioRoutingModule } from './unidadenegocio-routing.module';
import { UnidadeNegocioFormComponent } from './unidadenegocio-form/unidadenegocio-form.component';
import { UnidadeNegocioListComponent } from './unidadenegocio-list/unidadenegocio-list.component';
import { UnidadeNegocioDetailComponent } from './unidadenegocio-detail/unidadenegocio-detail.component';
import { UnidadeNegocioService } from './unidadenegocio.service';

@NgModule({
  declarations: [
    UnidadeNegocioFormComponent,
    UnidadeNegocioListComponent,
    UnidadeNegocioDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    UnidadeNegocioRoutingModule
  ],
  providers: [
    UnidadeNegocioService
  ]
})
export class UnidadeNegocioModule { }
