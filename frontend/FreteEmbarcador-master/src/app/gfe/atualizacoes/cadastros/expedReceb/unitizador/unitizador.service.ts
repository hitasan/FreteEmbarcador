import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Unitizador } from './unitizador.interface';

@Injectable()
export class UnitizadorService {

  private url = 'http://localhost:3000/unitizador';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Unitizador>> {
    return this.http.get(this.url) as Observable<Array<Unitizador>>;
  }

  save(unitizador: Unitizador) {
    return this.http.post(this.url, unitizador, {headers: this.headers});
  }

  update(id, unitizador: Unitizador) {
    return this.http.put(`${this.url}/${id}`, unitizador, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
