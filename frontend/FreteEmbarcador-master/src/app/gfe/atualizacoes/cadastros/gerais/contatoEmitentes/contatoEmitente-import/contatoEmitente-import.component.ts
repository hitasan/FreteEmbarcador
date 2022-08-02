import { Component, OnInit, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-contatoEmitente-form',
  templateUrl: './contatoEmitente-import.component.html',
  styleUrls: ['./contatoEmitente-import.component.css'],
})
export class ContatoEmitenteImportComponent implements OnInit {

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
