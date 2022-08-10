import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoOperacaoListComponent } from './tipoOperacao-list.component';

describe('TipoOperacaoListComponent', () => {
  let component: TipoOperacaoListComponent;
  let fixture: ComponentFixture<TipoOperacaoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOperacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOperacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
