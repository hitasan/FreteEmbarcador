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

import { GenericasRoutingModule } from './generica-routing.module';
import { GenericaFormComponent } from './generica-form/generica-form.component';
import { GenericaListComponent } from './generica-list/generica-list.component';
import { GenericaDetailComponent } from './generica-detail/generica-detail.component';
import { GenericaService } from './generica.service';

@NgModule({
  declarations: [
    GenericaFormComponent,
    GenericaListComponent,
    GenericaDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    GenericasRoutingModule
  ],
  providers: [
    GenericaService
  ]
})
export class GenericasModule { }
