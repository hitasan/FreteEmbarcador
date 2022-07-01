import { Component, OnInit, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-import.component.html',
  styleUrls: ['./pais-import.component.css'],
})
export class PaisImportComponent implements OnInit {

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
