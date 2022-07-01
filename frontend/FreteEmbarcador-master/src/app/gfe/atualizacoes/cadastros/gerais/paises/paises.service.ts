import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';

import { PoLookupFilteredItemsParams } from '@po-ui/ng-components';

import { Pais } from './pais.interface';

@Injectable()
export class PaisesService {

  // API do cadastro
  private urlPais = 'http://localhost:3000/paises';

  // APIs auxiliaires
  private urlGenerica = 'https://po-sample-api.herokuapp.com/v1/heroes'; // http://localhost:3000/generica';

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

  // =============================================================================================
  // OBSERVAÇÃO EXTRA
  //; Acompanhar a documentação sobre padronização de implementação para retorno de APIs
  // https://po-ui.io/guides/api
  // =============================================================================================
  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.http.get(this.urlGenerica, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.http.get(`${this.urlGenerica}/${value}`);
  }
}

