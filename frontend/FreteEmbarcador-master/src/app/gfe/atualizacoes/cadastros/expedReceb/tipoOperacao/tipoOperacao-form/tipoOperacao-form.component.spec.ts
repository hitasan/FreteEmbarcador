import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TipoOperacaoFormComponent } from './tipoOperacao-form.component';

describe('TipoOperacaoFormComponent', () => {
  let component: TipoOperacaoFormComponent;
  let fixture: ComponentFixture<TipoOperacaoFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoOperacaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoOperacaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
