import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PoPageModule, PoTableModule, PoDividerModule, PoFieldModule, PoInfoModule } from '@po-ui/ng-components';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent,
    UsuarioDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PoPageModule,
    PoTableModule,
    PoDividerModule,
    PoFieldModule,
    PoInfoModule,
    UsuarioRoutingModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
