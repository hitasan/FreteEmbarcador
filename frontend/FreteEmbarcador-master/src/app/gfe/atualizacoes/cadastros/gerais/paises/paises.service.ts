import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pluck, map, Observable, throwError as observableThrowError } from 'rxjs';

import { Pais } from './pais.interface';

@Injectable()
export class PaisesService {

  // API do cadastro
  private urlPais = 'http://localhost:3000/paises';
  private urlIdioma = 'http://localhost:3000/idiomas';

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

  getIdioma(data): Observable<any> {
    const teste = "Debugando corretamente!!!";
    const values = data?.length ? data.toString() : data;
    const resp = this.http.get(`http://localhost:3000/idiomas?id=${values}`)
                          .pipe(pluck('items','id'));
    //return this.http.get(`http://localhost:3000/idiomas/?id=${values}`).pipe(map((response: { results: Array<any> }) => response.results[1]));

    return resp;
  }
}

