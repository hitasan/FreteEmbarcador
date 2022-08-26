import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DistanciaCidade } from './distanciaCidade.interface';

@Injectable()
export class DistanciaCidadeService {

  private url = 'http://localhost:3000/distanciacidade';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<DistanciaCidade>> {
    return this.http.get(this.url) as Observable<Array<DistanciaCidade>>;
  }

  save(distanciaCidade: DistanciaCidade) {
    return this.http.post(this.url, distanciaCidade, {headers: this.headers});
  }

  update(id, distanciaCidade: DistanciaCidade) {
    return this.http.put(`${this.url}/${id}`, distanciaCidade, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
