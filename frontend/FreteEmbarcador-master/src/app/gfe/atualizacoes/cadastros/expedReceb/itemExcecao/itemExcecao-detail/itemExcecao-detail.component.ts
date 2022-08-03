import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PoNotificationService, PoDialogService } from '@po-ui/ng-components';

import { ItemExcecao } from '../itemExcecao.interface';
import { ItemExcecaoService } from '../itemExcecao.service';

@Component({
  selector: 'app-itemExcecao-detail',
  templateUrl: './itemExcecao-detail.component.html',
  styleUrls: ['./itemExcecao-detail.component.css']
})
export class ItemExcecaoDetailComponent implements OnInit {

  title = '';
  itemExcecao: ItemExcecao;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notification: PoNotificationService,
    private dialog: PoDialogService,
    private router: Router,
    private itemExcecaoService: ItemExcecaoService) {
  }

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;

    this.itemExcecaoService.get(id).subscribe((itemExcecao: ItemExcecao) => {
      this.itemExcecao = itemExcecao;

      this.title = "VISUALIZAR - Itens com Exceção";
    });
  }

  back() {
    this.router.navigate(['app/itemExcecao']);
  }

  remove() {
    this.dialog.confirm({
      message: 'Tem certeza que deseja excluir este Item?',
      title: 'EXCLUIR',
      confirm: this.confirmRemove.bind(this)
    });
  }

  edit() {
    const { id } = this.activatedRoute.snapshot.params;
    this.router.navigate([`app/itemExcecao/edit/${id}`]);
  }

  private confirmRemove() {
    const { id } = this.activatedRoute.snapshot.params;

    this.itemExcecaoService.delete(id).subscribe(() => {
      this.notification.success('Item excluído com sucesso');
      this.router.navigate([`app/itemExcecao`]);
    });
  }
}
