import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoOperacaoDetailComponent } from './tipoOperacao-detail.component';

describe('TipoOperacaoDetailComponent', () => {
  let component: TipoOperacaoDetailComponent;
  let fixture: ComponentFixture<TipoOperacaoDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOperacaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOperacaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
