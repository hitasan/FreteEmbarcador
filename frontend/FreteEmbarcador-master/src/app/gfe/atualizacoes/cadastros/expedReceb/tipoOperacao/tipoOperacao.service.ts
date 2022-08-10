import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TipoOperacao } from './tipoOperacao.interface';

@Injectable()
export class TipoOperacaoService {

  private url = 'http://localhost:3000/tipooperacao';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<TipoOperacao>> {
    return this.http.get(this.url) as Observable<Array<TipoOperacao>>;
  }

  save(tipoOperacao: TipoOperacao) {
    return this.http.post(this.url, tipoOperacao, {headers: this.headers});
  }

  update(id, tipoOperacao: TipoOperacao) {
    return this.http.put(`${this.url}/${id}`, tipoOperacao, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
