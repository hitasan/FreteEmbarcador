import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PrazoEntrega } from './prazoEntrega.interface';

@Injectable()
export class PrazoEntregaService {

  private url = 'http://localhost:3000/prazoentrega';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<PrazoEntrega>> {
    return this.http.get(this.url) as Observable<Array<PrazoEntrega>>;
  }

  save(prazoEntrega: PrazoEntrega) {
    return this.http.post(this.url, prazoEntrega, {headers: this.headers});
  }

  update(id, prazoEntrega: PrazoEntrega) {
    return this.http.put(`${this.url}/${id}`, prazoEntrega, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
