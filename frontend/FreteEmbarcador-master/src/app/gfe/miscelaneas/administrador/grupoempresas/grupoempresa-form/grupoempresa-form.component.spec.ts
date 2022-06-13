import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoEmpresaFormComponent } from './grupoempresa-form.component';

describe('GrupoEmpresaFormComponent', () => {
  let component: GrupoEmpresaFormComponent;
  let fixture: ComponentFixture<GrupoEmpresaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEmpresaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmpresaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
