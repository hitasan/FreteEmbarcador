import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Usuario } from './usuario.interface';

@Injectable()
export class UsuarioService {

  // API do cadastro
  private url = 'http://localhost:3000/usuario';

  readonly headers = new HttpHeaders({
    'X-PO-SCREEN-LOCK': 'true'
  });

  constructor(private http: HttpClient) { }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`, {headers: this.headers });
  }

  getAll(): Observable<Array<Usuario>> {
    return this.http.get(this.url) as Observable<Array<Usuario>>;
  }

  save(usuario: Usuario) {
    return this.http.post(this.url, usuario, {headers: this.headers});
  }

  update(id, usuario: Usuario) {
    return this.http.put(`${this.url}/${id}`, usuario, {headers: this.headers});
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, {headers: this.headers });
  }
}
