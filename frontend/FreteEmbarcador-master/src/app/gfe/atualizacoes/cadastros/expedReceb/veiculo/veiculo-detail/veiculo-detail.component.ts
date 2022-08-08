import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { Veiculo } from '../veiculo.interface';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-detail',
  templateUrl: './veiculo-detail.component.html',
  styleUrls: ['./veiculo-detail.component.css']
})
export class VeiculoDetailComponent implements OnInit {

  title = '';
  veiculo: Veiculo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private veiculoService: VeiculoService) {
    }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.veiculoService.get(id).subscribe((veiculo: Veiculo) => {
      this.veiculo = veiculo;
      this.title = "VISUALIZAR - Veículos";
    });
  }

  back() {
    this.router.navigate(['app/veiculo']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Veículo?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/veiculo/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.veiculoService.delete(id).subscribe(() => {
      this.notification.success('Veículo excluído com sucesso');
      this.router.navigate([`app/veiculo`]);
    });
  }
}
