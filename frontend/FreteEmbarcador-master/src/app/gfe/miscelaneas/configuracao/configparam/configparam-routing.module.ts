import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigParamFormComponent } from './configparam-form/configparam-form.component';

const routes: Routes = [
  { path: '', component: ConfigParamFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigParamRoutingModule { }
