import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // Agora regra de validação esta totalmente nesse metodo porem para dev e deixar preparado, adicionar tabela de usuario no db.json e usar validação
  // atraves de API criada por ele (json2ts.com para model da API, ver projeto exemplo de uso)
  onLoginSubmit({ login, password }) {
    if (login === 'admin' && password === 'admin') {
      this.authService.login();
      this.router.navigate(['/app/home']);
    }
  }
}
