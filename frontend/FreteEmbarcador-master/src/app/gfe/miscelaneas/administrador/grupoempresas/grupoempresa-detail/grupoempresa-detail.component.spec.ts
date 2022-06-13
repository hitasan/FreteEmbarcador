import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoEmpresaDetailComponent } from './grupoempresa-detail.component';

describe('GrupoEmpresaDetailComponent', () => {
  let component: GrupoEmpresaDetailComponent;
  let fixture: ComponentFixture<GrupoEmpresaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEmpresaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmpresaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
