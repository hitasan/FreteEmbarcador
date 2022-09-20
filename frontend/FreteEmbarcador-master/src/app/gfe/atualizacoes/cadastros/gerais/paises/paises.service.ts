import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';

import { PoLookupFilteredItemsParams } from '@po-ui/ng-components';

import { Pais } from './pais.interface';

@Injectable()
export class PaisesService {

  // API do cadastro
  private urlPais = 'http://localhost:3000/paises';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.urlPais}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Pais>> {
    return this.http.get(this.urlPais) as Observable<Array<Pais>>;
  }

  save(pais: Pais) {
    return this.http.post(this.urlPais, pais, {headers: this.headers});
  }

  update(id, pais: Pais) {
    return this.http.put(`${this.urlPais}/${id}`, pais, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.urlPais}/${id}`, {headers: this.headers });
  }
}

