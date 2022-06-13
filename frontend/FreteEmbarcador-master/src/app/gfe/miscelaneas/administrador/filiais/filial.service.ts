import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Filial } from './filial.interface';

@Injectable()
export class FilialService {

  // API do cadastro
  private url = 'http://localhost:3000/filial';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Filial>> {
    return this.http.get(this.url) as Observable<Array<Filial>>;
  }

  save(filial: Filial) {
    return this.http.post(this.url, filial, {headers: this.headers});
  }

  update(id, filial: Filial) {
    return this.http.put(`${this.url}/${id}`, filial, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
