import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeNegocioFormComponent } from './unidadenegocio-form.component';

describe('UnidadeNegocioFormComponent', () => {
  let component: UnidadeNegocioFormComponent;
  let fixture: ComponentFixture<UnidadeNegocioFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeNegocioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeNegocioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
