import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Motorista } from '../motorista.interface';
import { MotoristaService } from '../motorista.service';

@Component({
  selector: 'app-motorista-detail',
  templateUrl: './motorista-detail.component.html',
  styleUrls: ['./motorista-detail.component.css']
})
export class MotoristaDetailComponent implements OnInit {

  title = '';
  nomeTrp = '';
  motorista: Motorista;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private motoristaService: MotoristaService) {
    }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.motoristaService.get(id).subscribe((motorista: Motorista) => {
      this.motorista = motorista;
      this.title = "VISUALIZAR - Motorista / Ajudante";
    });
  }

  back() {
    this.router.navigate(['app/motorista']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Motorista/Ajudante?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/motorista/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.motoristaService.delete(id).subscribe(() => {
      this.notification.success('Motorista/Ajudante excluído com sucesso');
      this.router.navigate([`app/motorista`]);
    });
  }
}
