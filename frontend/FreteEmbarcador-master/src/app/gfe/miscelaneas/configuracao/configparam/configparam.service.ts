import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ConfigParam } from './configparam.interface';

@Injectable()
export class ConfigParamService {

  // API do cadastro
  private url = 'http://localhost:3000/parametro';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<ConfigParam>> {
    return this.http.get(this.url) as Observable<Array<ConfigParam>>;
  }

  save(configparam: ConfigParam) {
    return this.http.post(this.url, configparam, {headers: this.headers});
  }

  update(id, configparam: ConfigParam) {
    return this.http.put(`${this.url}/${id}`, configparam, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
