import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { MotoristaService } from './motorista.service';
import { MotoristaRoutingModule } from './motorista-routing.module';
import { MotoristaListComponent } from './motorista-list/motorista-list.component';
import { MotoristaFormComponent } from './motorista-form/motorista-form.component';
import { MotoristaDetailComponent } from './motorista-detail/motorista-detail.component';

@NgModule({
  declarations: [
    MotoristaListComponent,
    MotoristaFormComponent,
    MotoristaDetailComponent
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
    MotoristaRoutingModule
  ],
  providers: [
    MotoristaService
  ]
})
export class MotoristaModule { }
