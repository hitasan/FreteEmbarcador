import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { ContatoEmitente } from '../contatoEmitente.interface';
import { ContatoEmitenteService } from '../contatoEmitente.service';

@Component({
  selector: 'app-contatoEmitente-detail',
  templateUrl: './contatoEmitente-detail.component.html',
  styleUrls: ['./contatoEmitente-detail.component.css']
})
export class ContatoEmitenteDetailComponent implements OnInit {

  title = '';
  contatoEmitente: ContatoEmitente;

  constructor( private activatedRoute: ActivatedRoute,
               private notification: PoNotificationService,
               private dialog: PoDialogService,
               private router: Router,
               private contatoEmitenteService: ContatoEmitenteService) { }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.contatoEmitenteService.get(id).subscribe((contatoEmitente: ContatoEmitente) => {
      this.contatoEmitente = contatoEmitente;
      this.title = "pais.nome Detail";
    });
  }

  back() {
    this.router.navigate(['app/contatoEmitente']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja remover este contato de emitente?',
      title: 'excluir',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.router.navigate([`app/contatoEmitente/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.contatoEmitenteService.delete(id).subscribe(() => {
      this.notification.success('Contato de emitente removido com sucesso');
      this.router.navigate([`app/contatoEmitente`]);
    });
  }
}
