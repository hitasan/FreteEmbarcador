import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PoLookupFilteredItemsParams } from '@po-ui/ng-components';

import { UnidadeMedida } from './unidadeMedida.interface';

@Injectable()
export class UnidadeMedidaService {

  // API do cadastro
  private url = 'http://localhost:3000/unidadeMedida';

  // APIs auxiliares
  private urlGenerica = 'https://po-sample-api.herokuapp.com/v1/heroes';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) {
  }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, { headers: this.headers });
  }

  getAll(): Observable<Array<UnidadeMedida>> {
    return this.http.get(this.url) as Observable<Array<UnidadeMedida>>;
  }

  save(unidadeMedida: UnidadeMedida) {
    return this.http.post(this.url, unidadeMedida, {headers: this.headers});
  }

  update(id, unidadeMedida: UnidadeMedida) {
    return this.http.put(`${this.url}/${id}`, unidadeMedida, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
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

