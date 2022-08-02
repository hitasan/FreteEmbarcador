import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      // Atualizações
        // Cadastros
          // Gerais
          { path: 'paises', loadChildren: () => import('../gfe/atualizacoes/cadastros/gerais/paises/paises.module').then(m => m.PaisesModule) },
          { path: 'cidades', loadChildren: () => import('../gfe/atualizacoes/cadastros/gerais/cidades/cidades.module').then(m => m.CidadesModule) },
          { path: 'grupoEmitentes', loadChildren: () => import('../gfe/atualizacoes/cadastros/gerais/grupoEmitentes/grupoEmitentes.module').then(m => m.GrupoEmitenteModule) },
          //{ path: 'emitentes', loadChildren: () => import('../gfe/atualizacoes/cadastros/gerais/emitentes/emitentes.module').then(m => m.EmitenteModule) },
          { path: 'contatoEmitentes', loadChildren: () => import('../gfe/atualizacoes/cadastros/gerais/contatoEmitentes/contatoEmitente.module').then(m => m.ContatoEmitenteModule) },
          { path: 'unidMedidas', loadChildren: () => import('../gfe/atualizacoes/cadastros/gerais/unidadeMedida/unidadeMedida.module').then(m => m.UnidadeMedidaModule) },

          // Expedicao/Recebimento
          { path: 'tipoDocCarga', loadChildren: () => import('../gfe/atualizacoes/cadastros/expedReceb/tipoDocCarga/tipoDocCarga.module').then(m => m.TipoDocCargaModule) },

      // Miscelanea - Configuração
      { path: 'configparam', loadChildren: () => import('../gfe/miscelaneas/configuracao/configparam/configparam.module').then(m => m.ConfigParamModule) },
      // Miscelanea - Administrador
      { path: 'empresas', loadChildren: () => import('../gfe/miscelaneas/administrador/empresas/empresa.module').then(m => m.EmpresaModule) },
      { path: 'grupoempresas', loadChildren: () => import('../gfe/miscelaneas/administrador/grupoempresas/grupoempresa.module').then(m => m.GrupoEmpresaModule) },
      { path: 'unidadenegocios', loadChildren: () => import('../gfe/miscelaneas/administrador/unidadenegocios/unidadenegocio.module').then(m => m.UnidadeNegocioModule) },
      { path: 'filiais', loadChildren: () => import('../gfe/miscelaneas/administrador/filiais/filial.module').then(m => m.FilialModule) },
      { path: 'usuarios', loadChildren: () => import('../gfe/miscelaneas/administrador/usuarios/usuario.module').then(m => m.UsuarioModule) },
      { path: 'parametros', loadChildren: () => import('../gfe/miscelaneas/administrador/parametros/parametro.module').then(m => m.ParametroModule) },
      { path: 'genericas', loadChildren: () => import('../gfe/miscelaneas/administrador/tabgenerica/generica.module').then(m => m.GenericasModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
