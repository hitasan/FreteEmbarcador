import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeMedidaDetailComponent } from './unidadeMedida-detail.component';

describe('UnidadeMedidaDetailComponent', () => {
  let component: UnidadeMedidaDetailComponent;
  let fixture: ComponentFixture<UnidadeMedidaDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeMedidaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeMedidaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
