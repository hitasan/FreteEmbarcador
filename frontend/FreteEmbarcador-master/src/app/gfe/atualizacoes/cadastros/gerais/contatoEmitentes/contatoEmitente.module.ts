import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { ContatoEmitenteService } from './contatoEmitente.service';
import { ContatoEmitenteRoutingModule } from './contatoEmitente-routing.module';
import { ContatoEmitenteFormComponent } from './contatoEmitente-form/contatoEmitente-form.component';
import { ContatoEmitenteListComponent } from './contatoEmitente-list/contatoEmitente-list.component';
import { ContatoEmitenteDetailComponent } from './contatoEmitente-detail/contatoEmitente-detail.component';
import { ContatoEmitenteImportComponent } from './contatoEmitente-import/contatoEmitente-import.component';

@NgModule({
  declarations: [
    ContatoEmitenteFormComponent,
    ContatoEmitenteListComponent,
    ContatoEmitenteDetailComponent,
    ContatoEmitenteImportComponent
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
    ContatoEmitenteRoutingModule
  ],
  providers: [
    ContatoEmitenteService
  ]
})
export class ContatoEmitenteModule { }
