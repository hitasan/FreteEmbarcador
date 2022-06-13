import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrupoEmpresaListComponent } from './grupoempresa-list.component';

describe('GrupoEmpresaListComponent', () => {
  let component: GrupoEmpresaListComponent;
  let fixture: ComponentFixture<GrupoEmpresaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoEmpresaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoEmpresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
