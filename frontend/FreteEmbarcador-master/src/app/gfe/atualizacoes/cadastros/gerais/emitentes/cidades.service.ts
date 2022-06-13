import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cidade } from './cidade.interface';

@Injectable()
export class CidadesService {

  private url = 'http://localhost:3000/customers';
  //private url = 'http://localhost:3000/cidades';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Cidade>> {
    return this.http.get(this.url) as Observable<Array<Cidade>>;
  }

  save(cidade: Cidade) {
    return this.http.post(this.url, cidade, {headers: this.headers});
  }

  update(id, cidade: Cidade) {
    return this.http.put(`${this.url}/${id}`, cidade, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
