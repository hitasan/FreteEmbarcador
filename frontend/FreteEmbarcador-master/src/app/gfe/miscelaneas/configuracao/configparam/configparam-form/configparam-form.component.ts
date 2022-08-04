import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoLookupColumn, PoDynamicFormField } from '@po-ui/ng-components';

import { ConfigParamService } from '../configparam.service';
import { ConfigParam } from '../configparam.interface';

@Component({
  selector: 'app-configparam-form',
  templateUrl: './configparam-form.component.html',
  styleUrls: ['./configparam-form.component.css']
})
export class ConfigParamFormComponent implements OnInit {

  title = 'Configuração - Parâmetros do sistema';
  configParamForm: FormGroup;

  max: number;
  step: string;
  maxlength: number;
  mask: string;


  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private notification: PoNotificationService,
    private router: Router,
    public configparamService: ConfigParamService) { const { id } = this.activatedRoute.snapshot.params;
                                                     this.id = id }

  ngOnInit() {
    this.configParamForm = this.fb.group({ MV_GFEOVP: [''], MV_GFEQBR: [''], MV_GFEIND: [''], MV_GFETRP: [''], MV_RECPRZ: [''], MV_RENTNP: [''], MV_TREDESP: [''], MV_SITEDC: [''], MV_DTROMV: [''], MV_NFEENV: [''],
                                           MV_NFEDIR: [''], MV_MAOTCAN: [''], MV_GFEPP04: [''], MV_GFE012: [''], MV_GFEPVE: [''], MV_GFECPL: [''], MV_GFEPMT: [''], MV_GFEMVPE: [''], MV_GFEPP01: [''], MV_GFEPP02: [''],
                                           MV_GFEPP03: [''], MV_TIPREG: [''],MV_GFETAB1: [''], MV_APRTAB: [''], MV_APRCOP: [''], MV_SERVTO: [''], MV_ESCTAB: [''], MV_ESCTBAT: [''], MV_GFETROT: [''], MV_CRIRAT: [''],
                                           MV_CRIVAL: [''], MV_ACGRRAT: [''], MV_GFEOPC: [''], MV_TREENTR: [''], MV_UMPESO: [''], MV_DIMRET: [''], MV_LOGCALC: [''], MV_GFEAJDF: [''], MV_GFE005: [''], MV_LOCTVEI: [''],
                                           MV_GFE006: [''], MV_GFECRIC: [''], MV_CRDPAR: [''], MV_ICMSST: [''], MV_GFEPC: [''], MV_PICOTR: [''], MV_PCPIS: [''], MV_PCCOFI: [''], MV_ISSBAPI: [''], MV_PISDIF: [''],
                                           MV_COFIDIF: [''], MV_ICMBAPI: [''], MV_ICMSPA: [''], MV_DRTLOG: [''], MV_CALDEV: [''], MV_CALREN: [''], MV_CALSER: [''], MV_GFELIM1: [''], MV_GFELAC1: [''], MV_GFELIM2: [''],
                                           MV_GFELAC2: [''], MV_GFELIM3: [''], MV_GFELAC3: [''], MV_GFELIM4: [''], MV_GFELAC4: [''], MV_CRIRAT2: [''], MV_CRIRAT3: [''], MV_GFEGVR: [''], MV_GFEGUL: [''], MV_GFEVIN: [''],
                                           MV_GFELAC5: [''], MV_PFENTR: [''], MV_OBINENT: [''], MV_OBREDE: [''], MV_OBCOMP: [''], MV_OBREEN: [''], MV_OBDEV: [''], MV_OBSERV: [''], MV_CFOFR1: [''], MV_CFOFR2: [''],
                                           MV_CFOFR3: [''], MV_CFOFR4: [''], MV_GFEVLDT: [''], MV_VLCNPJ: [''], MV_GFEVLFT: [''], MV_PDGPIS: [''], MV_GFEPF1: [''], MV_CHVNFE: [''], MV_GFECVFA: [''], MV_ESPDF4: [''],
                                           MV_GFEROTR: [''], MV_DCOUT: [''], MV_DCABE: [''], MV_DCTOT: [''], MV_DCVAL: [''], MV_DCPERC: [''], MV_DCNEG: [''], MV_GFE011: [''], MV_AUDINF: [''], MV_GFEDCFA: [''], MV_CFCONPG: [''],
                                           MV_CFAGRUP: [''], MV_CFVLFAT: [''], MV_CFVLVAR: [''], MV_CFPCVAR: [''], MV_PFOBRIG: [''], MV_APUIRF: [''], MV_GFE016: [''], MV_BASIRF: [''], MV_DEDINS: [''], MV_DEDSES: [''],
                                           MV_MINIRF: [''], MV_BASINS: [''], MV_PCINAU: [''], MV_VLMXRE: [''], MV_PCINEM: [''], MV_PCSEST: [''], MV_PCSENA: [''], MV_TPGRP1: [''], MV_TPGRP2: [''], MV_TPGRP3: [''], MV_TPGRP4: [''],
                                           MV_TPGRP5: [''], MV_TPGRP6: [''], MV_TPGRP7: [''], MV_PROVCON: [''], MV_DTULFE: [''], MV_TPGERA: [''], MV_EMIPRO: [''], MV_TABPRO: [''], MV_NEGPRO: [''], MV_LOGCONT: [''],
                                           MV_TPEST: [''], MV_PEPRONO: [''], MV_PEPROES: [''], MV_PEPROAD: [''], MV_SPEDCOL: [''], MV_GFEVPRT: [''], MV_IMPPRO: [''], MV_XMLDIR: [''], MV_AMBCTEC: [''], MV_AMBICOL: [''],
                                           MV_CONFALL: [''], MV_DOCSCOL: [''], MV_SPEDURL: [''], MV_NRETCOL: [''], MV_USERCOL: [''], MV_PASSCOL: [''], MV_TCNEW: [''], MV_VERCTE: [''], MV_NGOUT: [''], MV_NGINN: [''],
                                           MV_NGLIDOS: [''], MV_GFETOTC: [''], MV_ESPDF1: [''], MV_ESPDF3: [''], MV_ESPDF2: [''], MV_REGOCO: [''], MV_CDTIPOE: [''], MV_GFEOCO: [''], MV_GFEEDIL: [''], MV_CADERP: [''],
                                           MV_ERPGFE: [''], MV_GFEI13: [''], MV_GFEI14: [''], MV_GFEI15: [''], MV_GFEI16: [''], MV_GFEI23: [''], MV_GFEI17: [''], MV_GFEI18: [''], MV_CDCLFR: [''], MV_GFE001: [''], MV_EAIURL: [''],
                                           MV_EAIPORT: [''], MV_INTGFE: [''], MV_INTGFE2: [''], MV_EMITMP: [''], MV_GFEI11: [''], MV_FATGFE: [''], MV_GFEVLIT: [''], MV_GFEIDTE: [''], MV_GFEI12: [''], MV_CADOMS: [''],
                                           MV_CDTPOP: [''], MV_GFEI10: [''], MV_CPDGFE: [''], MV_PRITDF: [''], MV_ESCPED: [''], MV_TESGFE: [''], MV_SIGFE: [''], MV_NTFGFE: [''], MV_GFEISS: [''], MV_GFEIRRF: [''], MV_GFEINSS: [''],
                                           MV_TMSGFE: [''], MV_TMS2GFE: [''], MV_GFEI22: [''], MV_TMS3GFE: [''], MV_GFEI21: [''], MV_DESGFE1: [''], MV_DESGFE2: [''], MV_DESGFE3: [''], MV_DESGFE4: [''], MV_DESGFE5: [''],
                                           MV_DESGFE6: [''], MV_DESGFE7: [''] });

    this.loadData(this.id);
  }

  private loadData(id: number) {
    this.max = 99;
    this.step = "2";
    this.maxlength = 5;
    this.mask = undefined;

    if (id) {
      this.configparamService.get(id).subscribe((configparam: ConfigParam) => {
        this.configParamForm.patchValue(configparam);
        this.title = "TESTE FORM_TS";
      });
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.configParamForm.invalid) {
      this.markAsDirtyInvalidControls(this.configParamForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const configParam = this.configParamForm.value;
    const operation = !!this.id ? this.configparamService.update(this.id, configParam) : this.configparamService.save(configParam);
    const successMessage = !!this.id ? 'Configuração de parâmetros atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/configparam']);
    });
  }

  private markAsDirtyInvalidControls(controls: { [key: string]: AbstractControl }) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];

        if (control.invalid) {
          control.markAsDirty();
        }
      }
    }
  }


  // ======================================================================================================================
  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Código' },
    { property: 'name', label: 'Descrição' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Selection Informations', optional: true, gridColumns: 6, label: 'Código' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return `${value.label}`;
  }
}
