import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContatoEmitenteListComponent } from './contatoEmitente-list.component';

describe('ContatoEmitenteListComponent', () => {
  let component: ContatoEmitenteListComponent;
  let fixture: ComponentFixture<ContatoEmitenteListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoEmitenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoEmitenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
