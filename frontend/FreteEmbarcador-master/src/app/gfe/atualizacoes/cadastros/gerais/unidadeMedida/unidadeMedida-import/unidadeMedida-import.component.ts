import { Component, OnInit, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-unidadeMedida-form',
  templateUrl: './unidadeMedida-import.component.html',
  styleUrls: ['./unidadeMedida-import.component.css'],
})
export class UnidadeMedidaImportComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Confirm'
  };

  onClick() {
    this.poModal.open();
  }

  ngOnInit() {
  }

}
