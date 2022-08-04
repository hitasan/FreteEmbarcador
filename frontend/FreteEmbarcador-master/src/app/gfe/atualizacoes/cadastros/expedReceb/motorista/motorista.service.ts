import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Motorista } from './motorista.interface';

@Injectable()
export class MotoristaService {

  private url = 'http://localhost:3000/motorista';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Motorista>> {
    return this.http.get(this.url) as Observable<Array<Motorista>>;
  }

  save(motorista: Motorista) {
    return this.http.post(this.url, motorista, {headers: this.headers});
  }

  update(id, motorista: Motorista) {
    return this.http.put(`${this.url}/${id}`, motorista, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
