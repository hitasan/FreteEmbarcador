import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { VisitanteService } from './visitante.service';
import { VisitanteRoutingModule } from './visitante-routing.module';
import { VisitanteListComponent } from './visitante-list/visitante-list.component';
import { VisitanteFormComponent } from './visitante-form/visitante-form.component';
import { VisitanteDetailComponent } from './visitante-detail/visitante-detail.component';

@NgModule({
  declarations: [
    VisitanteListComponent,
    VisitanteFormComponent,
    VisitanteDetailComponent
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
    VisitanteRoutingModule
  ],
  providers: [
    VisitanteService
  ]
})
export class VisitanteModule { }
