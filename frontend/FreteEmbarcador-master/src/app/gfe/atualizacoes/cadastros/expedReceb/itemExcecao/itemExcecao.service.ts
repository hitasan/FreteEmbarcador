import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ItemExcecao } from './itemExcecao.interface';

@Injectable()
export class ItemExcecaoService {

  private url = 'http://localhost:3000/itemexcecao';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<ItemExcecao>> {
    return this.http.get(this.url) as Observable<Array<ItemExcecao>>;
  }

  save(itemExcecao: ItemExcecao) {
    return this.http.post(this.url, itemExcecao, {headers: this.headers});
  }

  update(id, itemExcecao: ItemExcecao) {
    return this.http.put(`${this.url}/${id}`, itemExcecao, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
