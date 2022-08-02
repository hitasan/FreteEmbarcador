import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeMedidaFormComponent } from './unidadeMedida-form.component';

describe('UnidadeMedidaFormComponent', () => {
  let component: UnidadeMedidaFormComponent;
  let fixture: ComponentFixture<UnidadeMedidaFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeMedidaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeMedidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
