import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { GrupoEmitente } from './grupoEmitentes.interface';

@Injectable()
export class GrupoEmitenteService {

  private url = 'http://localhost:3000/grupoEmitente';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<GrupoEmitente>> {
    return this.http.get(this.url) as Observable<Array<GrupoEmitente>>;
  }

  save(grupoEmitentes: GrupoEmitente) {
    return this.http.post(this.url, grupoEmitentes, {headers: this.headers});
  }

  update(id, grupoEmitentes: GrupoEmitente) {
    return this.http.put(`${this.url}/${id}`, grupoEmitentes, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
