import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PracaPedagio } from './pracaPedagio.interface';

@Injectable()
export class PracaPedagioService {

  private url = 'http://localhost:3000/pracapedagio';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<PracaPedagio>> {
    return this.http.get(this.url) as Observable<Array<PracaPedagio>>;
  }

  save(pracaPedagio: PracaPedagio) {
    return this.http.post(this.url, pracaPedagio, {headers: this.headers});
  }

  update(id, pracaPedagio: PracaPedagio) {
    return this.http.put(`${this.url}/${id}`, pracaPedagio, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
