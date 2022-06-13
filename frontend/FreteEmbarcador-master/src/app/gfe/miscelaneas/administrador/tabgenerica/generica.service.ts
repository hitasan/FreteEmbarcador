import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Generica } from './generica.interface';

@Injectable()
export class GenericaService {

  // API do cadastro
  private url = 'http://localhost:3000/generica';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Generica>> {
    return this.http.get(this.url) as Observable<Array<Generica>>;
  }

  save(pais: Generica) {
    return this.http.post(this.url, pais, {headers: this.headers});
  }

  update(id, pais: Generica) {
    return this.http.put(`${this.url}/${id}`, pais, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
