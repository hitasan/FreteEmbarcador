import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeNegocioDetailComponent } from './unidadenegocio-detail.component';

describe('UnidadeNegocioDetailComponent', () => {
  let component: UnidadeNegocioDetailComponent;
  let fixture: ComponentFixture<UnidadeNegocioDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeNegocioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeNegocioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
