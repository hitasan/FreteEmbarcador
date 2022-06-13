import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Parametro } from './parametro.interface';

@Injectable()
export class ParametroService {

  // API do cadastro
  private url = 'http://localhost:3000/parametro';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Parametro>> {
    return this.http.get(this.url) as Observable<Array<Parametro>>;
  }

  save(parametro: Parametro) {
    return this.http.post(this.url, parametro, {headers: this.headers});
  }

  update(id, parametro: Parametro) {
    return this.http.put(`${this.url}/${id}`, parametro, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
