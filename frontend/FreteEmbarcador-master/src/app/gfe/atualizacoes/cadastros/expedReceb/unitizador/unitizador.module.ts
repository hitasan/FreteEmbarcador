import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { UnitizadorService } from './unitizador.service';
import { UnitizadorRoutingModule } from './unitizador-routing.module';
import { UnitizadorListComponent } from './unitizador-list/unitizador-list.component';
import { UnitizadorFormComponent } from './unitizador-form/unitizador-form.component';
import { UnitizadorDetailComponent } from './unitizador-detail/unitizador-detail.component';

@NgModule({
  declarations: [
    UnitizadorListComponent,
    UnitizadorFormComponent,
    UnitizadorDetailComponent
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
    UnitizadorRoutingModule
  ],
  providers: [
    UnitizadorService
  ]
})
export class UnitizadorModule { }
