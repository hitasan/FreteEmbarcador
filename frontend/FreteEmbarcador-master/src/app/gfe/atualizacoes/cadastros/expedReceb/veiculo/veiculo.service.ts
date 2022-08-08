import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Veiculo } from './veiculo.interface';

@Injectable()
export class VeiculoService {

  private url = 'http://localhost:3000/veiculo';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Veiculo>> {
    return this.http.get(this.url) as Observable<Array<Veiculo>>;
  }

  save(veiculo: Veiculo) {
    return this.http.post(this.url, veiculo, {headers: this.headers});
  }

  update(id, veiculo: Veiculo) {
    return this.http.put(`${this.url}/${id}`, veiculo, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
