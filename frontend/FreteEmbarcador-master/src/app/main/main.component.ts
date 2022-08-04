import { Component } from '@angular/core';

import { PoMenuItem, PoToolbarProfile, PoToolbarAction } from '@po-ui/ng-components';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  readonly profile: PoToolbarProfile = {
    subtitle: 'admin@demo.com.br',
    title: 'Admin'
  };

  readonly profileActions: Array<PoToolbarAction> = [
    { label: 'Sair', action: this.logout.bind(this) }
  ];

  readonly menus: Array<PoMenuItem> = [
    { label: 'Inicio', link: 'home', icon: 'po-icon-home', shortLabel: 'Inicio' },
    { label: 'Atualizações', icon: 'po-icon-stock', shortLabel: 'Atualizações',
      subItems: [ { label: 'Cadastros',
                    subItems: [ { label: 'Gerais',
                                  subItems: [ { label: 'Países'              , link: 'paises' },
                                              { label: 'Cidades'             , link: 'cidades' },
                                              { label: 'Grupos Emitentes'    , link: 'grupoEmitentes' },
                                              { label: 'Emitentes'           , link: 'emitentes' },
                                              { label: 'Contato de Emitentes', link: 'contatoEmitentes' },
                                              { label: 'Unid Medidas'        , link: 'unidMedidas' } ]
                                },
                                { label: 'Expedição/Recebimento',
                                  subItems: [ { label: 'Tipos Docto Carga',   link: 'tipoDocCarga' },
                                              { label: 'Unitizadores',        link: 'unitizador' },
                                              { label: 'Itens com Exceções',  link: 'itemExcecao' },
                                              { label: 'Filtros Docto Carga', link: 'filtroDocCarga' },
                                              { label: 'Motoristas',          link: 'motorista' },
                                              { label: 'Veículos',            link: 'veiculo' },
                                              //{ label: 'Tipos de Operação',       link: '/tipoOperacao',      action: this.printMenuCadAction.bind(this) },
                                              //{ label: 'Prazos de Entrega',       link: '/prazoEntrega',      action: this.printMenuCadAction.bind(this) },
                                              //{ label: 'Praças de Pedágio',       link: '/pracaPedagio',      action: this.printMenuCadAction.bind(this) },
                                              { label: 'ZZZ Distância entre Cidades', link: '/distanciaCidades',  action: this.printMenuCadAction.bind(this) } ]
                                }/*,
                                { label: 'Pátios e Portarias',
                                  subItems: [ { label: 'Visitantes',         link: '/visitantes',       action: this.printMenuCadAction.bind(this) },
                                              { label: 'Restrições',         link: '/restricoes',       action: this.printMenuCadAction.bind(this) },
                                              { label: 'Perguntas',          link: '/perguntas',        action: this.printMenuCadAction.bind(this) },
                                              { label: 'Endereços de Carga', link: '/enderecoCarga',    action: this.printMenuCadAction.bind(this) },
                                              { label: 'Operações',          link: '/operacoes',        action: this.printMenuCadAction.bind(this) },
                                              { label: 'Config. Operações',  link: '/configOperacoes',  action: this.printMenuCadAction.bind(this) },
                                              { label: 'Recorrências',       link: '/recorrencias',     action: this.printMenuCadAction.bind(this) } ]
                                },
                                { label: 'Ocorrências',
                                  subItems: [ { label: 'Tipos Ocorrência',   link: '/tipoOcorrencia',   action: this.printMenuCadAction.bind(this) },
                                              { label: 'Motivos Ocorrência', link: '/motivoOcorrencia', action: this.printMenuCadAction.bind(this) },
                                              { label: 'Quebra Peso',        link: '/quebraPeso',       action: this.printMenuCadAction.bind(this) } ]
                                },
                                { label: 'Tabelas de Frete',
                                  subItems: [ { label: 'Regiões',                link: '/regioes',          action: this.printMenuCadAction.bind(this) },
                                              { label: 'Classificação de Frete', link: '/classificFrete',   action: this.printMenuCadAction.bind(this) },
                                              { label: 'Tipos de Veículo',       link: '/tipoVeiculo',      action: this.printMenuCadAction.bind(this) },
                                              { label: 'Componentes de Frete',   link: '/componenteFrete',  action: this.printMenuCadAction.bind(this) },
                                              { label: 'Tabela Suframa',         link: '/tabelaSuframa',    action: this.printMenuCadAction.bind(this) },
                                              { label: 'Aprovadores Tabela',     link: '/aprovadorTabela',  action: this.printMenuCadAction.bind(this) },
                                              { label: 'Tipos de Serviço',       link: '/tipoServico',      action: this.printMenuCadAction.bind(this) },
                                              { label: 'Frete Referência',       link: '/freteReferencia',  action: this.printMenuCadAction.bind(this) } ]
                                },
                                { label: 'Cálculos de Frete',
                                  subItems: [ { label: 'Tributações por UF',       link: '/tributacaoUF',     action: this.printMenuCadAction.bind(this) },
                                              { label: 'Tipos de Item',            link: '/tipoItem',         action: this.printMenuCadAction.bind(this) },
                                              { label: 'Calendário de Transporte', link: '/calendarioTransp', action: this.printMenuCadAction.bind(this) } ]
                                },
                                { label: 'Doc. Frete/Faturas',
                                  subItems: [ { label: 'Espécies Docto Frete',     link: '/especieDoctoFrete',  action: this.printMenuCadAction.bind(this) },
                                              { label: 'Config. Oper. Tributária', link: '/configOperTribut',   action: this.printMenuCadAction.bind(this) } ]
                                },
                                { label: 'Contrato Autônomos',
                                  subItems: [ { label: 'Tabelas IR', link: '/tabelaIR', action: this.printMenuCadAction.bind(this) } ]
                                },
                                { label: 'Contabilização',
                                  subItems: [ { label: 'Contas Contábeis',    link: '/contasContabeis', action: this.printMenuCadAction.bind(this) },
                                              { label: 'Centros de Custo',    link: '/centroCusto',     action: this.printMenuCadAction.bind(this) },
                                              { label: 'Contas por Filial',   link: '/contaFilial',     action: this.printMenuCadAction.bind(this) },
                                              { label: 'Contas para Rateio',  link: '/contaRateio',     action: this.printMenuCadAction.bind(this) } ]
                                }*/ ]
                  },
                  { label: 'Movimentações',
                    subItems: [ { label: 'Expedição/Recebimento',
                                  subItems: [ { label: 'Documentos de Carga',  link: '/doctoCarga',       action: this.printMenuMovAction.bind(this) },
                                              { label: 'Romaneios de Carga',   link: '/romaneio',         action: this.printMenuMovAction.bind(this) },
                                              { label: 'Emissão Romaneio',     link: '/emissaoRomaneio',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Liberar Romaneio',     link: '/liberarRomaneio',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Registrar Entrega',    link: '/registrarEntrega', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Gerenciamento Viagem', link: '/gerencViagem',     action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Pátios e Portarias',
                                  subItems: [ { label: 'Agendamentos',          link: '/agendamento',         action: this.printMenuMovAction.bind(this) },
                                              { label: 'Acesso Veículos',       link: '/acessoVeiculo',       action: this.printMenuMovAction.bind(this) },
                                              { label: 'Controle Pátio',        link: '/controlePatio',       action: this.printMenuMovAction.bind(this) },
                                              { label: 'Operar Ponto Controle', link: '/operarPontoControle', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Ocorrências',
                                  subItems: [ { label: 'Ocorrências', link: '/ocorrencias', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Tabelas de Frete',
                                  subItems: [ { label: 'Tabelas de Frete',        link: '/tabelaFrete',       action: this.printMenuMovAction.bind(this) },
                                              { label: 'Tarifas por Emitente',    link: '/tarifaEmitente',    action: this.printMenuMovAction.bind(this) },
                                              { label: 'Aprovar Tabela',          link: '/aprovarTabela',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Cópia e Reajuste',        link: '/copiaReajuste',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Painel Requisições',      link: '/painelRequisicao',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Contratos de Transporte', link: '/contratoTransp',    action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Cálculos de Frete',
                                  subItems: [ { label: 'Calcular Romaneios',      link: '/calcularRomaneio',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Agrupar Cálculos',        link: '/agruparCalculo',    action: this.printMenuMovAction.bind(this) },
                                              { label: 'Frete Combinado',         link: '/FreteCombinado',    action: this.printMenuMovAction.bind(this) },
                                              { label: 'Aprovar Ajustes',         link: '/aprovarAjuste',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Manut. Calc. Periodo',    link: '/manutCalcPeriodo',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Simular Fretes',          link: '/simularFrete',      action: this.printMenuMovAction.bind(this) },
                                              { label: 'Simulação Simplificada',  link: '/simulacaoSimplif',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Estimar Fretes',          link: '/estimarFrete',      action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Pré-Faturas',
                                  subItems: [ { label: 'Gerar Pré-Faturas',   link: '/gerarPreFatura',    action: this.printMenuMovAction.bind(this) },
                                              { label: 'Enviar PréFaturas',   link: '/enviarPreFatura',   action: this.printMenuMovAction.bind(this) },
                                              { label: 'Confirmar/Cancelar',  link: '/confirmarCancelar', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Demonstrativo',       link: '/demonstrativo',     action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Doc. Frete/Faturas',
                                  subItems: [ { label: 'Documentos de Frete', link: '/documentoFrete',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Faturas de Frete',    link: '/faturaFrete',     action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Contrato Autônomos',
                                  subItems: [ { label: 'Contratos/RPA',     link: '/contratoRPA',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Geração por Lote',  link: '/geracaoLote',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Emissão Contrato',  link: '/emissaoContrato', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Auditoria de Frete',
                                  subItems: [ { label: 'Aprovar Docto Frete',     link: '/aprovarDoctoFrete',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Aprovar Faturas',         link: '/aprovarFatura',         action: this.printMenuMovAction.bind(this) },
                                              { label: 'Conciliar Vale Pedágio',  link: '/conciliarValePedagio',  action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Contabilização',
                                  subItems: [ { label: 'Gerar Provisões',      link: '/gerarProvisao',        action: this.printMenuMovAction.bind(this) },
                                              { label: 'Gerar Contabilização', link: '/gerarContabilizacao',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'Estornar Provisão',    link: '/estornarProvisao',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Monitor Contábil',     link: '/monitorContabil',      action: this.printMenuMovAction.bind(this) },
                                              { label: 'Lotes de Provisão',    link: '/loteProvisao',         action: this.printMenuMovAction.bind(this) } ]
                                } ]
                  },
                  { label: 'Integrações',
                    subItems: [ { label: 'ERP',
                                  subItems: [ { label: 'Monitor Docto Carga',         link: '/monitorDoctoCarga',     action: this.printMenuMovAction.bind(this) },
                                              { label: 'Integração Pré-Faturas',      link: '/integrPreFatura',       action: this.printMenuMovAction.bind(this) },
                                              { label: 'Integração Lote Provisão',    link: '/integrLoteProvisao',    action: this.printMenuMovAction.bind(this) },
                                              { label: 'Integração Docto Frete',      link: '/integrDoctoFrete',      action: this.printMenuMovAction.bind(this) },
                                              { label: 'Integração Contratos',        link: '/integrContrato',        action: this.printMenuMovAction.bind(this) },
                                              { label: 'Integração Faturas',          link: '/integrFatura',          action: this.printMenuMovAction.bind(this) },
                                              { label: 'Facil. Atual. Faturas Frete', link: '/facilitAtuFaturaFrete', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Sincronização Protheus',      link: '/sincronizProtheus',     action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'CT-e',
                                  subItems: [ { label: 'Importação CT-e', link: '/importCTE', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'EDI',
                                  subItems: [ { label: 'Exportação NOTFIS', link: '/exportNotfis', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Exportação PREFAT', link: '/exportPreFat', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Importação CONEMB', link: '/importConemb', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Importação DOCCOB', link: '/importDoccob', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'BI',
                                  subItems: [ { label: 'Cadastros',                 link: '/biCadastro', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Ocorrência de Transporte',  link: '/biOcorrenciaTransporte', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Prazos de Entrega',         link: '/biPrazoEntrega', action: this.printMenuMovAction.bind(this) },
                                              { label: 'Despesas de Frete',         link: '/biDespezaFrete', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Cockpit Logístico',
                                  subItems: [ { label: 'Parâmetros Integração', link: '/parametroCP', action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'SIGATMS',
                                  subItems: [ { label: 'Ocorrências Docto Transp.', link: '/ocorrDoctoTransp',  action: this.printMenuMovAction.bind(this) },
                                              { label: 'ocorrências GFE',           link: '/ocorrGFE',          action: this.printMenuMovAction.bind(this) } ]
                                },
                                { label: 'Fretebras',
                                  subItems: [ { label: 'Configuração Integração', link: '/configFretebras',   action: this.printMenuMovAction.bind(this) },
                                              { label: 'Monitor Integração',      link: '/monitorFretebras',  action: this.printMenuMovAction.bind(this) } ]
                                } ]
                  } ]
    },
    { label: 'Consultas', icon: 'po-icon-search', shortLabel: 'Consultas',
      subItems: [ { label: 'Gerais',
                    subItems: [ { label: 'Cidades',                 link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Painel Transportadores',  link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Painel Filiais',          link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Painel Clientes',         link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Sumário Pendencias',      link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Expedição/Recebimento',
                    subItems: [ { label: 'Documentos de Carga',   link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Documentos de Carga',   link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Monitor Carregamentos', link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Monitor Entregas',      link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Curva Transp. Carga',   link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Viagem',                link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Pátios e Portarias',
                    subItems: [ { label: 'Monitor de Tráfego',          link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Painel Veículos',             link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Painel Motoristas',           link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Movimentação Pátio',          link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Monitor Pontos de Controle',  link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Monitor de Filas',            link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Monitor de Endereços',        link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Atividade Usuário',           link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Ocorrências',
                    subItems: [ { label: 'Ocorrências',             link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Curva Trasp. Ocorrência', link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Tabelas de Frete',
                    subItems: [ { label: 'Componentes Frete',           link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Tabelas de Frete',            link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Requis. Negociação Frete',    link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Resultado Negociação Frete',  link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Cálculo de Frete',
                    subItems: [ { label: 'Cálculos de Frete',   link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Frete Período',       link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Curva Transp. Frete', link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Memória de Cálculo',  link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Pré-Faturas',
                    subItems: [ { label: 'Pré-Faturas', link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Doc. de Frete/Faturas',
                    subItems: [ { label: 'Documentos de Frete', link: '', action: this.printMenuConsAction.bind(this) },
                                { label: 'Faturas de Frete',    link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Contrato Autônomo',
                    subItems: [ { label: 'Contratos/RPA', link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Auditoria de Frete',
                    subItems: [ { label: 'Curva Transp. Audit.', link: '', action: this.printMenuConsAction.bind(this) } ]
                  },
                  { label: 'Contabilização',
                    subItems: [ { label: 'Sublotes de Provisão', link: '', action: this.printMenuConsAction.bind(this) } ]
                  } ]
    },
    { label: 'Relatórios', icon: 'po-icon-archive', shortLabel: 'Relatórios',
      subItems: [ { label: 'Expedição/Recebimento',
                    subItems: [ { label: 'Documentos de Carga',       link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Docto Carga Trânsito',      link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Romaneio de Carga',         link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Expedição de Romaneios',    link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Vale Pedágio',              link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Ocup. Veic. Romaneio',      link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Ocup. Veic. Transp.',       link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Ocup. Veic. Filial',        link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Ocup. Veic. Tipo Operação', link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Utilização Veículo',        link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Estoque Trânsito',          link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Estoque Trânsito Transp',   link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Eficiência Transp',         link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Eficiência Filiais',        link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Roman Frota Dedicada',      link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Moviemntação Docto Carga',  link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Pátios e Portarias',
                    subItems: [ { label: 'Agendamentos',        link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Indic. Usuário',      link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Indic. Operação',     link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Reprovações',         link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Movimentação Diária', link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Ocorrências',
                    subItems: [ { label: 'Ocorrências',             link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Doc. Carga Ocorrências',  link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Ocorrências Tipo',        link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'ocorrências Transp.',     link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Tabelas de Frete',
                    subItems: [ { label: 'Tabelas de Frete',                    link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Comparativo de Tarifas',              link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Tarifas de Frete por Cidade Destino', link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Tarifas das tabelas de Frete',        link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Cálculo de Frete',
                    subItems: [ { label: 'Frete Transp.',               link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete Transp/UF',             link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete UF/Região',             link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete Repres/Dest',           link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete Classificação Frete',   link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete Documento Carga',       link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete Item Documento Carga',  link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Frete Frota Dedicada',        link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Pré-Faturas',
                    subItems: [ { label: 'pré-Faturas', link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Doc. de Frete/Faturas',
                    subItems: [ { label: 'Documentos de Frete', link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Saldo de Frete',      link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Faturas de Frete',    link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Comparativo Tarifas', link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Contrato Autônomo',
                    subItems: [ { label: 'Contratos/RPA',           link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'impostos dos Autonômos',  link: '', action: this.printMenuRelAction.bind(this) } ]
                  },
                  { label: 'Contabilização',
                    subItems: [ { label: 'Docto Carga sem Prov.', link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Conciliação Contab.',   link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Contab. Fretes',        link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Sumarizado Fretes',     link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Contab. Detalhado',     link: '', action: this.printMenuRelAction.bind(this) },
                                { label: 'Extrato Contábil',      link: '', action: this.printMenuRelAction.bind(this) } ]
                  } ]
    },
    { label: 'Miscelanea', icon: 'po-icon-settings', shortLabel: 'Miscelanea',
      subItems: [ { label: 'Configurações',
                    subItems: [ { label: 'Parâmetros Módulo', link: 'configparam' } ]
                  },
                  { label: 'Administração',
                    subItems: [ { label: 'Empresas',          link: 'empresas' },
                                { label: 'Grupo Empresas',    link: 'grupoempresas' },
                                { label: 'Unidades Negócio',  link: 'unidadenegocios' },
                                { label: 'Filiais',           link: 'filiais' },
                                { label: 'Usuários',          link: 'usuarios' },
                                { label: 'Parâmetros',        link: 'parametros' },
                                { label: 'Tabelas Genéricas', link: 'genericas' } ]
                  } ]
    },
    { label: 'Sobre', icon: 'po-icon-menu', shortLabel: 'Sobre',
      subItems: [ { label: 'Documentação APIs', link: '', action: this.printMenuAbtAction.bind(this) },
                  { label: 'Sobre',             link: '', action: this.printMenuAbtAction.bind(this) } ]
    }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  private logout() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }

  // Remover apos paginas forem sendo liberadas
  private printMenuCadAction(menu: PoMenuItem) {
    alert("Clicou no Cadastro " + menu.label + " - Não Implementado");
  }
  private printMenuMovAction(menu: PoMenuItem) {
    alert("Clicou na Movimentação " + menu.label + " - Não Implementado");
  }
  private printMenuConsAction(menu: PoMenuItem) {
    alert("Clicou na Movimentação " + menu.label + " - Não Implementado");
  }
  private printMenuRelAction(menu: PoMenuItem) {
    alert("Clicou na Movimentação " + menu.label + " - Não Implementado");
  }
  private printMenuAbtAction(menu: PoMenuItem) {
    alert("Clicou na Miscelanea " + menu.label + " - Não Implementado");
  }
}
