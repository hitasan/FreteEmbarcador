import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Visitante } from './visitante.interface';

@Injectable()
export class VisitanteService {

  private url = 'http://localhost:3000/visitante';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Visitante>> {
    return this.http.get(this.url) as Observable<Array<Visitante>>;
  }

  save(visitante: Visitante) {
    return this.http.post(this.url, visitante, {headers: this.headers});
  }

  update(id, visitante: Visitante) {
    return this.http.put(`${this.url}/${id}`, visitante, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
