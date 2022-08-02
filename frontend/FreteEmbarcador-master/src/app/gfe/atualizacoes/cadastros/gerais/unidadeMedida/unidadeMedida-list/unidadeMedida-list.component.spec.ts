import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UnidadeMedidaListComponent } from './unidadeMedida-list.component';

describe('UnidadeMedidaListComponent', () => {
  let component: UnidadeMedidaListComponent;
  let fixture: ComponentFixture<UnidadeMedidaListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadeMedidaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadeMedidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
