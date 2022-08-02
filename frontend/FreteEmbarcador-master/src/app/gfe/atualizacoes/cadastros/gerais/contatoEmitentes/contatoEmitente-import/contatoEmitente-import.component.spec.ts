import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContatoEmitenteImportComponent } from './contatoEmitente-import.component';

describe('ContatoEmitenteImportComponent', () => {
  let component: ContatoEmitenteImportComponent;
  let fixture: ComponentFixture<ContatoEmitenteImportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoEmitenteImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoEmitenteImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
