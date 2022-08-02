import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContatoEmitenteFormComponent } from './contatoEmitente-form.component';

describe('ContatoEmitenteFormComponent', () => {
  let component: ContatoEmitenteFormComponent;
  let fixture: ComponentFixture<ContatoEmitenteFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoEmitenteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoEmitenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
