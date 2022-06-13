import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeNegocioListComponent } from './unidadenegocio-list.component';

describe('UnidadeNegocioListComponent', () => {
  let component: UnidadeNegocioListComponent;
  let fixture: ComponentFixture<UnidadeNegocioListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeNegocioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeNegocioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
