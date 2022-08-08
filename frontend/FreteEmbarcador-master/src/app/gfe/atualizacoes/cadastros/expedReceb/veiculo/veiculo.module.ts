import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { VeiculoService } from './veiculo.service';
import { VeiculoRoutingModule } from './veiculo-routing.module';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculoDetailComponent } from './veiculo-detail/veiculo-detail.component';

@NgModule({
  declarations: [
    VeiculoListComponent,
    VeiculoFormComponent,
    VeiculoDetailComponent
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
    VeiculoRoutingModule
  ],
  providers: [
    VeiculoService
  ]
})
export class VeiculoModule { }
