import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { TipoDocCarga } from './tipoDocCarga.interface';

@Injectable()
export class TipoDocCargaService {

  private url = 'http://localhost:3000/tipodoctocarga';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<TipoDocCarga>> {
    return this.http.get(this.url) as Observable<Array<TipoDocCarga>>;
  }

  save(tipoDocCarga: TipoDocCarga) {
    return this.http.post(this.url, tipoDocCarga, {headers: this.headers});
  }

  update(id, tipoDocCarga: TipoDocCarga) {
    return this.http.put(`${this.url}/${id}`, tipoDocCarga, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
