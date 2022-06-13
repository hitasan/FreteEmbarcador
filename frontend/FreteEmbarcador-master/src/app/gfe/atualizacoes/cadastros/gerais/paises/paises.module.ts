import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  PoPageModule,
  PoTableModule,
  PoDividerModule,
  PoFieldModule,
  PoInfoModule
} from '@po-ui/ng-components';

import { PaisesRoutingModule } from './paises-routing.module';
import { PaisFormComponent } from './pais-form/pais-form.component';
import { PaisesListComponent } from './pais-list/pais-list.component';
import { PaisDetailComponent } from './pais-detail/pais-detail.component';
import { PaisesService } from './paises.service';

@NgModule({
  declarations: [
    PaisFormComponent,
    PaisesListComponent,
    PaisDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    PaisesRoutingModule
  ],
  providers: [
    PaisesService
  ]
})
export class PaisesModule { }
