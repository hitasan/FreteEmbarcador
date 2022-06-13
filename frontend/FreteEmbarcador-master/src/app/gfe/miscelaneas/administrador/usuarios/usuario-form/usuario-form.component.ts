import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PoNotificationService, PoCheckboxGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.interface';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  providers: [UsuarioService],
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  title = 'Novo usuário';
  usuarioForm: FormGroup;
  event: string;

  codigo: string;
  nome: string;
  minlength: number;
  maxlength: number;
  placeholder: string;
  properties: Array<string>;
  pdisable: boolean;
  senha: string;
  confirmsenha: string;

  private id;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Trocar Senha' },
    { value: 'block', label: 'Bloquear Login' }
  ];

  public readonly statusOptions: Array<PoSelectOption> = [
    { value: 'unblock', label: 'Desbloqueado' },
    { value: 'block', label: 'Bloqueado' }
  ];

  constructor(  private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private notification: PoNotificationService,
                private router: Router,
                public usuarioService: UsuarioService ) {
    const { id } = this.activatedRoute.snapshot.params;
    this.id = id
  }

  ngOnInit() {
    this.usuarioForm = this.fb.group( { codigo: ['', Validators.required],
                                        nome: ['', Validators.required],
                                        senha: ['', Validators.required],
                                        confirmsenha: ['', Validators.required],
                                        email: ['', Validators.required],
                                        cargo: [''],
                                        status: [''],
                                        datastatus: [''],
                                        trocasenha: ['']
                                      });

    this.loadData(this.id);
    this.restore();
  }

  private loadData(id: number) {
    if (id) {
      this.usuarioService.get(id).subscribe((usuario: Usuario) => {
        this.usuarioForm.patchValue(usuario);
        this.title = usuario.codigo;
      });
    }
  }

  restore() {
    this.codigo = '';
    this.nome = '';
    this.minlength = 6;
    this.maxlength = 12;
    this.placeholder = 'Informe a senha';
    this.properties = [];
    this.pdisable = this.codigo == ''
    this.senha = undefined;
    this.confirmsenha = undefined;
  }

  changeEvent(event: string) {
    this.event = event;
    const usuario = this.usuarioForm.value;

    if (this.event === 'p-blur') {
      if (usuario.codigo !== '') {
        this.pdisable = false;
      }
      else {
        usuario.nome = '';
        usuario.senha = '';
        usuario.confirmsenha = '';
        this.pdisable = true;
      }
    }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.usuarioForm.invalid) {
      this.markAsDirtyInvalidControls(this.usuarioForm.controls);
      this.notification.warning('Formulário precisa ser preenchido corretamente.');
      return;
    }

    const usuario = this.usuarioForm.value;
    const operation = !!this.id ? this.usuarioService.update(this.id, usuario) : this.usuarioService.save(usuario);
    const successMessage = !!this.id ? 'Registro de usuário atualizado com sucesso' : 'Registro salvo com sucesso';

    operation.subscribe(() => {
      this.notification.success(successMessage);
      this.router.navigate(['app/usuarios']);
    });
  }

  private markAsDirtyInvalidControls(controls: { [key: string]: AbstractControl }) {
    for (const key in controls) {
      if (controls.hasOwnProperty(key)) {
        const control = controls[key];

        if (control.invalid) {
          control.markAsDirty();
        }
      }
    }
  }
}
