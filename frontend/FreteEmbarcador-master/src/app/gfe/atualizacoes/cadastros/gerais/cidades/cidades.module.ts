import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule, PoModalModule } from '@po-ui/ng-components';

import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadesListComponent } from './cidade-list/cidades-list.component';
import { CidadeDetailComponent } from './cidade-detail/cidade-detail.component';
import { CidadeImportComponent } from './cidade-import/cidade-import.component';
import { CidadesService } from './cidades.service';

@NgModule({
  declarations: [
    CidadeFormComponent,
    CidadesListComponent,
    CidadeDetailComponent,
    CidadeImportComponent
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
    CidadesRoutingModule
  ],
  providers: [
    CidadesService
  ]
})
export class CidadesModule { }
