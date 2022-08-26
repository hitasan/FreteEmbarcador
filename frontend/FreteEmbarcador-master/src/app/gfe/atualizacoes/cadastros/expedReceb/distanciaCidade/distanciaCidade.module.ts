import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { DistanciaCidadeService } from './distanciaCidade.service';
import { DistanciaCidadeRoutingModule } from './distanciaCidade-routing.module';
import { DistanciaCidadeListComponent } from './distanciaCidade-list/distanciaCidade-list.component';
import { DistanciaCidadeFormComponent } from './distanciaCidade-form/distanciaCidade-form.component';
import { DistanciaCidadeDetailComponent } from './distanciaCidade-detail/distanciaCidade-detail.component';

@NgModule({
  declarations: [
    DistanciaCidadeListComponent,
    DistanciaCidadeFormComponent,
    DistanciaCidadeDetailComponent
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
    DistanciaCidadeRoutingModule
  ],
  providers: [
    DistanciaCidadeService
  ]
})
export class DistanciaCidadeModule { }
