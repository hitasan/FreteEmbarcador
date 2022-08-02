import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule } from '@po-ui/ng-components';

import { GrupoEmitenteRoutingModule } from './grupoEmitentes-routing.module';
import { GrupoEmitenteFormComponent } from './grupoEmitentes-form/grupoEmitentes-form.component';
import { GrupoEmitenteListComponent } from './grupoEmitentes-list/grupoEmitentes-list.component';
import { GrupoEmitenteDetailComponent } from './grupoEmitentes-detail/grupoEmitentes-detail.component';
import { GrupoEmitenteService } from './grupoEmitentes.service';

@NgModule({
  declarations: [
                  GrupoEmitenteFormComponent,
                  GrupoEmitenteListComponent,
                  GrupoEmitenteDetailComponent
                ],
  imports: [
            CommonModule,
            ReactiveFormsModule,
            PoPageModule,
            PoTableModule,
            PoDividerModule,
            PoFieldModule,
            PoInfoModule,
            GrupoEmitenteRoutingModule
          ],
  providers: [
              GrupoEmitenteService
             ]
})
export class GrupoEmitenteModule { }
