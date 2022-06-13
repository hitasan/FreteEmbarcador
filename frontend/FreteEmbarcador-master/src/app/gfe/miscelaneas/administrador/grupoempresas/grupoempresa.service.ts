import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { GrupoEmpresa } from './grupoempresa.interface';

@Injectable()
export class GrupoEmpresaService {

  // API do cadastro
  private url = 'http://localhost:3000/grupoempresa';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<GrupoEmpresa>> {
    return this.http.get(this.url) as Observable<Array<GrupoEmpresa>>;
  }

  save(grupoempresa: GrupoEmpresa) {
    return this.http.post(this.url, grupoempresa, {headers: this.headers});
  }

  update(id, grupoempresa: GrupoEmpresa) {
    return this.http.put(`${this.url}/${id}`, grupoempresa, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
