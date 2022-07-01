import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { PaisesService } from './paises.service';
import { PaisesRoutingModule } from './paises-routing.module';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { PaisesListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';
import { PaisImportComponent } from './pais-import/pais-import.component';

@NgModule({
  declarations: [
    PaisFormComponent,
    PaisesListComponent,
    PaisDetailComponent,
    PaisImportComponent
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
    PaisesRoutingModule
  ],
  providers: [
    PaisesService
  ]
})
export class PaisesModule { }
