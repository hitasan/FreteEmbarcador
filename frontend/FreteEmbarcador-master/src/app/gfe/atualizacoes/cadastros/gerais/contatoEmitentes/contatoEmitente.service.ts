import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError as observableThrowError } from 'rxjs';

import { PoLookupFilteredItemsParams } from '@po-ui/ng-components';

import { ContatoEmitente } from './contatoEmitente.interface';

@Injectable()
export class ContatoEmitenteService {

  // API do cadastro
  private url = 'http://localhost:3000/contatoEmitente';

  // APIs auxiliaires
  private urlAux = 'http://localhost:3000/emitentes';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<ContatoEmitente>> {
    return this.http.get(this.url) as Observable<Array<ContatoEmitente>>;
  }

  save(contatoEmitente: ContatoEmitente) {
    return this.http.post(this.url, contatoEmitente, {headers: this.headers});
  }

  update(id, contatoEmitente: ContatoEmitente) {
    return this.http.put(`${this.url}/${id}`, contatoEmitente, {headers: this.headers});
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

    return this.http.get(this.urlAux, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.http.get(`${this.urlAux}/${value}`);
  }
}

