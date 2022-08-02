import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContatoEmitenteDetailComponent } from './contatoEmitente-detail.component';

describe('ContatoEmitenteDetailComponent', () => {
  let component: ContatoEmitenteDetailComponent;
  let fixture: ComponentFixture<ContatoEmitenteDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoEmitenteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoEmitenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
