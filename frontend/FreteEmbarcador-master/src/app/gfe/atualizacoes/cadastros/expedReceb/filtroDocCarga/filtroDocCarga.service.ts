import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { FiltroDocCarga } from './filtroDocCarga.interface';

@Injectable()
export class FiltroDocCargaService {

  private url = 'http://localhost:3000/filtrodoccarga';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<FiltroDocCarga>> {
    return this.http.get(this.url) as Observable<Array<FiltroDocCarga>>;
  }

  save(filtroDocCarga: FiltroDocCarga) {
    return this.http.post(this.url, filtroDocCarga, {headers: this.headers});
  }

  update(id, filtroDocCarga: FiltroDocCarga) {
    return this.http.put(`${this.url}/${id}`, filtroDocCarga, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
