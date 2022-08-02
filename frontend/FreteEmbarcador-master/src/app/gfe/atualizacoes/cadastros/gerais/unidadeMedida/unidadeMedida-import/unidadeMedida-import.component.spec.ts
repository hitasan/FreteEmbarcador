import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeMedidaImportComponent } from './unidadeMedida-import.component';

describe('UnidadeMedidaImportComponent', () => {
  let component: UnidadeMedidaImportComponent;
  let fixture: ComponentFixture<UnidadeMedidaImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeMedidaImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeMedidaImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
