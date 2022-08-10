import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule, PoTabsModule } from '@po-ui/ng-components';

import { TipoOperacaoService } from './tipoOperacao.service';
import { TipoOperacaoRoutingModule } from './tipoOperacao-routing.module';
import { TipoOperacaoListComponent } from './tipoOperacao-list/tipoOperacao-list.component';
import { TipoOperacaoFormComponent } from './tipoOperacao-form/tipoOperacao-form.component';
import { TipoOperacaoDetailComponent } from './tipoOperacao-detail/tipoOperacao-detail.component';

@NgModule({
  declarations: [
    TipoOperacaoListComponent,
    TipoOperacaoFormComponent,
    TipoOperacaoDetailComponent
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
    TipoOperacaoRoutingModule
  ],
  providers: [
    TipoOperacaoService
  ]
})
export class TipoOperacaoModule { }
