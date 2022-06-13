import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule } from '@po-ui/ng-components';

import { FilialRoutingModule } from './filial-routing.module';
import { FilialFormComponent } from './filial-form/filial-form.component';
import { FilialListComponent } from './filial-list/filial-list.component';
import { FilialDetailComponent } from './filial-detail/filial-detail.component';
import { FilialService } from './filial.service';

@NgModule({
  declarations: [
    FilialFormComponent,
    FilialListComponent,
    FilialDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    FilialRoutingModule
  ],
  providers: [
    FilialService
  ]
})
export class FilialModule { }
