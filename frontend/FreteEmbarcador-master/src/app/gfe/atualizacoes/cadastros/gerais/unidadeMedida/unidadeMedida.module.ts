import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { UnidadeMedidaService } from './unidadeMedida.service';
import { UnidadeMedidaRoutingModule } from './unidadeMedida-routing.module';
import { UnidadeMedidaFormComponent } from './unidadeMedida-form/unidadeMedida-form.component';
import { UnidadeMedidaListComponent } from './unidadeMedida-list/unidadeMedida-list.component';
import { UnidadeMedidaDetailComponent } from './unidadeMedida-detail/unidadeMedida-detail.component';
import { UnidadeMedidaImportComponent } from './unidadeMedida-import/unidadeMedida-import.component';

@NgModule({
  declarations: [
    UnidadeMedidaFormComponent,
    UnidadeMedidaListComponent,
    UnidadeMedidaDetailComponent,
    UnidadeMedidaImportComponent
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
    UnidadeMedidaRoutingModule
  ],
  providers: [
    UnidadeMedidaService
  ]
})
export class UnidadeMedidaModule { }
