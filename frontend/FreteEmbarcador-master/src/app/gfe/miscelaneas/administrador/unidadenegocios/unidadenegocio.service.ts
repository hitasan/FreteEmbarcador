import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UnidadeNegocio } from './unidadenegocio.interface';

@Injectable()
export class UnidadeNegocioService {

  // API do cadastro
  private url = 'http://localhost:3000/unidadenegocio';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<UnidadeNegocio>> {
    return this.http.get(this.url) as Observable<Array<UnidadeNegocio>>;
  }

  save(unidadenegocio: UnidadeNegocio) {
    return this.http.post(this.url, unidadenegocio, {headers: this.headers});
  }

  update(id, unidadenegocio: UnidadeNegocio) {
    return this.http.put(`${this.url}/${id}`, unidadenegocio, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
