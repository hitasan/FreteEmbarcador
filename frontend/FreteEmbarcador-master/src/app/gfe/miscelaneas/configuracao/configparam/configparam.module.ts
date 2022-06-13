import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule,PoTabsModule } from '@po-ui/ng-components';

import { ConfigParamRoutingModule } from './configparam-routing.module';
import { ConfigParamFormComponent } from './configparam-form/configparam-form.component';
import { ConfigParamService } from './configparam.service';

@NgModule({
  declarations: [
    ConfigParamFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    PoTabsModule,
    ConfigParamRoutingModule
  ],
  providers: [
    ConfigParamService
  ]
})
export class ConfigParamModule { }
