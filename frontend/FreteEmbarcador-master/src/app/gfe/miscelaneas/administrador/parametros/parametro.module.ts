import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule } from '@po-ui/ng-components';

import { ParametroRoutingModule } from './parametro-routing.module';
import { ParametroFormComponent } from './parametro-form/parametro-form.component';
import { ParametroListComponent } from './parametro-list/parametro-list.component';
import { ParametroDetailComponent } from './parametro-detail/parametro-detail.component';
import { ParametroService } from './parametro.service';

@NgModule({
  declarations: [
    ParametroFormComponent,
    ParametroListComponent,
    ParametroDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    ParametroRoutingModule
  ],
  providers: [
    ParametroService
  ]
})
export class ParametroModule { }
