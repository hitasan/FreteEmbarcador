import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { PracaPedagioService } from './pracaPedagio.service';
import { PracaPedagioRoutingModule } from './pracaPedagio-routing.module';
import { PracaPedagioListComponent } from './pracaPedagio-list/pracaPedagio-list.component';
import { PracaPedagioFormComponent } from './pracaPedagio-form/pracaPedagio-form.component';
import { PracaPedagioDetailComponent } from './pracaPedagio-detail/pracaPedagio-detail.component';

@NgModule({
  declarations: [
    PracaPedagioListComponent,
    PracaPedagioFormComponent,
    PracaPedagioDetailComponent
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
    PracaPedagioRoutingModule
  ],
  providers: [
    PracaPedagioService
  ]
})
export class PracaPedagioModule { }
